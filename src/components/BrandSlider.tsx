"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Link from "next/link";

const BrandSlider = () => {
  const brands = [
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
      url: "https://www.codewithtls.com/",
      image: "/images/icons/cwt.png",
    },
    {
      id: 6,
      name: "PromFly",
      url: "https://www.promfly.com/",
      image: "/images/icons/1.png",
    },
    {
      id: 7,
      name: "HeyFairies",
      url: "https://www.heyfairies.com/",
      image: "/images/icons/hf.png",
    },
    {
      id: 8,
      name: "Noida Urban",
      url: "https://www.noidaurban.com/",
      image: "/images/icons/noida.png",
    },
    {
      id: 9,
      name: "Indus Thrills",
      url: "https://www.industhrills.com/",
      image: "/images/icons/indus.png",
    },
    {
      id: 10,
      name: "What Goes Hunt",
      url: "https://www.whatgoeshunt.com/",
      image: "/images/icons/hunt.png",
    },
  ];

  const duplicatedBrands = [...brands, ...brands];
  const heading = [
    { text: "Discover" },
    { text: "Our" },
    {
      text: "Brands",
      className:
        "text-[color:--primary-color] dark:text-[color:--primary-color]",
    },
  ];

  return (
    <section className="overflow-hidden md:my-20 my-10 text-black">
      <div className="flex flex-col items-center justify-center">
        <TypewriterEffect words={heading} />
      </div>

      {/* Marquee Effect */}
      <motion.div
        className="flex gap-5 flex-nowrap my-10"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {duplicatedBrands.map((brand, index) => (
          <motion.div
            key={index}
            className="shrink-0 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <Link href={brand.url} target="_blank">
              <Image
                className="w-24 md:w-40 rounded-full border border-gray-300 brightness-90"
                src={brand.image}
                alt={brand.name}
                width={300}
                height={300}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BrandSlider;
