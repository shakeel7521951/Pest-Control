"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ImMenu } from "react-icons/im";
import { RxCross1 } from "react-icons/rx";
import { FaSortDown } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { HiMinusSmall } from "react-icons/hi2";


const petsArray = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1752834370400-da734c87f565?w=500",
    name: "Rodents",
  },
  { id: 2, img: "/Navbar/cockroaches.jpg", name: "Cockroaches" },
  { id: 3, img: "/Navbar/fleas.jpg", name: "Fleas" },
  { id: 4, img: "/Navbar/bedbugs.png", name: "Bed Bugs" },
  { id: 5, img: "/Navbar/wasps.jpg", name: "Wasps" },
  { id: 6, img: "/Navbar/pigeons.png", name: "Pigeons" },
  { id: 7, img: "/Navbar/honeybee.jpg", name: "Honey Bee" },
  { id: 8, img: "/Navbar/moths.jpg", name: "Moths" },
  { id: 9, img: "/Navbar/fox.jpg", name: "Foxes" },
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

  const showCleaning = () => {
    setpluswash(false);
    setcleaning(true);
    setminuswash(true);
  };
  const handleClickB = () => {
    setRodent(false);
    setplus(true);
  };

  const handleClickA = () => {
    setcleaning(false);
    setpluswash(true);
  };
  const hideCleaning = () => {
    setpluswash(true);
    setminuswash(false);
    setcleaning(false);
  };

  const showRodent = () => {
    setplus(false);
    setminus(true);
    setRodent(true);
  };
  const hideRodent = () => {
    setminus(false);
    setplus(true);
    setRodent(false);
  };

  const showMobile = () => {
    setShow(true);
    setMenu(false);
  };

  const hideMobile = () => {
    setShow(false);
    setMenu(true);
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
          <div className="w-20 h-20 cursor-pointer">
            <img
              src="/logo22.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>

        {/* Mobile Sidebar */}
        {show && (
          <div
            ref={menuRef}
            className="absolute  top-0 right-0 lg:hidden w-full min-h-screen bg-black sm:w-[50%] z-50 px-6 py-0"
          >
            <div className="absolute top-6 right-6">
              <RxCross1
                className="text-white text-lg cursor-pointer"
                onClick={hideMobile}
              />
            </div>

            <ul className="mt-18 flex flex-col   gap-5 text-lg font-semibold text-white">
              <li
                onMouseEnter={showPets}
                onMouseLeave={hidePets}
                className="flex justify-between border-b  py-2  items-center border-gray-400 pb-2"
              >
                <div className="w-full flex flex-col">
                  <div className="flex justify-between w-full">
                    {" "}
                    <div className="hover:text-green-500  transition-all duration-200 cursor-pointer">
                      Pest-Control
                    </div>
                    <div className="relative">
                      {plus && (
                        <span>
                          <GoPlus
                            onClick={() => {
                              showRodent();
                              handleClickA();
                            }}
                          />
                        </span>
                      )}
                      {minus && (
                        <span className="absolute top-0 right-0 ">
                          <HiMinusSmall onClick={hideRodent} />
                        </span>
                      )}
                    </div>
                  </div>
                  {Rodent && (
                    <div className=" w-full rounded-md mt-2 pl-10 py-2 text-white">
                      {petsArray.map((item) => (
                        <Link key={item.id} href="#">
                          <div className="flex  gap-10 border border-gray-400 rounded-sm p-2 my-3">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-8 h-8 object-cover"
                            />
                            <span>{item.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </li>

              <li>
                <Link href="#" className="hover:text-green-500">
                  Bird Control
                </Link>
              </li>
              <div>
                <li className="flex w-full justify-between items-center border-b pb-2 border-gray-400">
                  <div className="hover:text-green-500  transition-all duration-200 cursor-pointer">
                    Cleaning Serivces
                  </div>
                  <div className="relative">
                    {pluswash && (
                      <span>
                        <GoPlus
                          onClick={() => {
                            showCleaning();
                            handleClickB();
                          }}
                        />
                      </span>
                    )}
                    {minuswash && (
                      <span className="absolute top-0 right-0 ">
                        <HiMinusSmall onClick={hideCleaning} />
                      </span>
                    )}
                  </div>
                </li>
                {cleaning && (
                  <div className=" w-full shadow   rounded-md py-2 text-white">
                    <ul className="px-4 mt-4">
                      <Link href="/">
                        <li className="px-4 border my-2 border-gray-400 rounded-sm py-2 hover:bg-gray-100 ">
                          Contract Cleaning
                        </li>
                      </Link>
                      <Link href="/">
                        <li className="px-4 border my-2 border-gray-400 rounded-sm py-2 hover:bg-gray-100">
                          Rubbish Removal
                        </li>
                      </Link>
                      <Link href="/">
                        <li className="px-4 border my-2 border-gray-400 rounded-sm py-2 hover:bg-gray-100">
                          Window Cleaning
                        </li>
                      </Link>
                      <Link href="/">
                        <li className="px-4 border border-gray-400 rounded-sm py-2 hover:bg-gray-100">
                          Washroom Services
                        </li>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>

              <li>
                <Link href="#" className="hover:text-green-500">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-green-500">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="mt-10 mb-10 text-center">
              <Link href="#">
                <button className="px-10 border rounded-sm font-semibold text-white bg-black hover:bg-black/60 transition py-3">
                  Sign In
                </button>
              </Link>
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
            <div className="hover:text-green-500 flex items-center cursor-pointer">
              Pest-Control <FaSortDown className="ml-1" />
            </div>
            <div className="absolute z-10 top-4  left-0 mt-2 bg-white rounded-md shadow p-4 hidden group-hover:block w-56">
              {petsArray.map((item) => (
                <Link href="#" key={item.id}>
                  <div className="flex items-center  gap-3 py-2 hover:bg-gray-100 px-2 rounded">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-8 h-8 object-cover"
                    />
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link href="#" className="hover:text-green-500">
            Bird Control
          </Link>

          {/* Cleaning Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={showClean}
            onMouseLeave={hideClean}
          >
            <div className="hover:text-green-500 flex items-center cursor-pointer">
              Cleaning Services <FaSortDown className="ml-1" />
            </div>
            {servic && (
              <div className="absolute top-6 left-0 shadow w-56 bg-white rounded-md py-2 text-black">
                <ul className="p-2">
                  <Link href="/">
                    <li className="px-4 py-2 hover:bg-gray-100 ">
                      Contract Cleaning
                    </li>
                  </Link>
                  <Link href="/">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      Rubbish Removal
                    </li>
                  </Link>
                  <Link href="/">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      Window Cleaning
                    </li>
                  </Link>
                  <Link href="/">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      Washroom Services
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </div>

          <Link href="#" className="hover:text-green-500">
            About Us
          </Link>
          <Link href="#" className="hover:text-green-500">
            Contact
          </Link>
        </div>

        {/* Desktop Sign In */}
        <div className="hidden lg:block">
          <Link href="#">
            <button className="px-10 rounded-sm font-semibold text-white bg-black hover:bg-black/60 transition py-3">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
