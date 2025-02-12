"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import list from "@/helper/list";
import { FaArrowRightLong } from "react-icons/fa6";

function Cards() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((item) => (
          <CardContainer key={item.id} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto rounded-xl p-6 border min-h-[480px] flex flex-col">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white text-[color:--primary-color]"
              >
                {item.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item.description}
              </CardItem>
              <CardItem
                translateZ="100"
                className="w-full mt-4 flex-grow"
              >
                <Link href={item.more}>
                  <Image
                    src={item.image}
                    height={400} // Adjust height for responsiveness
                    width={400} // Maintain aspect ratio
                    className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={item.title}
                  />
                </Link>
              </CardItem>
              <div className="flex justify-between items-center mt-6">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={item.visit}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  <span className="flex items-center gap-2">Visit Now<FaArrowRightLong /></span>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={item.more}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Learn More
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
export default Cards;