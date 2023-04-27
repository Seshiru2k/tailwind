import Container from "@/container/contentbox";

function Topbar() {
    return (
      <Container>
      <nav
        className="flex flex-wrap items-center justify-between text-grey"
        style={{
          lineHeight: "23px",
          fontWeight: 300,
          color: "black",
          overflowX: "hidden",
          backgroundImage: "url(bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
          <div className="mx-20">
            <ul className="flex items-center">
              <img src="govph.png" alt="" className="px-2 py-2 transition-all rounded text-grey bg-white-300 hover:bg-red"/>
              <li className="pt-2">
                <a href="#"></a>
                <a href="#" className="py-2 transition-all text-grey bg-white-300 hover:bg-red" style={{ padding: '10px 16px' }}>Home</a>
              </li>
              <li className="pt-2">
                <a href="#"></a>
                <a href="#" className="px-8 py-2 transition-all text-grey bg-white-300 hover:bg-red" style={{ padding: '10px 16px' }}>Good Governance</a>
              </li >
              <li className="pt-2">
                <a href="#"></a>
                <a href="#" className="px-8 py-2 transition-all text-grey bg-white-300 hover:bg-red" style={{ padding: '10px 16px' }}>Transparency</a>
              </li>
              <li className="pt-2">
                <a href="#"></a>
                <a href="#" className="px-8 py-2 transition-all text-grey bg-white-300 hover:bg-red" style={{ padding: '10px 16px' }}>International Affairs</a>
              </li>
              <li className="pt-2">
                <a href="#"></a>
                <a href="#" className="px-8 py-2 transition-all text-grey bg-white-300 hover:bg-red" style={{ padding: '10px 16px' }}>Bid Notices and Invitation</a>
              </li>
            </ul>
          </div>
        <div className="flex items-center">
          <a href="/src/pages/contact-us.js"></a>
          <a href="#" className="text-xl font-bold tracking-wide"></a>
        </div>
        <div className="flex items-center pr-20">
          <a href="#"></a>
          <a href="#" className="px-8 py-2 transition-all text-grey bg-white-300 hover:bg-red" style={{ padding: '10px 16px' }}>Contact Us</a>
        </div>
      </nav>
     </Container>
    );
  }
  export default Topbar;