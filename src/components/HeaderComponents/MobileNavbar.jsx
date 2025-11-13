import { NavegationLink } from './NavegationLink'
import { useState } from 'react'
import { FaEllipsisV } from 'react-icons/fa'
import { motion } from 'motion/react'

export function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const fillVariants = {
    visible: {
      opacity: 1,
      height: '100%',
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hidden: {
      opacity: 1,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  }
  const navbarVariants = {
    visible: {
      x: 0,
    },
    hidden: {
      x: 300,
    },
  }

  return (
    <>
      <motion.div
        variants={fillVariants}
        initial={false}
        animate={isMenuOpen ? 'hidden' : 'visible'}
        className={`fixed h-full w-full bottom-0 `}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <motion.div
          variants={navbarVariants}
          initial={false}
          animate={isMenuOpen ? 'hidden' : 'visible'}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          className={`flex justify-center bg-violet-900/10 md:hidden fixed right-0 top-20 h-[89vh] w-[40%] border-purple-700 rounded-bl-4xl border backdrop-blur-xs z-20`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="grid w-full md:hidden h-1/3">
            <NavegationLink
              link="#About-me"
              section="Acerca de mí"
              withBgHover
              onChange={setIsMenuOpen}
              currentValue={isMenuOpen}
            />
            <NavegationLink
              link="#Study"
              section="Estudios"
              withBgHover
              onChange={setIsMenuOpen}
              currentValue={isMenuOpen}
            />
            <NavegationLink
              link="#Experience"
              section="Experiencia"
              withBgHover
              onChange={setIsMenuOpen}
              currentValue={isMenuOpen}
            />
            <NavegationLink
              link="#tools"
              section="Herramientas"
              withBgHover
              onChange={setIsMenuOpen}
              currentValue={isMenuOpen}
            />
            <NavegationLink
              link="#recent-Developments"
              section="Repositorios"
              withBgHover
              onChange={setIsMenuOpen}
              currentValue={isMenuOpen}
            />
          </ul>
        </motion.div>
      </motion.div>
      <div className="w-1/5 z-10 h-1/4" />
      <motion.nav
        variants={navbarVariants}
        initial={false}
        animate={isMenuOpen ? 'hidden' : 'visible'}
        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        className={`md:hidden flex items-center justify-center h-full w-2/5 border-b-0 bg-violet-900/10 border-purple-700 border rounded-tl-4xl backdrop-blur-xs`}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          className="fixed md:hidden right-2 "
          initial={false}
          animate={isMenuOpen ? { x: -300 } : { x: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        >
          <div className=" flex items-center justify-center ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center size-14 rounded-3xl outline-none ring-2 ring-indigo-500 transition duration-150 ease-in-out"
              aria-expanded={isMenuOpen}
            >
              <FaEllipsisV
                className={`
                    h-6 w-6 text-gray-100
                    transform transition-transform duration-300
                    ${isMenuOpen ? 'rotate-90' : 'rotate-0'}
                    `}
                aria-hidden="true"
              />
            </button>
          </div>
        </motion.div>
      </motion.nav>
    </>
  )
}
