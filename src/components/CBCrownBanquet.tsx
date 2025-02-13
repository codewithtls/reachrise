"use client";
import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsQuora,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import Image from "next/image";
function CBCrownBanquet() {
  const cards = [
    {
      title: "CB Crown Banquet",
      src: "/images/cb/cb-1.webp",
    },
    {
      title: "Best Banquet Hall in Noida",
      src: "/images/cb/cb-2.webp",
    },
    {
      title: "Banquet Halls Near Me",
      src: "/images/cb/cb-3.webp",
    },
    {
      title: "Banquet Halls in Noida",
      src: "/images/cb/cb-4.webp",
    },
    {
      title: "Party Halls in Noida",
      src: "/images/cb/cb-5.webp",
    },
    {
      title: "Banquet Halls in Noida with Price",
      src: "/images/cb/cb-6.webp",
    },
    {
      title: "Birthday Party Halls in Noida",
      src: "/images/cb/cb-7.webp",
    },
    {
      title: "Small Party Venues in Noida",
      src: "/images/cb/cb-8.webp",
    },
    {
      title: "Birthday Party Venues in Noida",
      src: "/images/cb/cb-9.webp",
    },
  ];
  const links = [
    {
      title: "CB Crown Banquet -FaceBook",
      icon: (
        <BsFacebook className="h-full w-full text-blue-500 dark:text-blue-300" />
      ),
      href: "https://www.facebook.com/profile.php?id=100088080422818&mibextid=9R9pXO",
    },
    {
      title: "CB Crown Banquet -Instagram",
      icon: (
        <BsInstagram className="h-full w-full text-pink-500 dark:text-pink-300" />
      ),
      href: "https://www.instagram.com/crownbanquetnoida63/",
    },
    {
      title: "CB Crown Banquet -Youtube",
      icon: (
        <BsYoutube className="h-full w-full text-red-500 dark:text-red-300" />
      ),
      href: "https://www.youtube.com/@CrownBanquet01/",
    },
    {
      title: "CB Crown Banquet -LinkedIn",
      icon: (
        <BsLinkedin className="h-full w-full text-blue-500 dark:text-blue-300" />
      ),
      href: "https://www.linkedin.com/company/87422749/",
    },
    {
      title: "CB Crown Banquet -Twitter",
      icon: (
        <BsTwitter className="h-full w-full text-blue-500 dark:text-blue-300" />
      ),
      href: "https://x.com/crownbanquet1",
    },
    {
      title: "CB Crown Banquet -Pinterest",
      icon: (
        <BsPinterest className="h-full w-full text-red-500 dark:text-red-300" />
      ),
      href: "https://in.pinterest.com/crownbanquet01/",
    },
    {
      title: "CB Crown Banquet -Quora",
      icon: (
        <BsQuora className="h-full w-full text-red-500 dark:text-red-300" />
      ),
      href: "https://www.quora.com/profile/CB-Crown-Banquet-Noida",
    },
    {
      title: "CB Crown Banquet -GMB",
      icon: (
        <Image
          src="/images/google-logo.png"
          width={20}
          height={20}
          alt="Google Logo"
        />
      ),
      href: "https://g.co/kgs/qQZnFM6",
    },
  ];
  return (
    <section>
      <div className="container mx-auto px-4 my-10 overflow-hidden">
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          About CB Crown Banquet
        </h2>
        <p className="text-lg mb-2 text-gray-700">
          Welcome to CB Crown Banquet, one of the most elegant and spacious
          banquet halls in Noida, located near the Electronic City Metro Station
          for easy accessibility. Whether you are planning a wedding, birthday
          party, baby shower, corporate event, or any grand celebration, we
          offer a stunning venue with top-class facilities to make your special
          moments truly unforgettable.
        </p>
        <p className="text-lg mb-2 text-gray-700">
          Our banquet hall is designed to offer luxury, comfort, and
          convenience. With a beautifully decorated space, customizable decor,
          and a diverse menu, CB Crown Banquet is the perfect place to host
          memorable events. Our team ensures seamless event planning with
          exceptional service, ample parking, and premium hospitality.
        </p>
        <p className="text-lg mb-2 text-gray-700">
          With a strong reputation for hosting some of the most grand and
          elegant events in Noida, we take pride in creating unforgettable
          experiences for families, businesses, and social gatherings.
        </p>
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          Why Choose CB Crown Banquet?
        </h2>

        <ul className="text-lg mb-2 text-gray-700 pl-4 list-disc">
          <li>
            <strong>Spacious & Luxurious Venue –</strong> Conveniently located near Electronic
            City Metro Station
          </li>
          <li>Customized Decor & Unlimited Food Packages</li>
          <li>
            <strong>Ideal for All Events –</strong> Weddings, corporate functions, birthday
            parties, baby showers
          </li>
          <li>Excellent Customer Service & Event Planning Assistance</li>
        </ul>
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
        Book CB Crown Banquet for Your Event Today!
        </h2>
        <ul className="text-lg mb-2 text-gray-700">
          <li>
            <strong>📍 Address:</strong>{" "}
            <a
              href="https://www.google.com/maps/place/CB+Crown+Banquet/@28.6274013,77.3727747,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce5ef7777dbdb:0xd66320d554b950d8!8m2!3d28.6273966!4d77.3753496!16s%2Fg%2F11s7zhdbxb?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
              className="font-semibold hover:text-[color:--primary-color]"
              target="_blank"
            >
              H1A/ 25, Sector 63 Rd, Noida, Uttar Pradesh 201301
            </a>
          </li>
          <li>
            <strong>📞 Phone:</strong>{" "}
            <a
              href="tel:+919667770609"
              className="font-semibold hover:text-[color:--primary-color]"
            >
              +919667770609
            </a>
          </li>
          <li>
            <strong>📩 Email:</strong>{" "}
            <a
              href="mailto:info@crownbanquetnoida.com"
              className="font-semibold hover:text-[color:--primary-color]"
            >
            info@crownbanquetnoida.com
            </a>
          </li>
          <li>
            <strong>🌐 Website:</strong>{" "}
            <a
              href="https://www.crownbanquetnoida.com"
              className="font-semibold hover:text-[color:--primary-color]"
              target="_blank"
            >
              www.crownbanquetnoida.com
            </a>
          </li>
        </ul>
      </div>
      <FloatingDock mobileClassName="translate-y-20" items={links} />
      <div className="container mx-auto px-4 my-10 overflow-hidden">
        <FocusCards cards={cards} />
      </div>
    </section>
  );
}
export default CBCrownBanquet;
