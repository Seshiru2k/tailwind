import Navbar from '@/components/navbar.js'
import Footer from '@components/footer.js'
import Topbar from '@/components/topbar.js'



export default function home() {
  return (
    <>
      <Navbar />
      <Topbar />
     

      <section class="py-16 px-16 flex-col gap-6 pl-10">

        <iframe class="flex justify-center" width="750" height="422" src="https://www.youtube.com/embed/EVp6JBwTudk?list=UU3D3_jrSi3sYmx5L5p5RAwA" title="The Observer Online: Tanglaw Fest 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe class="flex justify-center" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/episode/6hSNhWq3gSGcSouucc8kl0?utm_source=generator" width="750" height="280" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>


      </section>

      <section class='bg-gray'>

        <Footer />

      </section>
    </>

  )
}