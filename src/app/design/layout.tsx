import { Navbar } from "@/app/components/ui/Navbar";
import { Footer } from "@/app/components/sections/Footer";
import { Montserrat, Roboto_Flex } from "next/font/google";
import "../globals.css";
import SubHeader from "../components/design/sections/SubHeader";

const roboto = Roboto_Flex({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Debord Design",
  description:
    "Documentación de Debord Design, la librería de componentes React que he construido y publicado en npm.",
};

export default function DesignLayout({ children }) {
  return (
    <section className={`${roboto.className}`}>
      <SubHeader />
      {children}
    </section>
  );
}
