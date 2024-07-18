import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderBar } from "./components/Header";
import { NavBar } from "./components/NavBar";

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
      </body>
    </html>
  );
}
