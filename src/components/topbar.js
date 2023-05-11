import Link from 'next/link'

function Topbar() {
  return (
    <nav
      className="flex flex-wrap items-center bg-center bg-cover border-b-2 border-white text-gr"
      style={{
        backgroundImage: "url(bg.jpg)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto 2xl:pl-48">
        <ul className="flex">
          <li><img src="govph.png" alt="" className="px-2 pb-1 transition-all hover:bg-red" /></li>
          <li className="">
            <a href="#"></a>
            <a><Link href="/pup" className="flex items-center transition-all bg-white-300 hover:bg-red font-I text-[10pt] hover:text-white text-gr" style={{ padding: '10px 16px' }}>Home</Link></a>
          </li>
          <li className="">
            <a href="#"></a>
            <a href="#" className="flex items-center transition-all bg-white-300 hover:bg-red font-I text-[10pt] hover:text-white text-gr hidden md:flex" style={{ padding: '10px 16px' }}>Good Governance</a>
          </li >
          <li className="">
            <a href="#"></a>
            <a href="#" className="flex items-center transition-all bg-white-300 hover:bg-red font-I text-[10pt] hover:text-white text-gr hidden md:flex" style={{ padding: '10px 16px' }}>Transparency</a>
          </li>
          <li className="">
            <a href="#"></a>
            <a><Link href="international" className="flex items-center transition-all bg-white-300 hover:bg-red font-I text-[10pt] hover:text-white text-gr hidden lg:flex" style={{ padding: '10px 16px' }}>International Affairs</Link></a>
          </li>
          <li className="">
            <a href="#"></a>
            <a href="#" className="flex items-center transition-all bg-white-300 hover:bg-red font-I text-[10pt] hover:text-white text-gr hidden md:flex" style={{ padding: '10px 16px' }}>Bid Notices and Invitation</a>
          </li>
          <div className="flex items-center">
          <a href="#"></a>
          <a href="#" className="text-xl font-bold tracking-wide"></a>
        </div>
        <div className="flex items-center mx-auto xl:pr-72 xl:pl-72">
          <a href="#"></a>
          <a><Link href="/contact_us" className="flex items-center transition-all text-gr bg-white-300 hover:bg-red hover:text-white font-I text-[10pt] py-2" style={{ padding: '10px 16px' }}>Contact Us</Link></a>
        </div>
        </ul>
      </div>
    </nav>
  );
}
export default Topbar;

