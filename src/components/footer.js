const Footer = () => {
    return (

        <>
        <div className="flex flex-col flex-wrap justify-center lg:flex-row bg-cream font-I">
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
                    <a href="" className="select-none text-gr text-textsize hover:underline hover:cursor-pointer">About PUP</a>
                    <a href="" className="select-none text-gr text-textsize hover:underline hover:cursor-pointer">Admission Information</a>
                    <a href="" className="select-none text-gr text-textsize hover:underline hover:cursor-pointer">Branchesa and Campuses</a>
                    <a href="" className="select-none text-gr text-textsize hover:underline hover:cursor-pointer">Academic Programs</a>
                    <a href="" className="select-none text-gr text-textsize hover:underline hover:cursor-pointer">Transparency Seal</a>
                    <a href="" className="select-none text-gr text-textsize hover:underline hover:cursor-pointer">Bid Notices and Invitation</a>
                    <a href="" className="select-none text-gr text-textsize hover:underline hover:cursor-pointer">International Affairs</a>
                    <a href="" className="select-none text-gr text-textsize hover:underline hover:cursor-pointer">Jobs for PUPians</a>
                    
                </div>
            </div>
            <div className="flex flex-col p-10 footerMargin">
                <p className="pb-4 text-sm font-bold uppercase text-red">KEEP IN TOUCH</p>
                
                <div class="flex space-x-4 flex-container">
                <a href="https://www.facebook.com/ThePUPOfficial" target="_blank">
                <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-face text-white">
                            <i class="fab fa-facebook-f text-white"  style={{ fontSize: '32px'}} ></i>
                        </span>
                        </a>
                        <a href="https://twitter.com/ThePUPOfficial" target="_blank">
                        <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-twit">
                            <i class="fab fa-brands fa-twitter text-white"  style={{ fontSize: '32px'}}></i>
                        </span>
                        </a>
                        <a href="https://www.youtube.com/user/pupcreatv" target="_blank">
                        <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-yout">
                        <i class="fab fa-brands fa-youtube text-white" style={{ fontSize: '32px'}}></i>
                        </span>
                        </a>
                        <a href="https://www.linkedin.com/school/polytechnic-university-of-the-philippines/" target="_blank">
                        <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-twit">
                            <i class="fab fa-solid fa-linkedin text-white"  style={{ fontSize: '32px'}}></i>
                        </span>
                        </a>
                        <a href="https://www.pup.edu.ph/rss/" target="_blank">
                        <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-orange">
                            <i class="fa fa-solid fa-rss text-white "  style={{ fontSize: '32px'}}></i>
                        </span>
                        </a>
                        <a href="https://open.spotify.com/show/6x7hlv9qZX8VpwMIRAAiRb?si=h7yM8PeXR6qxSjQIs2GveA&dl_branch=1&nd=1" target="_blank">
                        <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red hover:bg-green">
                            <i class="fab fa-brands fa-spotify text-white "  style={{ fontSize: '32px'}}></i>
                        </span>
                        </a>
                </div>
                <p className="pt-5 pb-4 text-sm font-bold uppercase text-red">CONTACT US</p>
                <p class="text-bl"> Phone: <strong class="text-bl">(+63 2) 5335-1PUP (5335-1787) or 5335-1777</strong></p>
                <p class="text-bl"> Email: <strong class="text-bl">inquire@pup.edu.ph</strong></p>
                <p className="pt-5 pb-4 text-sm font-bold uppercase text-red">PUPWEBSITE 10</p>
                <p class="text-gr"> <a class="hover:underline">Terms of Use</a> | <a class="hover:underline">Privacy Statement</a> | <a class="hover:underline">About PUPWebSite</a></p>
            </div>
        </div>
        <section />
        <p class="pb-12 flex justify-center bg-cream text-[8pt] font-I text-gr">© 1998-2021 POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</p>
        </>

    )
}

export default Footer