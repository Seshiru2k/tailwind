import Container from "@/container/contentbox";

const Navbar = () => {
    return (
    <Container>
      <nav
        className="bg-white-700"
        style={{
          background: "300",
          backgroundImage: "url(bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          fontFamily: "Cinzel, serif"
        }}
      >
        <div className="flex items-center justify-center h-20">
          <div className="flex flex-row flex-shrink-0">
            <img src="PUPLogo.png" alt="" height="80px" width="88px" />
            <div className="flex flex-col ml-4">
              <h1 className="text-lg font-bold text-red">
                POLYTECHNIC UNIVERSITY OF THE PHILIPPINES
              </h1>
              <h2 className="text-lg font-bold text-gray-500 text-blackish">
                THE COUNTRY'S 1ST POLYTECHNICU
              </h2>
            </div>
          </div>
          <div className="mx-20 ">
            <div className="relative">
              <input
                className="h-6 px-3 py-2 pl-3 pr-50"
                placeholder="Type keyword here..."
              />
              <div className="absolute top-0 right-0 flex items-center h-full mr-3">
                <svg
                  className="w-5 h-5 text-red-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.5 10.5a5 5 0 11-10 0 5 5 0 0110 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
      </Container>
    );
  };
  
  export default Navbar;
  