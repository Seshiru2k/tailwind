const Navbar = () => {
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
      <div className="flex items-center justify-center h-20">
        <div className="flex flex-row flex-shrink-0">
          <img src="PUPLogo.png" alt="" height="80" width="88" />
          <div className="flex flex-col ml-4">
            <h1 className="text-lg font-bold text-rd font-C">
              POLYTECHNIC UNIVERSITY OF THE PHILIPPINES
            </h1>
            <h2 className="pb-3 text-base font-bold text-grey font-C text-blackish">
              The Country's 1st PolytechnicU
            </h2>
            <div className="flex flex-row space-x-8 text-red-800">
              <a href="#" className="font-bold text-rd font-C">About PUP</a>
              <a href="#" className="font-bold text-rd font-C">Academic</a>
              <a href="#" className="font-bold text-rd font-C">Students</a>
              <a href="#" className="font-bold text-rd font-C">Research</a>
            </div>
          </div>
        </div>
        <div className="mx-20 ml-96 font-I text-[8pt]">
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
    </nav>
  );
};

export default Navbar;
