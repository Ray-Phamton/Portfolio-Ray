export function Header () {
  return (
    <header className=' fixed flex items-center place-items-center top-0 shadow-2xl h-20 w-full z-50 '>
      <div className='flex justify-center items-center pt-3 h-16 sm:w-80 pl-10 '>
        <button className=' bg-gradient-to-tr from-violet-600 via-indigo-00 via-80% to-blue-600 h-10 w-32 shadow-lg shadow-violet-700/50 hover:shadow-violet-600 hover:shadow-lg rounded-3xl z-10 text-gray-100 hover:scale-110 active:translate-y-1 transition' title='boton de accion'><strong>Contactar</strong></button>
      </div>
      <div className='flex justify-between py-6 max-w-7xl mx-auto '>
        <ul className='flex whitespace-nowrap space-x-14'>
          <a href='#About-me'>
            <li className='hidden md:inline hover:text-purple-600 text-xl font-medium mb-2 text-gray-100'>
              ● <span className='hover:underline active:no-underline'>Acerca de mí</span>
            </li>
          </a>
          <a href='#Study'>
            <li className='hidden md:inline hover:text-purple-600 text-xl font-medium mb-2 text-gray-100'>
              ● <span className='hover:underline active:no-underline'>Estudios</span>
            </li>
          </a>
          <a href='#Experience'>
            <li className='hidden md:inline hover:text-purple-600 text-xl font-medium mb-2 text-gray-100'>
              ● <span className='hover:underline active:no-underline'>Experiencia</span>
            </li>
          </a>
          <a href='#tools'>
            <li className='hidden md:inline hover:text-purple-600 text-xl font-medium mb-2 text-gray-100'>
              ● <span className='hover:underline active:no-underline'>Herramientas</span>
            </li>
          </a>
        </ul>
      </div>
    </header>
  )
}
