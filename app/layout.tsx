import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import "../public/css/font-awesome.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fpt Smart Home",
  description: "quochau.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" ">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
