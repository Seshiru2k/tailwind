import Container from "@/container/contentbox"

const Footerend = () => {
    return (
        <Container>
        <>
            <div className="flex flex-col justify-center gap-40 lg:flex-row">
                <div className="flex lg:flex-row">
                     <img src="govphseal.png" alt="" class="pt-2 flex h-48" />
                    <div>
                        <p className="pt-8 pb-2 font-bold uppercase text-grey text-sssm p-ft">Republic of the Philippines</p>
                        <div class="flex flex-col gap-2">
                            <p className="pt-2 text-grey text-ssssm">All content is in the public domain unless<br></br> otherwise stated.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="pt-8 pb-2 font-bold uppercase text-grey text-sssm p-ft">About GOVPH</p>
                    <div class="flex flex-col gap-1 ">
                        <p className="pt-2 text-grey text-ssssm">Learn more about the Philippine government, its <br></br>structure, how government works and the people behind<br></br> it.</p>
                        <a href="" className="select-none text-grey text-ssssm hover:underline hover:cursor-pointer">Official Gazette</a>
                        <a href="" className="select-none text-grey text-ssssm hover:underline hover:cursor-pointer">Open Data Portal</a>
                    </div>
                </div>
                <div className="">
                    <p className="pt-8 pb-2 font-bold uppercase text-grey text-sssm p-ft">Government links</p>
                    <div class="flex flex-col pt-2 space-y-3">
                        <a href="" className="select-none text-grey text-ssssm hover:underline hover:cursor-pointer">Office of the President</a>
                        <a href="" className="select-none text-grey text-ssssm hover:underline hover:cursor-pointer">Office of the Vice President</a>
                        <a href="" className="select-none text-grey text-ssssm hover:underline hover:cursor-pointer">Senate of the Philippines</a>
                        <a href="" className="select-none text-grey text-ssssm hover:underline hover:cursor-pointer">House of Representatives</a>
                        <a href="" className="select-none text-grey text-ssssm hover:underline hover:cursor-pointer">Supreme Court</a>
                        <a href="" className="select-none text-grey text-ssssm hover:underline hover:cursor-pointer">Court of Appeals</a>
                        <a href="" className="select-none text-grey text-ssssm hover:underline hover:cursor-pointer">Sandiganbayan</a>
                    </div>
                </div>
            </div>
        </>
    </Container>
    )
}
export default Footerend