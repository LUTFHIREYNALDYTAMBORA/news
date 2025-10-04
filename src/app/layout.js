import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "StreamOne.news",
  description: "StreamOne.news",
  keywords: "berita, terkini, streamone, news",
  openGraph: {
    title: "StreamOne.news",
    description: "StreamOne.news",
    images: [
      {
        url: "/assets/demo1.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>StreamOne.news</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="StreamOne.news" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="/assets/demo1.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
