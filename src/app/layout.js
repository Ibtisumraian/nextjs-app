import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";
import { Bounce, ToastContainer } from "react-toastify";


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
            <NextAuthSessionProvider>
          <div className="">
            <Navbar />
          </div>
          
          <main>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              transition={Bounce}
              />
            {children}
          </main>

          <div>
            <Footer/>
          </div>
      </NextAuthSessionProvider>
        </body>        
    </html>
  );
}
