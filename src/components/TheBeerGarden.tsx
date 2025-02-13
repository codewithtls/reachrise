"use client";
import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import Image from "next/image";
function TheBeerGarden() {
  const cards = [
    {
      title: "The Beer Garden",
      src: "/images/tbg/tbg-1.jpg",
    },
    {
      title: "The Beer Garden Noida",
      src: "/images/tbg/tbg-2.png",
    },
    {
      title: "Restaurant in noida",
      src: "/images/tbg/tbg-3.jpg",
    },
    {
      title: "Best Restaurant in Noida",
      src: "/images/tbg/tbg-4.jpg",
    },
    {
      title: "Best Food in Noida",
      src: "/images/tbg/tbg-5.jpg",
    },
    {
      title: "Restaurant in Noida 63",
      src: "/images/tbg/tbg-6.jpg",
    },
    {
      title: "Best Restaurant in Noida 63",
      src: "/images/tbg/tbg-7.jpg",
    },
    {
      title: "Restaurant in Noida Sector 63",
      src: "/images/tbg/tbg-8.jpg",
    },
    {
      title: "Best Restaurant in Noida Sector 63",
      src: "/images/tbg/tbg-9.jpg",
    },
  ];
  const links = [
    {
      title: "The Beer Garden -FaceBook",
      icon: (
        <BsFacebook className="h-full w-full text-blue-500 dark:text-blue-300" />
      ),
      href: "https://www.facebook.com/profile.php?id=100087750826430&mibextid=9R9pXO",
    },
    {
      title: "The Beer Garden -Instagram",
      icon: (
        <BsInstagram className="h-full w-full text-pink-500 dark:text-pink-300" />
      ),
      href: "https://instagram.com/thebeergardenindia",
    },
    {
      title: "The Beer Garden -Twitter",
      icon: (
        <BsTwitter className="h-full w-full text-blue-500 dark:text-blue-300" />
      ),
      href: "https://twitter.com/Thebeergardenl",
    },
    {
      title: "The Beer Garden -Youtube",
      icon: (
        <BsYoutube className="h-full w-full text-red-500 dark:text-red-300" />
      ),
      href: "https://www.youtube.com/@thebeergarden01",
    },
    {
      title: "The Beer Garden -LinkedIn",
      icon: (
        <BsLinkedin className="h-full w-full text-blue-500 dark:text-blue-300" />
      ),
      href: "https://www.linkedin.com/company/thebeergardenindia/",
    },

    {
      title: "The Beer Garden -Pinterest",
      icon: (
        <BsPinterest className="h-full w-full text-red-500 dark:text-red-300" />
      ),
      href: "https://in.pinterest.com/thebeergarden01/",
    },
    {
      title: "The Beer Garden -GMB",
      icon: (
        <Image
          src="/images/google-logo.png"
          width={20}
          height={20}
          alt="Google Logo"
        />
      ),
      href: "https://g.co/kgs/DTN3u7t",
    },
  ];
  return (
    <section>
      <div className="container mx-auto px-4 my-10 overflow-hidden">
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          About The Beer Garden
        </h2>
        <p className="text-lg mb-2 text-gray-700">
          Welcome to The Beer Garden Noida, where good vibes, amazing food, and
          refreshing drinks come together in a beautiful open-air setting. As
          one of Noida’s most loved rooftop restro-bars, we offer an
          unforgettable experience for party lovers, couples, and corporate
          gatherings.
        </p>
        <p className="text-lg mb-2 text-gray-700">
          Located in the heart of Noida’s nightlife district, The Beer Garden is
          known for its lush green rooftop ambiance, stylish interiors, and an
          incredible selection of craft beers, cocktails, and gourmet dishes.
          Whether you’re planning a romantic date night, a birthday party, or a
          casual outing with friends, we have everything to make your evening
          special.
        </p>
        <p className="text-lg mb-2 text-gray-700">
          Our unique garden-themed decor makes us stand out as one of the most
          aesthetic and Instagram-worthy spots in Noida. So, come, sip on your
          favorite drink, indulge in our signature delicacies, and enjoy the
          perfect rooftop experience!
        </p>
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          Why Visit The Beer Garden?
        </h2>
        <ul className="text-lg mb-2 text-gray-700 pl-4 list-disc">
          <li>
            <strong>Garden-Themed Rooftop Lounge –</strong> A beautiful open-air
            setting
          </li>
          <li>
            <strong>Perfect for Every Occasion –</strong> Date nights,
            celebrations, and corporate gatherings
          </li>
          <li>
            <strong>High-Rated on Google –</strong> Loved by customers for its
            scenic beauty and service
          </li>
          <li>
            <strong>Live Music & Events –</strong> DJ nights, Karaoke, and
            exclusive party nights
          </li>
        </ul>
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          Visit The Beer Garden – Best Rooftop Café in Delhi NCR & Noida
        </h2>
        <ul className="text-lg mb-2 text-gray-700">
          <li>
            <strong>📍 Address:</strong>{" "}
            <a
              href="https://www.google.com/maps/place/Ministry+of+Daru/@28.6274007,77.3727742,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce557cb655555:0x590f7b0c7da91eff!8m2!3d28.627396!4d77.3753491!16s%2Fg%2F11sk55x31l?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
              className="font-semibold hover:text-[color:--primary-color]"
              target="_blank"
            >
              H1A/ 25, Sector 63 Rd, Noida
            </a>
          </li>
          <li>
            <strong>📞 Phone:</strong>{" "}
            <a
              href="tel:+919667625005"
              className="font-semibold hover:text-[color:--primary-color]"
            >
              +91-9667625005
            </a>
            ,{" "}
            <a
              href="tel:+919650132001"
              className="font-semibold hover:text-[color:--primary-color]"
            >
              +91-9650132001
            </a>
          </li>
          <li>
            <strong>📩 Email:</strong>{" "}
            <a
              href="mailto:info@thebeergardenindia.com"
              className="font-semibold hover:text-[color:--primary-color]"
            >
              info@thebeergardenindia.com
            </a>
          </li>
          <li>
            <strong>🌐 Website:</strong>{" "}
            <a
              href="https://www.thebeergardenindia.com"
              className="font-semibold hover:text-[color:--primary-color]"
              target="_blank"
            >
              www.thebeergardenindia.com
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

export default TheBeerGarden;
