import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Travel Guru",
  description: "Travel Guru helps you discover and book unforgettable travel experiences across the globe. From curated destinations to personalized trip planning, we bring the world closer—one journey at a time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <div className="">
          <Navbar />
        </div>
        
        <main>
          {children}
        </main>

        <div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
