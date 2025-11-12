import { NavegationLink } from './NavegationLink'
export function DesktopNavegationLinks () {
  return (
    <div className='hidden md:flex justify-between py-6 max-w-7xl mx-auto '>
      <ul className='flex whitespace-nowrap md:space-x-6 lg:space-x-24 pt-4'>
        <NavegationLink
          link='#About-me'
          section='Acerca de mí'
          withVignette
          onChange={()=> {}}
        />
        <NavegationLink
          link='#Study'
          section='Estudios'
          withVignette
          onChange={()=> {}}
        />
        <NavegationLink
          link='#Experience'
          section='Experiencia'
          withVignette
          onChange={()=> {}}
        />
        <NavegationLink
          link='#tools'
          section='Herramientas'
          withVignette
          onChange={()=> {}}
        />
      </ul>
    </div>
  )
}
