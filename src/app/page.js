'use client'

import { useEffect, useState } from "react";
import { ref, set, onValue, get } from 'firebase/database';
import StartFirebase from '../utils/configFirebase';
import Image from "next/image";
import moment from "moment";
import 'moment/locale/id';

const db = StartFirebase();

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dbRef = ref(db);
    onValue(dbRef, (snapshot) => {
      const dataFromFirebase = snapshot.val();
      if (dataFromFirebase && dataFromFirebase.data) {
        const listData = Object.values(dataFromFirebase.data);
        const active = dataFromFirebase.isActive;
        const activeNews = listData.filter((_, index) => index === active);
        setData(activeNews[0]);
      }
    });
  }, []);

  console.log(data, '<<< data');
  
  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="flex h-fit items-center justify-center m-4">
      <div className="border-[1px] w-full max-w-[500px] rounded-lg p-4">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        {data?.image && (
          <>
            <Image
              src={`/assets/${data.image}.jpg`}
              alt=''
              width={500}
              height={300}
              className="w-full h-auto rounded-md my-4"
            />
            <p className="text-xs text-gray-500 float-right">Source : google.com</p>
          </>
        )}
        <div className="mt-4 text-sm mt-10">Penulis : <b>{data?.writer}</b></div>
        <div className="text-sm">Editor : <b>{data?.editor}</b></div>
        <div className="text-sm mb-10">Tanggal : <b>{moment(data?.date).locale('id').format('DD MMMM YYYY, hh:mm')} WIB</b></div>
        <div className="mt-4 text-justify leading-relaxed">
          {data?.content?.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
