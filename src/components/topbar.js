function Topbar() {
    return (
      <nav
        className="flex lg:flex-row flex-col items-center justify-between pl-20 bg-#D87B6C text-black-l m-0"
        style={{
          lineHeight: "20px",
          fontWeight: 300,
          color: "black",
          overflowX: "hidden",
          backgroundImage: "url(bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
          <div className="hidden lg:block">
            <ul className="flex justify-center space-x-1 p-lr">
              <img src="govph.png" alt="" className="pl-4 pr-4 hover:cursor-pointer hover:bg-red"/>
              <li className="pt-2">
                <a href="#"></a>
                <a href="#" className="font-semibold hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer" style={{ padding: '10px 16px' }}>Home</a>
              </li>
              <li className="pt-2">
                <a href="#"></a>
                <a href="#" className="font-semibold hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer" style={{ padding: '10px 16px' }}>Good Governance</a>
              </li >
              <li className="pt-2">
                <a href="#"></a>
                <a href="#" className="font-semibold hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer" style={{ padding: '10px 16px' }}>Transparency</a>
              </li>
              <li className="pt-2">
                <a href="#"></a>
                <a href="#" className="font-semibold hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer" style={{ padding: '10px 16px' }}>International Affairs</a>
              </li>
              <li className="pt-2">
                <a href="#"></a>
                <a href="#" className="font-semibold hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer" style={{ padding: '10px 16px' }}>Bid Notices and Invitation</a>
              </li>
            </ul>
          </div>
        <div className="flex items-center">
          <a href="/src/pages/contact-us.js"></a>
          <a href="#" className="text-xl font-bold tracking-wide"></a>
        </div>
        <div className="flex items-center pr-20">
          <a href="#"></a>
          <a href="#" className="ml-auto font-semibold hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer" style={{ padding: '10px 16px' }}>Contact Us</a>
        </div>
      </nav>
    );
  }
  export default Topbar;