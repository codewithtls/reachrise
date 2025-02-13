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
function MinistryOfDaru() {
  const cards = [
    {
      title: "Ministry of Daru",
      src: "/images/mod/mod-1.jpg",
    },
    {
      title: "Ministry of Daru Noida",
      src: "/images/mod/mod-2.jpg",
    },
    {
      title: "Restaurant in noida",
      src: "/images/mod/mod-3.jpg",
    },
    {
      title: "Best Restaurant in Noida",
      src: "/images/mod/mod-4.jpg",
    },
    {
      title: "Best Food in Noida",
      src: "/images/mod/mod-5.jpg",
    },
    {
      title: "Restaurant in Noida 63",
      src: "/images/mod/mod-6.jpg",
    },
    {
      title: "Best Restaurant in Noida 63",
      src: "/images/mod/mod-7.jpg",
    },
    {
      title: "Restaurant in Noida Sector 63",
      src: "/images/mod/mod-8.jpg",
    },
    {
      title: "Best Restaurant in Noida Sector 63",
      src: "/images/mod.png",
    },
  ];
  const links = [
    {
      title: "Ministry of Daru -FaceBook",
      icon: (
        <BsFacebook className="h-full w-full text-blue-500 dark:text-blue-300" />
      ),
      href: "https://www.facebook.com/people/ministryofdaru/100087975666924/",
    },
    {
      title: "Ministry of Daru -Instagram",
      icon: (
        <BsInstagram className="h-full w-full text-pink-500 dark:text-pink-300" />
      ),
      href: "https://www.instagram.com/ministryofdaru/",
    },
    {
      title: "Ministry of Daru -Twitter",
      icon: (
        <BsTwitter className="h-full w-full text-blue-500 dark:text-blue-300" />
      ),
      href: "https://x.com/MinistryofdaruM",
    },
    {
      title: "Ministry of Daru -Youtube",
      icon: (
        <BsYoutube className="h-full w-full text-red-500 dark:text-red-300" />
      ),
      href: "https://www.youtube.com/@ministryofdaru",
    },
    {
      title: "Ministry of Daru -LinkedIn",
      icon: (
        <BsLinkedin className="h-full w-full text-blue-500 dark:text-blue-300" />
      ),
      href: "https://www.linkedin.com/company/ministry-of-daru/",
    },

    {
      title: "Ministry of Daru -Pinterest",
      icon: (
        <BsPinterest className="h-full w-full text-red-500 dark:text-red-300" />
      ),
      href: "https://in.pinterest.com/ministryofdaru/",
    },
    {
      title: "Ministry of Daru -GMB",
      icon: (
        <Image
          src="/images/google-logo.png"
          width={20}
          height={20}
          alt="Google Logo"
        />
      ),
      href: "https://g.co/kgs/gQKWrMx",
    },
  ];
  return (
    <section>
      <div className="container mx-auto px-4 my-10 overflow-hidden">
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          About Ministry of Daru
        </h2>
        <p className="text-lg mb-2 text-gray-700">
          Located in the heart of Noida, Ministry of Daru is more than just a
          restaurant – it’s an experience. Whether you’re looking for a fine
          dining experience, a lively bar, or a rooftop lounge with breathtaking
          views, we have it all. Our venue combines exquisite food, premium
          drinks, and world-class entertainment, making it the perfect spot for
          date nights, corporate events, birthday celebrations, and weekend
          hangouts.
        </p>
        <p className="text-lg mb-2 text-gray-700">
          At Ministry of Daru, we believe that a great meal is not just about
          the food – it's about the ambience, the music, the people, and the
          memories you create. With a stylish indoor space, a stunning rooftop
          lounge, and outdoor seating, we cater to all moods and occasions.
        </p>
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          Why Visit Ministry of Daru?
        </h2>
        <ul className="text-lg mb-2 text-gray-700 pl-4 list-disc">
          <li>
            <strong>Indoor & Outdoor Seating –</strong> Experience a rooftop
            lounge ambiance Live
          </li>
          <li>
            <strong>Entertainment Daily –</strong> Music shows, DJ nights, and
            stand-up comedy Best
          </li>
          <li>
            <strong>Hospitality –</strong> Highly rated for customer service and
            ambiance Happy Hour
          </li>
          <li>
            <strong>Deals –</strong> Enjoy unlimited food & drinks packages
          </li>
        </ul>
        <p className="text-lg mb-2 text-gray-700">
          Whether you're a food lover, party enthusiast, or someone looking for
          a sophisticated dining experience, Ministry of Daru is the perfect
          destination.
        </p>
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          Events at Ministry of Daru
        </h2>
        <p className="text-lg mb-2 text-gray-700">
          We regularly host themed events, private parties, and corporate
          gatherings. Visit our events page to stay updated on upcoming shows!
          <br />
          🔗 Check out our events:{" "}
          <a
            href="https://www.ministryofdaru.com/events/"
            className="font-semibold hover:text-[color:--primary-color]"
          >
            https://www.ministryofdaru.com/events/
          </a>
        </p>
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          Franchise Opportunity – Start Your Own Ministry of Daru
        </h2>
        <p className="text-lg mb-2 text-gray-700">
          Looking to invest in the booming hospitality industry? Ministry of
          Daru offers exciting franchise opportunities to passionate
          entrepreneurs who want to own a successful fine dining & bar concept.
        </p>
        <ul className="text-lg mb-2 text-gray-700">
          <li>✅ Established Brand with High Footfall</li>
          <li>✅ Complete Operational & Marketing Support</li>
          <li>✅ Profitable Business Model with Excellent ROI</li>
        </ul>
        <p className="text-lg mb-2 text-gray-700">
          For franchise inquiries, Visit:{" "}
          <a
            className="font-semibold hover:text-[color:--primary-color]"
            href="https://www.ministryofdaru.com/franchise/"
          >
            https://www.ministryofdaru.com/franchise/
          </a>
        </p>
        <h2 className="bg-black text-lg text-white rounded-full w-fit px-4 py-1 my-4">
          Visit Ministry of Daru – Noida’s Ultimate Dining & Party Destination!
        </h2>
        <ul className="text-lg mb-2 text-gray-700">
          <li>
            <strong>📍 Address:</strong>{" "}
            <a
              href="https://www.google.com/maps/place/Ministry+of+Daru/@28.6274007,77.3727742,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce557cb655555:0x590f7b0c7da91eff!8m2!3d28.627396!4d77.3753491!16s%2Fg%2F11sk55x31l?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
              className="font-semibold hover:text-[color:--primary-color]"
              target="_blank"
            >
              H1 A/25, Sector 63, Noida, Uttar Pradesh 201301
            </a>
          </li>
          <li>
            <strong>📞 Phone:</strong>{" "}
            <a
              href="tel:+91-9667623005"
              className="font-semibold hover:text-[color:--primary-color]"
            >
              +91-9667623005
            </a>
          </li>
          <li>
            <strong>📩 Email:</strong>{" "}
            <a
              href="mailto:info@ministryofdaru.com"
              className="font-semibold hover:text-[color:--primary-color]"
            >
              info@ministryofdaru.com
            </a>
          </li>
          <li>
            <strong>🌐 Website:</strong>{" "}
            <a
              href="https://www.ministryofdaru.com"
              className="font-semibold hover:text-[color:--primary-color]"
              target="_blank"
            >
              www.ministryofdaru.com
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

export default MinistryOfDaru;
