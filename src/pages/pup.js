import Topbar from '@/components/topbar'
import Navbar from '@components/navbar.js'
import Slider from "@/components/slider"
import Icons from '@/components/icons'
import Footer from '@components/footer.js'
import Footerend from '@/components/footerend'
import Image from 'next/image'
import Fab from '@/components/fab.js'
import Modal from '@/components/modal'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { pupAnnouncements, pupNews, images } from "@/heading/datas"


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
            <Modal/>
            <Topbar />
            <Navbar />
            <Slider />
            <Icons />
            <div className="flex flex-wrap justify-center mt-14 font-I">
                <div className="flex flex-wrap w-3/4 h-auto content-container-container">
                    <div className="w-full overflow-y-auto h-96 content-text md:w-2/5">
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
                    <div className=" w-7/10 content-text md:w-2/5">
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
                    <div className="flex flex-col flex-wrap content-center justify-center w-full content-text md:w-1/5">
                        {images.map((image, index) => (
                            <a href="#" key="" className="flex flex-wrap justify-center mb-2 img-content">
                                <Image src={image.src} alt="" width={200} height={150} className="rounded-lg" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <section className="flex flex-col flex-wrap items-center justify-center my-6 space-y-4 embed-links sm:w-full">
                <div className="flex flex-row items-center justify-center embedResponsive sm:flex-col md:flex-col lg:flex-row">
                    <div className="flex flex-wrap justify-center tw border-grey sm:mb-4">
                        <div className="flex justify-center w-full h-auto">
                            <div className="twtBox">
                                <a className="twitter-timeline" data-height="820" data-theme="dark" href="https://twitter.com/ThePUPOfficial?ref_src=twsrc%5Etfw"></a>
                                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col w-full xl:mb-6 xl:mt-6 xl:m-6 pt-6">
                        <div className='flex flex-col items-center justify-center space-y-4 music'>
                            <iframe class="yt" data-height="350" src="https://www.youtube.com/embed/EVp6JBwTudk?list=UU3D3_jrSi3sYmx5L5p5RAwA" title="The Observer Online: Tanglaw Fest 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe class="spot" data-height="350" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/episode/6hSNhWq3gSGcSouucc8kl0?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section class='bg-gray'>
                <Footer />
            </section>
            <section class='bg-black'>
                <Footerend />
            </section>

            <Fab/>
        </>
    )
}
export default Homepage
