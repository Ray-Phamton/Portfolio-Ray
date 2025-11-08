export function AboutMeSection () {
  return (
    <section id='About-me' className=' bg-zinc-800 w-11/12 p-10 rounded-3xl shadow-2xl shadow-violet-800/70 mx-auto'>
      <header>
        <h2 className='lg:text-4xl md:text-3xl text-2xl  font-extrabold mb-4 text-gray-100 h-16 border-b border-violet-600'><span className='text-violet-600'>➣</span> Acerca de mí</h2>
      </header>
      <p className='lg:text-lg sm:text-base text-sm sm:w-3/4 w-full text-gray-100 mb-6'>  ¡Hola!, soy Raymon Reyes, tengo 19 años y soy un Desarrollador Web Junior apasionado por crear aplicaciones web responsivas y funcionales. Mi interés destaca en el desarrollo frontend utilizando la eficiencia de React y la velocidad de Tailwind CSS para crear interfaces rápidas, responsivas y, sobre todo, altamente intuitivas. Mi objetivo no es solo escribir código, sino construir productos digitales que las personas disfruten usar y encuentren utilidad dentro de ellas.
      </p>

      <p className='lg:text-lg sm:text-base text-sm sm:w-3/4 w-full text-gray-100 mb-6'>
        Mi viaje en el desarrollo comenzó en la universidad, actualmente estoy cursando la licenciatura en ingeniería de sistemas, durante este periodo descubrí la programacion, partiendo desde C++ un lenguaje de nivel intermedio donde senté las bases de mi lógica de programación, sin embargo, me he dedicado a estudiar lenguajes de desarrollo y diseño web como Javascript,PHP,HTML,CSS y en el uso de frameworks modernos como React y Tailwind CSS, todo esto con el objetivo de materializar mis ideas y desarrollar capacidades óptimas para dedicarme a esta ocupación.
      </p>

      <p className='lg:text-lg sm:text-base text-sm  sm:w-3/4 w-full text-gray-100'>
        Actualmente, estoy buscando la oportunidad de desenvolverme como Desarrollador Frontend en un equipo que valore la innovación y la calidad del código, donde pueda aplicar y seguir expandiendo mis habilidades como desarrollador. Estoy siempre abierto a colaborar en proyectos interesantes y a aprender de profesionales con experiencia. ¡No dudes en contactarme!.
      </p>

      <footer className='mt-8 pt-4 border-t border-violet-600'>
        <h3 className='text-xl font-bold text-gray-100 mb-4'><span className='text-violet-600'>➣</span> Mi Enfoque</h3>
        <ul className='flex flex-wrap gap-4'>
          <li className='flex items-center text-zinc-200 bg-linear-to-tr from-violet-500 via-indigo-600  to-blue-600 px-4 py-2 rounded-full hover:scale-110 hover:shadow-lg hover:shadow-violet-700/50 transition'>💡 Resolución de Problemas</li>
          <li className='flex items-center text-zinc-200 bg-linear-to-tr from-violet-500 via-indigo-600  to-blue-600 px-4 py-2 rounded-full hover:scale-110 hover:shadow-lg hover:shadow-violet-700/70 transition'>🤝 Colaboración</li>
          <li className='flex items-center text-zinc-200 bg-linear-to-tr from-violet-500 via-indigo-600  to-blue-600 px-4 py-2 rounded-full hover:scale-110 hover:shadow-lg hover:shadow-violet-700/70 transition'>📈 Aprendizaje Rápido</li>
        </ul>
      </footer>
    </section>
  )
}
