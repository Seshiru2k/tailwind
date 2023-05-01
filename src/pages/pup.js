import Navbar from '@components/navbar.js'
import Slider from "@/components/slider"
import Footer from '@components/footer.js'
import Topbar from '@/components/topbar'
import Footerend from '@/components/footerend'
import Icons from '@/components/icons'
import Image from 'next/image';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { pupAnnouncements, pupNews, images } from "@/heading/datas";


const Homepage = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handlePrevClick = () => {
        setSlideIndex((slideIndex - 1 + pupNews.length) % pupNews.length);
    };

    const handleNextClick = () => {
        setSlideIndex((slideIndex + 1) % pupNews.length);
    };
    return (
        <>
            <Topbar />
            <Navbar />
            <Slider />
            <Icons />
            <div className="flex flex-wrap content-center justify-center mt-14 font-I">
                <div className="flex flex-wrap w-3/4 h-auto content-container-container">
                    <div className="w-full overflow-y-auto h-96 content-container md:w-2/5">
                        <div className="title">
                            <h1 className="mb-2 font-bold text-rd ">Announcements and Advisories</h1>
                        </div>
                        <div className="flex flex-wrap overflow-auto overflow-x-hidden content">
                            {pupAnnouncements.map((announcement, index) => (
                                <div key="" className="announcements">
                                    <div class="text-rd hover:underline">
                                        <a href={announcement.link}>{announcement.title}</a>
                                    </div>
                                        <p>Posted: {announcement.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=" w-7/10 content-container md:w-2/5">
                        <div className="title">
                            <h1 className="mb-2 font-bold text-rd">Latest News from the University</h1>
                            <div className="slider-buttons-container">
                                <button onClick={handlePrevClick} className="news-slider-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                </button>
                                <button onClick={handleNextClick} className="news-slider-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="pt-5 pr-5">
                            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} selectedItem={slideIndex} onChange={(index) => setSlideIndex(index)} showIndicators={false} showArrows={false}>
                                {pupNews.map((news, index) => (
                                    <div key="" className="flex flex-col flex-wrap ">
                                        <div key={index}>
                                            <img src={news.src} alt={`Image ${index}`} className="news-img" />
                                        </div>
                                        <div className="flex flex-col pt-5 pl-2">
                                            <a href={news.link} className="h-auto font-semibold text-left text-rd hover:underline">{news.title}</a>
                                            <p className="text-left">{news.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                    <div className="flex flex-col flex-wrap content-center justify-center w-full content-container md:w-1/5">
                        {images.map((image, index) => (
                            <a href="#" key="" className="flex flex-wrap justify-center mb-2 img-container">
                                <Image src={image.src} alt="" width={200} height={150} className="rounded-lg"/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <section className="flex flex-col items-center justify-center m-6 space-y-4">
                <div className='flex flex-row'>
                    <div className="flex flex-wrap justify-center mt-10 border-b-[1px] border-grey">
                        <div className="flex justify-center w-3/4 h-auto">
                            <div className="mr-5">
                                <a className="twitter-timeline" data-width="350" data-height="885" data-theme="dark" href="https://twitter.com/ThePUPOfficial?ref_src=twsrc%5Etfw"></a>
                                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center m-6 space-y-4">
                        <iframe width="750" height="422" src="https://www.youtube.com/embed/EVp6JBwTudk?list=UU3D3_jrSi3sYmx5L5p5RAwA" title="The Observer Online: Tanglaw Fest 2023" frameborder="0" allow="accelerometer..." />
                        <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/episode/6hSNhWq3gSGcSouucc8kl0?utm_source=generator" width="750" height="280" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </div>
            </section>

            <section class='bg-gray'>
                <Footer />
            </section>
            <section class='bg-black'>
                <Footerend />
            </section>
        </>
    )
}
export default Homepage
