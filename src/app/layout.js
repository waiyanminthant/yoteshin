import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderBar } from "./components/layout/Header";
import { FooterBar } from "./components/layout/Footer";
import { Suspense } from "react";
import LoadingWidget from "./loading";
import { SearchBar } from "./components/layout/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YoteShin",
  description: "Coded By Waiyan Min Thant",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col justify-between h-screen">
          <HeaderBar />
          <SearchBar />
          <Suspense fallback={<LoadingWidget />}>
            {children}
          </Suspense>
          <FooterBar />
        </div>
      </body>
    </html>
  );
}
