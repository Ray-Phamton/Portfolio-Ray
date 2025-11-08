import { HeroSection } from './MainComponents/HeroSection'
import { AboutMeSection } from './MainComponents/AboutMeSection'
import { StudySection } from './MainComponents/StudySection'
import { ToolsSection } from './MainComponents/ToolsSection'
import { ExperienceSection } from './MainComponents/ExperienceSection'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TiArrowUpThick } from 'react-icons/ti'

export function Main () {
  const [isVisible, setIsVisible] = useState(false)

  // Función para manejar el evento de scroll
  const toggleVisibility = () => {
    if (window.scrollY > 100) { // Muestra el botón si el scroll es mayor a 300px
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Agrega y elimina el listener de scroll
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <>
      <main className='bg-purple-950'>
        <HeroSection />
        <section className='flex flex-col items-center justify-center bg-linear-to-b from-purple-950  via-black via-5%  to-zinc-900 z-10 gap-20 pt-20'>

          <AboutMeSection />

          <StudySection />

          <ExperienceSection />

          <ToolsSection />
        </section>

        <motion.button
          onClick={handleScrollToTop}
      // **Framer Motion**: Define cómo entra y sale el botón
          initial={{ opacity: 0, scale: 0.7 }} // Estado inicial (oculto)
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }} // Animar basado en 'isVisible'
          transition={{ duration: 0.3 }} // Duración de la animación
      // Opcional: Animar al hacer hover (interactividad)
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
      // Estilos para la posición fija
          className='fixed border-none flex items-center justify-center bg-radial-[at_25%_80%] from-violet-700 via-75% to-black text-gray-100 rounded-full shadow-xl shadow-violet-700/50 hover:shadow-violet-700 transition duration-1000 size-16 sm:size-20 right-10 bottom-20 sm:bottom-14'
          style={{
            // ... otros estilos ...
            pointerEvents: isVisible ? 'auto' : 'none' // Deshabilita clics si está oculto
          }}
        >
          <TiArrowUpThick className=' text-gray-100 sm:size-18 size-14' />
        </motion.button>
      </main>

    </>

  )
}
