import { useState } from 'react'
import ContactFormModal from './HeaderComponents/ContactFormModal'
import { DesktopNavegationLinks } from './HeaderComponents/DesktopNavegationLinks'
import { MobileNavbar } from './HeaderComponents/MobileNavbar'

export function Header () {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const HandleClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <header className=' fixed flex items-center place-items-center top-0 shadow-2xl h-20 w-full z-50 '>
        <div className='flex items-center pt-3 h-16 pl-10 lg:pl-32 md:pl-20 w-2/5'>
          <button className=' bg-linear-to-tr from-violet-500 via-indigo-600  to-blue-600 h-10 w-32 shadow-lg shadow-violet-700/50 hover:shadow-violet-600 hover:shadow-lg rounded-3xl z-10 text-gray-100 hover:scale-110 active:translate-y-1 transition' onClick={HandleClick}><strong>Contactar</strong></button>
        </div>
        <DesktopNavegationLinks />
        <MobileNavbar />
      </header>
      <ContactFormModal
        isOpen={isModalOpen} // Tells the modal whether to display
        onClose={closeModal}
      />
    </>
  )
}
