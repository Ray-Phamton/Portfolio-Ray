import { HeroSection } from './MainComponents/HeroSection'
import { AboutMeSection } from './MainComponents/AboutMeSection'
import { StudySection } from './MainComponents/StudySection'
import { ToolsSection } from './MainComponents/ToolsSection'
import { ExperienceSection } from './MainComponents/ExperienceSection'
import { useState, useEffect } from 'react'
import { TiArrowUpThick } from 'react-icons/ti'
import { RepoSection } from './MainComponents/RepoSection'

export function Main() {
  const [isVisible, setIsVisible] = useState(false)

  // Function to handle the scroll event
  const toggleVisibility = () => {

    if (window.scrollY > 100) { // Show the button if the scroll is greater than 300px

      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Add and remove the scroll listener
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
      <main className="bg-purple-950">
        <HeroSection />
        <section className="flex flex-col items-center justify-center bg-linear-to-b from-purple-950  via-black via-5%  to-zinc-900 z-10 gap-20 pt-20">
          <AboutMeSection />

          <StudySection />

          <ExperienceSection />

          <ToolsSection />

          <RepoSection />
        </section>

        <motion.button
          onClick={handleScrollToTop}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='fixed border-none flex items-center justify-center bg-radial-[at_25%_80%] from-violet-700 via-75% to-black text-gray-100 rounded-full shadow-xl shadow-violet-700/50 hover:shadow-violet-700 transition duration-1000 size-16 sm:size-20 right-10 bottom-20 sm:bottom-14'
          style={{
            pointerEvents: isVisible ? 'auto' : 'none'

          }}
        >
          <TiArrowUpThick className=" text-gray-100 sm:size-18 size-14" />
        </motion.button>
      </main>
    </>
  )
}
