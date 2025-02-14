"use client";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "./MobileMenu";
import { IoIosArrowDown } from "react-icons/io";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

const menus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "All Businesses",
    link: "#",
    subMenu: [
      { name: "Team Languages", link: "/tls" },
      { name: "Ministry of Daru", link: "/ministry-of-daru" },
      { name: "The Beer Garden", link: "/the-beer-garden" },
      { name: "CB Crown Banquet", link: "/cb-crown-banquet" },
      { name: "Code with TLS", link: "/code-with-tls" },
      { name: "HeyFairies", link: "/heyfairies" },
      { name: "PromFly", link: "/promfly" },
    ],
  },
  {
    name: "Contact Us",
    link: "#contact",
  },
  {
    name: "About Us",
    link: "#about",
  },
];

const businesses = [
  { name: "Ministry of Daru", link: "/ministry-of-daru" },
  { name: "The Beer Garden", link: "/the-beer-garden" },
  { name: "TLS - The Japanese Language School", link: "/team-languages" },
  { name: "CB Crown Banquet", link: "/cb-crown-banquet" },
  { name: "Code with TLS", link: "/code-with-tls" },
  { name: "Hey Fairies", link: "/heyfairies" },
  { name: "PromFly", link: "/promfly" },
];

const Header = () => {
  const [active, setActive] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<{ name: string; link: string; }[]>([]);

  const placeholders = [
    "Ministry of Daru",
    "The Beer Garden",
    "TLS - The Japanese Language School",
    "CB Crown Banquet",
    "Code with TLS",
    "Hey Fairies",
    "PromFly",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredResults(
      businesses.filter((business) =>
        business.name.toLowerCase().includes(query)
      )
    );
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (filteredResults.length > 0) {
      window.location.href = filteredResults[0].link;
    }
  };

  return (
    <section className="fixed w-full bg-white shadow-lg z-50 top-0">
      {/* Mobile Menu */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50">
        <MobileNav />
      </div>
      <div className="container mx-auto">
        <div className="py-6 xl:px-12 lg:px-10 text-black w-full text-center mt-10 md:mt-0">
          <div className="flex md:justify-between items-center justify-center gap-4 md:gap-0">
            {/* Logo */}
            <div>
              <Link href={"/"}>
                <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-[color:--primary-color]">
                  Reach Rise
                </h1>
              </Link>
            </div>

            {/* Search Bar with Animation */}
            <div className="relative">
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              />
              {searchQuery && filteredResults.length > 0 && (
                <ul className="absolute left-0 mt-2 w-full bg-white border shadow-lg rounded-lg text-left">
                  {filteredResults.map((business, index) => (
                    <li key={index} className="p-2 hover:bg-gray-200 hover:rounded-lg">
                      <Link href={business.link}>{business.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Navigation Menu */}
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
