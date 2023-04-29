const Footerend = () => {
    return (
            <>
                <div className="flex flex-row justify-center gap-40 bg-gray-dark">
                    <div className="flex lg:flex-row">
                        <img src="govphseal.png" alt="" className="pt-2 h-44" />
                        <div>
                            <p className="pt-8 pb-2 text-xs font-bold text-grey p-ft font-I">Republic of the Philippines</p>
                            <div className="flex flex-col gap-2 text-xs">
                                <p className="pt-2 text-grey text-ssssm">All content is in the public domain unless<br></br> otherwise stated.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="pt-8 pb-2 text-xs font-bold text-grey p-ft font-I">About GOVPH</p>
                        <div className="flex flex-col gap-1 text-xs">
                            <p className="pt-2 text-grey text-ssssm">Learn more about the Philippine government, its <br></br>structure, how government works and the people behind<br></br> it.</p>
                            <a href="" className="select-none text-gray-light text-[8pt] hover:underline hover:cursor-pointer font-I">Official Gazette</a>
                            <a href="" className="select-none text-gray-light text-[8pt] hover:underline hover:cursor-pointer font-I">Open Data Portal</a>
                        </div>
                    </div>
                    <div className="">
                        <p className="pt-8 pb-2 text-xs font-bold text-grey p-ft font-I">Government links</p>
                        <div className="flex flex-col pt-2 pb-12 space-y-2 text-xs text-gray-800 font-I">
                            <a href="" className="select-none text-gray-light hover:underline hover:cursor-pointer text-[8pt]">Office of the President</a>
                            <a href="" className="select-none text-gray-light hover:underline hover:cursor-pointer text-[8pt]">Office of the Vice President</a>
                            <a href="" className="select-none text-gray-light hover:underline hover:cursor-pointer text-[8pt]">Senate of the Philippines</a>
                            <a href="" className="select-none text-gray-light hover:underline hover:cursor-pointer text-[8pt]">House of Representatives</a>
                            <a href="" className="select-none text-gray-light hover:underline hover:cursor-pointer text-[8pt]">Supreme Court</a>
                            <a href="" className="select-none text-gray-light hover:underline hover:cursor-pointer text-[8pt]">Court of Appeals</a>
                            <a href="" className="select-none text-gray-light hover:underline hover:cursor-pointer text-[8pt]">Sandiganbayan</a>
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Footerend
