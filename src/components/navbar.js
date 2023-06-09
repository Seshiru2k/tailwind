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
      <div className="flex items-center justify-center h-20 navres">
        <div className="w-full">
          <div className="flex items-center justify-center py-4 2xl:pr-60 2xl:pl-72 navigation">
            <div className="flex items-center">
              <a href="">
                <img src={"PUPLogo.png"} alt="PUP Logo" className="max-w-[90px] max-h-[90px]" />
              </a>
              <div className="ml-3">
                <h1 className="text-sm font-bold text text-rd font-C">
                  POLYTECHNIC UNIVERSITY OF THE PHILIPPINES
                </h1>
                <h2 className="text-sm font-bold text-grey font-C text-blackish">
                  The Country's 1st PolytechnicU
                </h2>
                <div className="hidden text-sm md:flex md:items-center">
                  <div className="flex flex-row space-x-8">
                    <div className="dropdown">
                      <a href="#" className="font-bold text-rd font-C">About PUP</a>
                      <div className="dropdown-content">
                        <p>University Profile</p>
                        <p>Vision and Mission</p>
                        <p>History</p>
                        <p>Logo and Symbols</p>
                        <p>Hymn</p>
                        <p>Annual Reports</p>
                        <p>Awards and Recognitions</p>
                        <p>Contact Us</p>
                        <p>Maps</p>
                        <p>University Code</p>
                        <p>Institutional Development Plan</p>
                        <p>Quality Policy Statement</p>
                        <p>Branches and Satellite Campuses</p>
                        <p>Memorandum Orders</p>
                        <p>Executive Orders</p>
                        <p>CODI Manual</p>
                        <p>Citizens Charter</p>
                        <p>Office Memorandum</p>
                        <p>Strategic Performance Management <br/>System</p>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a href="#" className="font-bold text-rd font-C">Academics</a>
                      <div className="dropdown-content">
                        <p>Academic Programs</p>
                        <p>Open University System</p>
                        <p>Graduate Studies</p>
                        <p>Colleges</p>
                        <p>Institute of Technology</p>
                        <p>Senior High School</p>
                        <p>Laboratory High School</p>
                        <p>Library Services</p>
                        <p>Online Public Access Catalog</p>
                        <p>Quality Assurance</p>
                        <p>Teaching and Learning Development</p>
                        <p>PUP eMabini Learning Portal</p>
                        <p>OVPAA Advisories</p>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a href="#" className="font-bold text-rd font-C">Students</a>
                      <div className="dropdown-content">
                        <p>Student Services</p>
                        <p>Student Organizations</p>
                        <p>Student Publications</p>
                        <p>Student Council</p>
                        <p>Student Handbook</p>
                        <p>University Registrar</p>
                        <p>PUP Student Information System</p>
                        <p>PUP Online Document Request System</p>
                        <p>PUP Bookstore</p>
                        <p>Downloadable Forms</p>
                        <p>Online Job Postings</p>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a href="#" className="font-bold text-rd font-C">Research</a>
                      <div className="dropdown-content">
                        <p>Researchers</p>
                        <p>Extensions</p>
                        <p>Institutional Planning</p>
                        <p>Institutional Property</p>
                        <p>Research Publications</p>
                        <p>Science and Technology</p>
                        <p>Cultural and Language</p>
                        <p>Strategic Foresight and Innovation</p>
                        <p>Human and Social Development</p>
                        <p>Gender and Development</p>
                        <p>PUP Online Journal System</p>
                        <p>PUP Online Survey for Faculty Evaluation</p>
                        <p>University Thesis and Disseration Manual</p>
                      </div>
                    </div>
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
            <div className="xl:mx-20 lg:mx-20 font-I text-[8pt] xl:pl-60 hideSearch">
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