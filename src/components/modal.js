import { useState, useEffect } from "react";
import Image from "next/image";


const Modal = () =>{
    const Logo = [
        {src: '/PTSLOGO.png', width: '100', height: '100'},
        {src: '/FOILOGO.png', width:'100', height: '100'},
        {src: '/ISOLOGO.png', width:'116', height: '100'},
    ]
    
    const ModalLink = [
        {link: '#', title: 'Applicant', 
        d: 'fa-pencil-square'},
        {link: '#', title: 'Student', d: 'fa-book'},
        {link: '#', title: 'Faculty Member or Employee', d: 'fa-users'},
        {link: '#', title: 'Researcher or Extensionist', d: 'fa-flask'},
        {link: '#', title: 'Alumni', d: 'fa-graduation-cap'},
        {link: '#', title: 'Campus Life', d: 'fa-institution'},
        {link: '#', title: 'Institutional Accreditation', d: 'fa-edit'},
        {link: '#', title: 'View Homepage', d: 'fa-align-justify'},
    ]
    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
      setIsModalOpen(false);
    };

    const onEscapePress = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    useEffect(() => {
      document.addEventListener('keydown', onEscapePress);
      return () => {
        document.removeEventListener('keydown', onEscapePress);
      };
    }, []);

    const onWindowClick = (e) => {
      const modal = document.getElementsByClassName('bg-modal')[0];
      if (e.target === modal) {
        closeModal();
      }
    };
      
    return(
        <>
          <button className="flex services-widget" onClick={()=> setIsModalOpen(true)}>
            <span><i className="fa fa-desktop"/></span>
          </button>
          {isModalOpen &&(
            <div className="z-10 bg-modal" onClick={onWindowClick}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                  <div className="modal-content">
                      <div className="w-full pt-2">
                          <button className="btnCancel" onClick={closeModal}>+</button>
                      </div>
                      <div className="flex flex-col w-full text-center">
                          <h1 className="font-serif text-4xl font-semibold text-red-900 mb-7 md:text-xl"><span>WELCOME TO THE</span><br/>POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</h1>
                          <p className="mt-4 text-3xl mb-7 md:text-lg md:mt-0">Please click/tap the appropriate link to help you in your navigation of our services</p>
                      </div>
                      <div className="flex flex-col flex-wrap content-center w-full md:flex-row">
                          <div className="modal-items-container">
                              <div className="flex justify-center w-full py-6 logo-container">
                                  <Image src="/PUPlogo.png" alt="" width={200} height={200}/>
                              </div>
                              <div className="flex justify-center w-full logos-container gap-x-1">
                                  {Logo.map((logo, index)=>(
                                      <Image key={index} src={logo.src} alt="" width={logo.width} height={logo.height}/>
                                  ))}
                              </div>
                          </div>
                          <div className="modal-items-container gap-y-2 md:gap-y-1">
                              {ModalLink.map((modalLink, index)=>(
                                <a key={index} href={modalLink.link} className="modal-links-container w-full bg-rd py-2.5 px-4 h-20 md:h-11 rounded-sm hover:bg-red-900 flex-wrap content-center hover:pl-7 flex space-x-2">
                                    <p className="text-4xl text-white md:text-lg font-base"><i className={`mr-3 fa ${modalLink.d}`}></i>{modalLink.title}</p>
                                </a>
                              ))}
                          </div>
                      </div>
                  </div>
            </div>
          )}
      </>
    )
}

export default Modal;