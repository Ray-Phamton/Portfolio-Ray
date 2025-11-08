import { NavegationLink } from './NavegationLink'
export function DesktopNavegationLinks () {
  return (
    <div className='hidden md:flex justify-between py-6 max-w-7xl mx-auto '>
      <ul className='flex whitespace-nowrap md:space-x-6 lg:space-x-24 pt-4'>
        <NavegationLink
          link='#About-me'
          section='Acerca de mí'
          withVignette
        />
        <NavegationLink
          link='#Study'
          section='Estudios'
          withVignette
        />
        <NavegationLink
          link='#Experience'
          section='Experiencia'
          withVignette
        />
        <NavegationLink
          link='#tools'
          section='Herramientas'
          withVignette
        />
      </ul>
    </div>
  )
}
