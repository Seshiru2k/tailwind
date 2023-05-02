import { useState } from "react";

const Navbar = ({ logoSrc, bgImageSrc }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <nav
      className="pt-1 pb-3 bg-white-700"
      style={{
        background: "300",
        backgroundImage: "url(bg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center justify-center h-20 navres lg:flex-row sm:flex-row md:flex-row xl:flex-row 2xl:flex-row">
        <div className="flex items-center justify-between py-4 navigation">
          <div className="flex items-center">
            <a href="">
              <img src={"PUPLogo.png"} alt="PUP Logo" height="80" width="80" />
            </a>
            <div className="ml-3">
              <h1 className="text-lg font-bold text-rd font-C">
                POLYTECHNIC UNIVERSITY OF THE PHILIPPINES
              </h1>
              <h2 className="text-sm font-bold text-grey font-C text-blackish">
                The Country's 1st PolytechnicU
              </h2>
              <div className="hidden md:flex md:items-center">
                <div className="flex flex-row space-x-8">
                  <a href="#" className="font-bold text-rd font-C">
                    About PUP
                  </a>
                  <a href="#" className="font-bold text-rd font-C">
                    Academics
                  </a>
                  <a href="#" className="font-bold text-rd font-C">
                    Admissions
                  </a>
                  <a href="#" className="font-bold text-rd font-C">
                    Research
                  </a>
                </div>
              </div>
              <div className="relative ml-4">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                </div>
              </div>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={toggleExpansion}
                className="inline-flex items-center justify-center p-2 rounded-md text-grey-200 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded={isExpanded}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isExpanded ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isExpanded ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="xl:mx-20 lg:mx-20 ml-96 font-I text-[8pt]">
            <div className="relative ">
              <div class="flex flex-row">
                <input placeholder="  Type keyword here..." class="inputSearch" />
                <button disabled className='flex flex-wrap content-center justify-center text-white rounded-r-sm bg-red hover:cursor-pointer h-7 w-7'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>
              </div>
              <div className="absolute top-0 right-0 flex items-center h-full mr-3">
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${isExpanded ? 'block' : 'hidden'
            } md:hidden border-t border-gray-200`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
            >
              About PUP
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
            >
              Academics
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
            >
              Admissions
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
            >
              Research
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{/* import { useState } from 'react';
const Navbar = ({ logoSrc, bgImageSrc }) => {
  
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav
      className="bg-white-700"
      style={{
        background: "300",
        backgroundImage: `url(${"bg.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="px-6 mx-auto md:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="/">
              <img src={"PUPLogo.png"} alt="PUP Logo" height="80" width="80" />
            </a>
            <div className="ml-3">
              <h1 className="text-lg font-bold text-rd font-C">
                POLYTECHNIC UNIVERSITY OF THE PHILIPPINES
              </h1>
              <h2 className="text-sm font-bold text-grey font-C text-blackish">
                The Country's 1st PolytechnicU
              </h2>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleExpansion}
              className="inline-flex items-center justify-center p-2 rounded-md text-grey-200 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isExpanded}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isExpanded ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isExpanded ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:items-center">
            <div className="flex flex-row space-x-8 text-red-800">
              <a href="#" className="font-bold text-rd font-C">
                About PUP
              </a>
              <a href="#" className="font-bold text-rd font-C">
                Academics
              </a>
              <a href="#" className="font-bold text-rd font-C">
                Admissions
              </a>
              <a href="#" className="font-bold text-rd font-C">
                Research
              </a>
            </div>
            <div className="relative ml-4">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-5.5-5.5M15 9.5l-5.5 5.5"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="w-64 py-2 pl-3 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isExpanded ? 'block' : 'hidden'
        } md:hidden border-t border-gray-200`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
          >
            About PUP
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
          >
            Academics
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
          >
            Admissions
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
          >
            Research
          </a>
        </div>
            </div>
    </nav>
  );
};

export default Navbar; */}

