"use client";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "./MobileMenu";
import { IoIosArrowDown } from "react-icons/io";

const menus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "All Businesses",
    link: "#",
    subMenu: [
      { name: "Team Languages", link: "/team-languages" },
      {
        name: "Ministry of Daru",
        link: "/ministry-of-daru",
      },
      {
        name: "The Beer Garden",
        link: "/the-beer-garden",
      },
      {
        name: "Heyfairies",
        link: "/heyfairies",
      },
    ],
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
  {
    name: "About Us",
    link: "/about",
  },
];

const Header = () => {
  const [active, setActive] = useState("");

  return (
    <section className="fixed w-full bg-white shadow-lg z-50 top-0">
      {/* Mobile Menu */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50">
        <MobileNav />
      </div>
      <div className="container mx-auto">
        <div className="py-6  xl:px-12 lg:px-10   text-black w-full text-center mt-10 md:mt-0">
          <div className="flex md:justify-between items-center justify-center">
            {/* Logo */}
            <div>
              <Link href={"/"}>
                <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-[color:--primary-color]">
                  Reach Rise
                </h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex gap-10 text-black relative">
                {menus.map((menu, index) => (
                  <li key={index} className="relative group">
                    <Link
                      onClick={() => setActive(menu.name)}
                      className={`hover:text-orange-500 transition duration-300 ease-in-out text-black text-md lg:text-base md:text-sm ${
                        active === menu.name
                          ? "text-orange-500 font-semibold"
                          : ""
                      }`}
                      href={menu.link}
                    >
                      <span className="flex flex-row items-center gap-2 group cursor-pointer">
                        {menu.name}
                        {menu.subMenu && (
                          <IoIosArrowDown className="transition-transform duration-300 group-hover:rotate-180" />
                        )}
                      </span>
                    </Link>
                    {/* Dropdown for Services */}
                    {menu.subMenu && (
                      <ul className="absolute left-0 top-full bg-white text-black rounded-md shadow-lg hidden group-hover:block w-48">
                        {menu.subMenu.map((subMenu, subIndex) => (
                          <li
                            key={subIndex}
                            className={`hover:text-orange-500 transition duration-300 ease-in-out text-black text-md lg:text-md md:text-sm ${
                              subIndex === 0 ? "mt-3" : ""
                            }`}
                          >
                            <Link
                              href={subMenu.link}
                              className="block px-4 py-2 text-sm hover:text-orange-500 text-left"
                            >
                              {subMenu.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
