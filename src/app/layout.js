import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Slider from "@/components/slider/Slider";
import MagazineList from "@/components/Cards/magazineList";
import MagazineList2 from "@/components/Cards/magazineList2";
import BusBulletins from "@/components/Cards/BusBulletins";
import VerticalCards from "@/components/Cards/verticalCards";
import Details from "@/components/Details/Details";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Condensed({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />

        <div>{children}</div>
      </body>
    </html>
  );
}
