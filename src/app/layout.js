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
    images: [
      {
        url: "/assets/demo1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StreamOne.news",
    description: "StreamOne.news",
    images: ["/assets/demo1.jpg"],
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
      <title>StreamOne.news</title>
      <meta name="title" content="StreamOne.news" />
      <meta name="description" content="StreamOne.news" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://news-topaz-chi.vercel.app/" />
      <meta property="og:title" content="StreamOne.news" />
      <meta property="og:description" content="StreamOne.news" />
      <meta property="og:image" content="https://news-topaz-chi.vercel.app/assets/demo1.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://news-topaz-chi.vercel.app/" />
      <meta property="twitter:title" content="StreamOne.news" />
      <meta property="twitter:description" content="StreamOne.news" />
      <meta property="twitter:image" content="https://news-topaz-chi.vercel.app/assets/demo1.jpg" />

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
