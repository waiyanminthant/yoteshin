import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderBar } from "./components/layout/Header";
import { NavBar } from "./components/layout/NavBar";
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
        <HeaderBar />
        <NavBar />
        {children}
        <FooterBar />
      </body>
    </html>
  );
}
