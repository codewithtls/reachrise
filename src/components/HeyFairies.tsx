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
  BsYoutube,
} from "react-icons/bs";
import Image from "next/image";
function HeyFairies() {
  const cards = [
    {
      title: "Trident Grace Glass Case Mobile Cover",
      src: "/images/hf/hf-1.webp",
    },
    {
      title: "Casual Love Glass Case Mobile Cover",
      src: "/images/hf/hf-2.webp",
    },
    {
      title: "Melodic Spring Glass Case Mobile Cover",
      src: "/images/hf/hf-3.webp",
    },
    {
      title: "Beary Yours Customized Glass Mobile Cover",
      src: "/images/hf/hf-4.webp",
    },
    {
      title: "Peek-a-Panda Customized Glass Mobile Cover",
      src: "/images/hf/hf-5.webp",
    },
    {
      title: "Your Initials Customized Glass Mobile Cover",
      src: "/images/hf/hf-6.webp",
    },
    {
      title: "Mud Rover Customized Glass Mobile Cover",
      src: "/images/hf/hf-7.webp",
    },
    {
      title: "Zippy Bro Customized Glass Mobile Cover",
      src: "/images/hf/hf-8.webp",
    },
    {
      title: "Curious Gaze Customized Glass Mobile Cover",
      src: "/images/hf/hf-9.webp",
    },
  ];
  const links = [
    {
      title: "HeyFairies -FaceBook",
      icon: (
        <BsFacebook className="h-full w-full text-blue-500 dark:text-blue-300" />
      ),
      href: "https://www.facebook.com/people/Hey-Fairies/61559027371766/",
    },
    {
      title: "HeyFairies -Instagram",
      icon: (
        <BsInstagram className="h-full w-full text-pink-500 dark:text-pink-300" />
      ),
      href: "https://www.instagram.com/heyfairiesofficial/",
    },
    {
      title: "HeyFairies -Youtube",
      icon: (
        <BsYoutube className="h-full w-full text-red-500 dark:text-red-300" />
      ),
      href: "https://www.youtube.com/@hfindo5358",
    },
    {
      title: "HeyFairies -Pinterest",
      icon: (
        <BsPinterest className="h-full w-full text-red-500 dark:text-red-300" />
      ),
      href: "https://in.pinterest.com/heyfairiesofficial/",
    },
    {
      title: "HeyFairies -Quora",
      icon: (
        <BsQuora className="h-full w-full text-red-500 dark:text-red-300" />
      ),
      href: "https://www.quora.com/profile/HeyFairies",
    },
    {
      title: "HeyFairies -GMB",
      icon: (
        <Image
          src="/images/google-logo.png"
          width={20}
          height={20}
          alt="Google Logo"
        />
      ),
      href: "https://maps.app.goo.gl/bFGn364qXqLa9PnJ9",
    },
  ];
  return (
    <section>
      <div className="container mx-auto px-4 my-10 overflow-hidden">
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          About HeyFairies
        </h2>
        <p className="text-lg mb-2 text-gray-700">
          At HeyFairies, we believe that your phone case should be as unique as
          you are! We bring you an exclusive collection of custom mobile covers
          that let you express your personality while keeping your device safe.
        </p>
        <p className="text-lg mb-2 text-gray-700">
          From trendy printed designs to fully personalized phone cases,
          HeyFairies offers top-notch customization options that allow you to
          add your name, photo, or any creative artwork. Our easy-to-use online
          platform ensures a seamless designing experience, making it fun and
          effortless to create a cover that truly represents you.
        </p>
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          Why Choose HeyFairies for Customized Phone Cases?
        </h2>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          1. High-Quality Printing & Premium Materials
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          We use advanced printing technology to ensure vibrant, fade-proof
          designs. Our covers are made from durable materials that provide
          long-lasting protection for your phone.
        </p>
        <ul className="text-lg mb-2 text-gray-700">
          <li>📱 HD print quality with scratch-resistant finish</li>
          <li>🔹 Matte & glossy finish options</li>
          <li>🛡 Shockproof & anti-scratch materials</li>
        </ul>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          2. 100% Customization – Design Your Own Cover
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          Want to add your name, initials, or a favorite quote? At HeyFairies,
          you have unlimited customization options:
        </p>
        <ul className="text-lg mb-2 text-gray-700">
          <li>🎨 Upload your own design or choose from our trendy templates</li>
          <li>🖋 Personalize with your name, logo, or favorite artwork</li>
          <li>📸 Photo-printed cases with high-definition clarity</li>
        </ul>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          3. Wide Range of Mobile Cover Options
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          We offer cases for all major phone brands, including Apple, Samsung,
          OnePlus, Xiaomi, Realme, and more!
        </p>
        <ul className="text-lg mb-2 text-gray-700 pl-4 list-disc">
          <li>
            <strong>💎 Soft Silicone Cases</strong> – Flexible & lightweight
          </li>
          <li>
            <strong>🔹 Hard Plastic Cases</strong> – Sleek & sturdy
          </li>
          <li>
            <strong>🛡 Glass Cases</strong> – Premium glossy look
          </li>
          <li>
            <strong>📱 Wallet & Flip Covers</strong> – Stylish & functional
          </li>
        </ul>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          4. Affordable Pricing & Fast Delivery Across India
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          We provide high-quality custom mobile covers at unbeatable prices.
          Plus, our super-fast delivery ensures you receive your cover in no
          time!
        </p>
        <ul>
          <li>🚚 Fast shipping across India</li>
          <li>💰 Budget-friendly customization options</li>
          <li>✅ Cash on Delivery (COD) available</li>
        </ul>
        <h3 className="text-lg text-black fint-bold my-2 font-bold">
          5. Best Customer Support & Satisfaction Guarantee
        </h3>
        <p className="text-lg mb-2 text-gray-700">
          At HeyFairies, customer satisfaction is our priority. We ensure:
        </p>
        <ul className="text-lg mb-2 text-gray-700 pl-4 list-disc">
          <li>📦 Hassle-free returns & replacements</li>
          <li>📞 Dedicated customer support for quick assistance</li>
          <li>🌟 1000+ happy customers & glowing reviews!</li>
        </ul>
        
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
        Order Your Custom Mobile Cover Today!
        </h2>
        <ul className="text-lg mb-2 text-gray-700">
          <li>
            <strong>📞 Phone:</strong>{" "}
            <a
              href="tel:+918810389869"
              className="font-semibold hover:text-[color:--primary-color]"
            >
              +918810389869
            </a>
          </li>
          <li>
            <strong>📩 Email:</strong>{" "}
            <a
              href="mailto:support@heyfairies.com"
              className="font-semibold hover:text-[color:--primary-color]"
            >
              support@heyfairies.com
            </a>
          </li>
          <li>
            <strong>🌐 Website:</strong>{" "}
            <a
              href="https://www.heyfairies.com"
              className="font-semibold hover:text-[color:--primary-color]"
              target="_blank"
            >
              www.heyfairies.com
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

export default HeyFairies;
