import Topbar from '@/components/topbar'
import Navbar from '@components/navbar.js'
import Footer from '@components/footer.js'
import Footerend from '@/components/footerend'
import Fab from '@/components/fab.js'
import Contact from "@/containers/contact_data.js"
import ModalCall from "@components/modal_call"

const ContactPage = () => {
    return (
        <>
            <ModalCall />
            <Topbar />
            <Navbar />
            <Contact />
           
                
                
                
            <Footer />
            <Footerend />

            <Fab />



        </>
    )
}
export default ContactPage