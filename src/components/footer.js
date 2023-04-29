const Footer = () => {
    return (

        <>
        <div className="flex flex-col justify-center lg:flex-row bg-cream font-I">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div>
                <div class="flex flex-col p-10 m-0">
                    <p className="pb-4 text-sm font-bold uppercase text-red ">ONLINE SERVICES</p>
                    <div class="flex flex-col gap-2">
                        <a href="" className="text-gr hover:underline hover:cursor-pointer">PUP WebMail</a>
                        <a href="" className="text-gr hover:underline hover:cursor-pointer">PUP iApply</a>
                        <a href="" className="text-gr hover:underline hover:cursor-pointer">SIS for Students</a>
                        <a href="" className="text-gr hover:underline hover:cursor-pointer">SIS for faculty</a>

                        <p className="pt-8 pb-2 text-sm font-bold uppercase text-red">DOWNLOADS</p>
                        <div class="flex flex-col gap-2">
                            <a href="" className="select-none text-gr text-textsize hover:underline hover:cursor-pointer">For Students</a>
                            <a href="" className="select-none text-gr text-textsize hover:underline hover:cursor-pointer">For Faculty and Employees</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-10">
                <p className="pb-4 text-sm font-bold uppercase text-red">QUICK LINKS</p>
                <div class="flex flex-col gap-2">
                    <a href="" className="select-none text-gr text-textsize hover:underline hover:cursor-pointer ">About PUP</a>
                    <a href="" className="select-none text-gr text-textsize hover:underline hover:cursor-pointer">Admission Information</a>
                    <a href="" className="select-none text-gr text-textsize hover:underline hover:cursor-pointer">Branchesa and Campuses</a>
                    <a href="" className="select-none text-gr text-textsize hover:underline hover:cursor-pointer">Academic Programs</a>
                    <a href="" className="select-none text-gr text-textsize hover:underline hover:cursor-pointer">Transparency Seal</a>
                    <a href="" className="select-none text-gr text-textsize hover:underline hover:cursor-pointer">Bid Notices and Invitation</a>
                    <a href="" className="select-none text-gr text-textsize hover:underline hover:cursor-pointer">International Affairs</a>
                    <a href="" className="select-none text-gr text-textsize hover:underline hover:cursor-pointer">Jobs for PUPians</a>
                    
                </div>
            </div>
            <div className="flex flex-col p-10">
                <p className="pb-4 text-sm font-bold uppercase text-red">KEEP IN TOUCH</p>
                
                <div class="flex space-x-4">
                <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-blue-500">
                            {/* <i class="fa fa-brands fa-facebook text-white text-lg icon-medium-effect icon-effect-2"></i> */}
                            <i class="fa fa-edit fa-facebook icon-medium-effect icon-effect-2 text-white hover:text-blue " style={{fontSize:'32px'}}></i>
                        </span>
                        <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-blue-500">
                            <i class="fa fa-brands fa-twitter text-white"></i>
                        </span>
                        <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-blue-500">
                            <i class=" fa fa-brands fa-youtube text-white"></i>
                        </span>
                        <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-blue-500">
                            <i class="fa fa-brands fa-linkedin text-white"></i>
                        </span>
                        <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-blue-500">
                            <i class="fa fa-solid fa-rss text-white"></i>
                        </span>
                        <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-blue-500">
                            <i class="fa fa-brands fa-spotify text-white "></i>
                        </span>
                </div>
                <p className="pt-5 pb-4 text-sm font-bold uppercase text-red">CONTACT US</p>
                <p class="text-bl"> Phone: <strong class="text-bl">(+63 2) 5335-1PUP (5335-1787) or 5335-1777</strong></p>
                <p class="text-bl"> Email: <strong class="text-bl">inquire@pup.edu.ph</strong></p>
                <p className="pt-5 pb-4 text-sm font-bold uppercase text-red">PUPWEBSITE 10</p>
                <p class="text-gr"> Terms of Use | Privacy Statement | About PUPWebSite</p>
            </div>
        </div>
        <section />
        <p class="pb-12 flex justify-center bg-cream text-[8pt] font-I text-gr">© 1998-2021 POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</p>
        </>

    )
}

export default Footer