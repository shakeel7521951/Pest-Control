"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ImMenu } from "react-icons/im";
import { RxCross1 } from "react-icons/rx";
import { FaSortDown } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { HiMinusSmall } from "react-icons/hi2";
import Image from "next/image";

const petsArray = [
  {
    id: 1,
    img: "/Navbar/mouse.png",
    name: "Rodents",
    link: "/hoverbird/rodent",
  },
  {
    id: 2,
    img: "/Navbar/cockroaches.jpg",
    name: "Cockroaches",
    link: "/hoverbird/cockraches",
  },
  { id: 3, img: "/Navbar/fleas.jpg", name: "Fleas", link: "/hoverbird/fleas" },
  {
    id: 4,
    img: "/Navbar/bedbugs.png",
    name: "Bed Bugs",
    link: "/hoverbird/bedbugs",
  },
  { id: 5, img: "/Navbar/wasps.jpg", name: "Wasps", link: "/hoverbird/wasps" },
  {
    id: 6,
    img: "/Navbar/pigeons.png",
    name: "Pigeons",
    link: "/hoverbird/pigeon",
  },
  {
    id: 7,
    img: "/Navbar/honeybee.jpg",
    name: "Honey Bee",
    link: "/hoverbird/honeybee",
  },
  { id: 8, img: "/Navbar/moths.jpg", name: "Moths", link: "/hoverbird/moth" },
  { id: 9, img: "/Navbar/fox.jpg", name: "Foxes", link: "/hoverbird/fox" },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState(true);
  const [servic, setServic] = useState(false);
  const [petDropdown, setPetDropdown] = useState(false);
  const [plus, setplus] = useState(true);
  const [minus, setminus] = useState(false);
  const [Rodent, setRodent] = useState(false);
  const [cleaning, setcleaning] = useState(false);
  const [pluswash, setpluswash] = useState(true);
  const [minuswash, setminuswash] = useState(false);

  // use Ref used
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  const showCleaning = (e) => {
    e.stopPropagation();
    setpluswash(false);
    setcleaning(true);
    setminuswash(true);
  };

  const hideCleaning = (e) => {
    e.stopPropagation();
    setpluswash(true);
    setminuswash(false);
    setcleaning(false);
  };

  const showRodent = (e) => {
    e.stopPropagation();
    setplus(false);
    setminus(true);
    setRodent(true);
  };

  const hideRodent = (e) => {
    e.stopPropagation();
    setminus(false);
    setplus(true);
    setRodent(false);
  };

  const showMobile = () => {
    setShow(true);
  };

  const hideMobile = () => {
    setShow(false);
  };

  const showClean = () => setServic(true);
  const hideClean = () => setServic(false);

  const showPets = () => setPetDropdown(true);
  const hidePets = () => setPetDropdown(false);

  useEffect(() => {
    const handlewindowClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        btnRef.current &&
        !btnRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };

    window.addEventListener("click", handlewindowClick);
    return () => {
      window.removeEventListener("click", handlewindowClick);
    };
  }, []);

  return (
    <nav className="relative z-50 w-full shadow-xl text-black bg-white">
      <div className="lg:w-[90vw] px-2 mx-auto flex py-3 justify-between items-center">
        <Link href="/">
          <div className="w-20 h-20 cursor-pointer relative">
            <Image
              src="/logo22.png"
              alt="Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Link>

         {/* Mobile Sidebar - 50% width */}
        {show && (
          <div
            ref={menuRef}
            className="fixed top-0 right-0 h-full w-[80%] sm:w-[60%] md:w-[50%] bg-gradient-to-b from-green-600 to-green-800 text-white lg:hidden z-50 overflow-y-auto shadow-xl"
          >
            <div className="px-6 py-8">
              <div className="flex justify-end mb-8">
                <RxCross1
                  className="text-3xl text-white cursor-pointer hover:text-green-200 transition-colors"
                  onClick={hideMobile}
                />
              </div>

              <ul className="space-y-6 text-xl">
                <li className="py-3">
                  <div className="w-full flex flex-col">
                    <div className="flex justify-between w-full items-center">
                      <span className="font-bold text-2xl">Pest Control</span>
                      <div className="relative">
                        {plus ? (
                          <GoPlus
                            onClick={showRodent}
                            className="cursor-pointer text-2xl hover:text-green-200 transition-colors"
                          />
                        ) : (
                          <HiMinusSmall
                            onClick={hideRodent}
                            className="cursor-pointer text-2xl hover:text-green-200 transition-colors"
                          />
                        )}
                      </div>
                    </div>
                    {Rodent && (
                      <div className="w-full mt-4 pl-4 py-2 grid grid-cols-1 gap-3">
                        {petsArray.map((item) => (
                          <Link key={item.id} href={item.link}>
                            <div className="flex items-center gap-3 rounded-lg p-3 hover:bg-green-700/30 transition-all duration-200">
                              <div className="w-10 h-10 relative rounded-full overflow-hidden border-2 border-white">
                                <Image
                                  src={item.img}
                                  alt={item.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <span className="font-medium">{item.name}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </li>

                <li className="py-3">
                  <Link
                    href="/birdcontrol"
                    className="block font-bold text-2xl hover:text-green-200 transition-colors"
                  >
                    Bird Control
                  </Link>
                </li>

                <li className="py-3">
                  <div className="flex justify-between w-full items-center">
                    <span className="font-bold text-2xl">Cleaning Services</span>
                    <div className="relative">
                      {pluswash ? (
                        <GoPlus
                          onClick={showCleaning}
                          className="cursor-pointer text-2xl hover:text-green-200 transition-colors"
                        />
                      ) : (
                        <HiMinusSmall
                          onClick={hideCleaning}
                          className="cursor-pointer text-2xl hover:text-green-200 transition-colors"
                        />
                      )}
                    </div>
                  </div>
                  {cleaning && (
                    <div className="w-full mt-4 pl-4 py-2 space-y-3">
                      <Link href="/cleaning">
                        <div className="px-4 py-3 rounded-lg hover:bg-green-700/30 transition-all duration-200">
                          Contract Cleaning
                        </div>
                      </Link>
                      <Link href="/rubbishclean">
                        <div className="px-4 py-3 rounded-lg hover:bg-green-700/30 transition-all duration-200">
                          Rubbish Removal
                        </div>
                      </Link>
                      <Link href="/windowclen">
                        <div className="px-4 py-3 rounded-lg hover:bg-green-700/30 transition-all duration-200">
                          Window Cleaning
                        </div>
                      </Link>
                      <Link href="/washroomclean">
                        <div className="px-4 py-3 rounded-lg hover:bg-green-700/30 transition-all duration-200">
                          Washroom Services
                        </div>
                      </Link>
                    </div>
                  )}
                </li>

                <li className="py-3">
                  <Link
                    href="/about"
                    className="block font-bold text-2xl hover:text-green-200 transition-colors"
                  >
                    About Us
                  </Link>
                </li>

                <li className="py-3">
                  <Link
                    href="/contact"
                    className="block font-bold text-2xl hover:text-green-200 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="mt-12 text-center">
                <Link href="/signup">
                  <button className="relative px-12 py-4 font-bold text-lg text-white rounded-xl overflow-hidden bg-gradient-to-r from-green-500 to-green-600 shadow-lg transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:shadow-xl transform hover:scale-105">
                    <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition duration-300"></span>
                    <span className="relative z-10">Sign In</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
        {/* Mobile Menu Button */}
        {menu && (
          <div className="lg:hidden mr-3" ref={btnRef}>
            <ImMenu className="text-2xl cursor-pointer" onClick={showMobile} />
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10 text-md font-semibold">
          {/* Pest-Control Dropdown */}
          <div className="relative group">
            <Link href="/">
              {" "}
              <div className="hover:text-green-500 flex items-center cursor-pointer">
                Pest-Control <FaSortDown className="ml-1" />
              </div>
            </Link>
            <div className="absolute z-10 top-4  left-0 mt-2 bg-white rounded-md shadow p-4 hidden group-hover:block w-56">
              {petsArray.map((item) => (
                <Link href={item.link} key={item.id}>
                  <div className="flex items-center  gap-3 py-2 hover:bg-gray-100 px-2 rounded">
                    <div className="w-8 h-8 relative">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/birdcontrol" className="hover:text-green-500">
            Bird Control
          </Link>

          {/* Cleaning Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={showClean}
            onMouseLeave={hideClean}
          >
            <Link href="/services">
              {" "}
              <div className="hover:text-green-500  transition-all duration-200 cursor-pointer">
                Cleaning Serivces
              </div>
            </Link>
            {servic && (
              <div className="absolute top-6 left-0 shadow w-56 bg-white rounded-md py-2 text-black">
                <ul className="p-2">
                  <Link href="/cleaning">
                    <li className="px-4 py-2 hover:bg-gray-100 ">
                      Contract Cleaning
                    </li>
                  </Link>
                  <Link href="/rubbishclean">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      Rubbish Removal
                    </li>
                  </Link>
                  <Link href="/windowclen">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      Window Cleaning
                    </li>
                  </Link>
                  <Link href="/washroomclean">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      Washroom Services
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-green-500">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-green-500">
            Contact
          </Link>
        </div>

        {/* Desktop Sign In */}
        <div className="hidden lg:block">
          <Link href="/signup">
            <button className="relative cursor-pointer px-10 py-3 font-semibold text-white rounded-xl overflow-hidden bg-gradient-to-br from-green-500 to-green-700 shadow-lg transition-all duration-300 group hover:scale-105 hover:shadow-2xl">
              <span className="absolute inset-0  bg-white opacity-10 blur-lg group-hover:opacity-20 transition duration-300"></span>
              <span className="relative z-10">Sign In</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
