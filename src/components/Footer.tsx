import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Link from "next/link";
const websites = [
  {
    id: 1,
    name: "Ministry of Daru",
    url: "https://www.ministryofdaru.com/",
    image: "/images/icons/mod.png",
  },
  {
    id: 2,
    name: "The Beer Garden",
    url: "https://www.thebeergardenindia.com/",
    image: "/images/icons/tbg.png",
  },
  {
    id: 3,
    name: "TLS -The Japanese Language School",
    url: "https://www.teamlanguages.com/",
    image: "/images/icons/tls.png",
  },
  {
    id: 4,
    name: "CB Crown Banquet",
    url: "https://crownbanquetnoida.com/",
    image: "/images/icons/cb.png",
  },
  {
    id: 5,
    name: "Code With TLS",
    url: "https://codewithtls.com/",
    image: "/images/icons/cwt.png",
  },
  {
    id: 6,
    name: "Promfly",
    url: "https://promfly.com/",
    image: "/images/icons/pf.png",
  },
  {
    id: 7,
    name: "HeyFairies",
    url: "https://heyfairies.com/",
    image: "/images/icons/hf.png",
  },
];
function Footer() {
  return (
    <div className="relative h-[40vh] overflow-hidden flex items-center justify-center m-0 border-t border-gray-900 py-10">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <div className="mb-4">
          <Link href={"/"}>
            <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-[color:--primary-color]">
              Reach Rise
            </h1>
          </Link>
        </div>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Stay updated with our latest work and insights across various
          platforms.
        </p>
        <div className="flex flex-row items-center justify-center w-full mb-6">
          <AnimatedTooltip items={websites} />
        </div>
        <p className="text-sm md:text-base text-white text-center">
          All Rights Reserved | &copy; {new Date().getFullYear()}{" "}
          <Link href="/" className="font-semibold ">
            Reach Rise
          </Link>
        </p>
      </WavyBackground>
    </div>
  );
}

export default Footer;
