import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import {AuthProvider} from "./context/AuthContext"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <> 
    <AuthProvider>
      <html lang="en">
        <body className="w-[100vw] ">
            <Navbar />
            {children}
        </body>
      </html>
    </AuthProvider>
    </>
  );
}
