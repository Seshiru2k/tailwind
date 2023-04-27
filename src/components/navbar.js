const Navbar = () => {


    return (
        <nav 
        style={{
            background: "400",
            backgroundImage: "url(bg.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontFamily: "Noto Sans, serif"
          }}>
            <div className="flex-col px-4 sm:px-6 lg:px-8 lg:flex-row">
                <div className="flex flex-wrap items-center justify-between h-20">
                    <div className="flex flex-row flex-shrink-0 pl-20">
                        <img src="PUPLogo.png" alt="" height='80px' width='88px' />
                        <div className="flex flex-col">
                            <h1 className="text-lg font-bold text-red ">
                                POLYTECHNIC UNIVERSITY OF THE PHILIPPINES
                            </h1> 
                            <h2 className="text-lg font-bold text-gray-500 text-blackish">
                                THE COUNTRY'S 1ST POLYTECHNICU
                            </h2>
                            <div className="flex flex-row space-x-8 text-red-800">
                                <a href="#" className="text-red">About PUP</a>
                                <a href="#" className="text-red">Academic</a>
                                <a href="#" className="text-red">Students</a>
                                <a href="#" className="text-red">Research</a>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div>
                <input placeholder="Type keyword here..." className="flex justify-between h-6 flex-end" class="placeholer"></input>
            </div>
        </nav>
    );
};
export default Navbar;