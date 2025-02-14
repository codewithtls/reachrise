import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Animation variants for the dropdown
  const dropdownVariants = {
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };
  const AllBusinesses = [
    { name: "Ministry of Daru", url: "/ministry-of-daru" },
  { name: "The Beer Garden", url: "/the-beer-garden" },
  { name: "TLS - The Japanese Language School", url: "/team-languages" },
  { name: "CB Crown Banquet", url: "/cb-crown-banquet" },
  { name: "Code with TLS", url: "/code-with-tls" },
  { name: "Hey Fairies", url: "/heyfairies" },
  { name: "PromFly", url: "/promfly" },]
  return (
    <nav className="bg-white z-60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between ">
          <div className="flex items-center gap-5">
            <div>
              <Link
                className="flex items-center gap-2"
                href={"https://wa.me/918882526355"}
              >
                <BsWhatsapp className="text-green-600"/>
                <p className="text-black font-semibold"> +918882526355</p>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[auto] block" : "max-h-0 hidden"
        } md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            onClick={toggleMenu}
            href="/"
            className="text-gray-800 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <div>
            <button
              onClick={toggleDropdown}
              className="text-gray-800 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center"
            >
              All Businesses
              {dropdownOpen ? (
                <svg
                  className="w-5 h-5 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 12.707a1 1 0 011.414 0L10 9.414l3.293-3.293a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 000 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  {AllBusinesses.map((business) => (
                    <Link
                      onClick={toggleMenu}
                      href={business.url}
                      key={business.name}
                      className="text-gray-800 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {business.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            onClick={toggleMenu}
            href="#contact"
            className="text-gray-800 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact Us
          </Link>

          <Link
            onClick={toggleMenu}
            href="#about"
            className="text-gray-800 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileMenu;