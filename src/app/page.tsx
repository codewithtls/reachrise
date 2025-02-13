import About from "@/components/About";
import BrandSlider from "@/components/BrandSlider";
import BreadCrumbHome from "@/components/BreadCrumbHome";
import Cards from "@/components/Cards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reach Rise | Market Leader in Education, Hospitality, & Digital Services",
  description:
    "Reach Rise is a multi-business enterprise offering premium services in education, language learning, hospitality, entertainment, tech courses, event hosting, and digital marketing. Discover excellence with our brands: TLS, MOD, TBG, Code with TLS, CB Crown Banquet, Hey Fairies, and PromFly",
  keywords:
    "Reach Rise, best services in education, language learning, hospitality, entertainment, digital marketing, Japanese language school, fine dining, rooftop café, tech courses, banquet hall, customized mobile covers.",
  alternates: {
    canonical: "https://www.reachrise.com/",
  },
};
export default function Home() {
  return (
    <>
      <BreadCrumbHome />
      <Cards />
      <About />
      <BrandSlider />
    </>
  );
}