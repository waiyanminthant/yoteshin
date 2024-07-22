import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderBar } from "./components/layout/Header";
import { FooterBar } from "./components/layout/Footer";

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
          <div className="mt-16">
            {children}
          </div>
          <FooterBar />
        </div>
      </body>
    </html>
  );
}
