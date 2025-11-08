import { NavegationLink } from './NavegationLink'
import { useState } from 'react'
import { FaEllipsisV } from 'react-icons/fa'

export function MobileNavbar () {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  return (
    <>
      <div className={`fixed h-full w-full z-30 ${isMenuOpen ? 'hidden' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>

        <div
          className={`flex justify-center bg-violet-900/10 md:hidden fixed right-0 top-20 h-[89vh] w-[40%] border-purple-700 rounded-bl-4xl border backdrop-blur-xs ${isMenuOpen ? 'hidden' : ''} z-20`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className='grid w-full md:hidden h-1/3'>
            <NavegationLink
              link='#About-me'
              section='Acerca de mí'
              withBorder
              onChange={setIsMenuOpen}
              currentValue={isMenuOpen}
            />
            <NavegationLink
              link='#Study'
              section='Estudios'
              withBorder
              onChange={setIsMenuOpen}
              currentValue={isMenuOpen}
            />
            <NavegationLink
              link='#Experience'
              section='Experiencia'
              withBorder
              onChange={setIsMenuOpen}
              currentValue={isMenuOpen}
            />
            <NavegationLink
              link='#tools'
              section='Herramientas'
              withBorder
              onChange={setIsMenuOpen}
              currentValue={isMenuOpen}
            />
          </ul>
        </div>
      </div>
      <div className='w-1/5 z-10 h-1/4' />
      <nav className={`md:hidden flex items-center justify-center h-full w-2/5 md:bg-transparent  border-b-0 ${isMenuOpen ? '' : 'bg-violet-900/10 border-purple-700 border rounded-tl-4xl backdrop-blur-xs'}`} onClick={(e) => e.stopPropagation()}>
        <div className='absolute md:hidden right-0'>

          <div className='flex items-center justify-center pr-2'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='flex items-center justify-center size-14 rounded-3xl outline-none ring-2 ring-indigo-500 transition duration-150 ease-in-out'
              aria-expanded={isMenuOpen}
            >
              <FaEllipsisV
                className={`
                    h-6 w-6 text-gray-100
                    transform transition-transform duration-300
                    ${isMenuOpen ? 'rotate-90' : 'rotate-0'}
                    `}
                aria-hidden='true'
              />
            </button>
          </div>

        </div>
      </nav>
    </>
  )
}
