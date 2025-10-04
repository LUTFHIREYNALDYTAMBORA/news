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
    apple: "/apple-touch-icon.jpg", // Untuk perangkat Apple
    shortcut: "/favicon-16x16.jpg", // Contoh lain
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
      href: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/1200x675/photo/2025/09/12/2914343594.jpg",
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
