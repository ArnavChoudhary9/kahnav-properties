import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from '../components/navbar'
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kahnav Properties",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
