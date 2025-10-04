import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://news-topaz-chi.vercel.app/"),
  title: "StreamOne.news",
  description: "StreamOne.news",
  keywords: "berita, terkini, streamone, news",
  openGraph: {
    title: "StreamOne.news",
    description: "StreamOne.news",
    images: ["/assets/demo1.jpg"],
    url: "https://news-topaz-chi.vercel.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StreamOne.news",
    description: "StreamOne.news",
    images: ["/assets/demo1.jpg"],
    creator: '@NamaAkunXAnda',
  },
  icons: {
    icon: "/favicon.ico", // Path ke favicon Anda di folder public
  },
  other: {
    // Contoh untuk <link rel="preconnect" ...>
    "preconnect-fonts-gstatic": {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    // Contoh untuk <link rel="stylesheet" ...>
    "google-fonts": "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
    // Menambahkan link preload untuk gambar
    "preload-image-example": {
      rel: "preload",
      as: "image",
      href: "/assets/demo1.jpg",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
