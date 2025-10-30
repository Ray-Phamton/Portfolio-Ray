import ParticleBackground from './BackgroundParticles'
import { ExperienceCard } from './Cards/ExperienceCard'
import { SocialBubbles } from './SocialBubbles'
import { StudyCard } from './Cards/StudyCard'

export function Main () {
  return (

    <main className='bg-purple-950'>
      <section
        className='flex flex-col h-screen w-full z-0 '
      >
        <ParticleBackground />

        <section className='flex flex-col sm:flex-row lg:pl-32 md:pl-20 sm:pl-12  h-full z-10 pt-20'>
          <section className='flex flex-col justify-center sm:items-stretch sm:w-1/2 items-center h-full gap-2 z-10'>
            <img className=' sm:hidden h-52 rounded-full object-cover mt-6' src='https://raw.githubusercontent.com/Ray-Phamton/mini-portfolio/refs/heads/master/public/Raymon-perfil.jpeg' alt='image of Raymon Reyes' />
            <h1 className='lg:text-6xl md:text-5xl text-4xl font-extrabold sm:mb-4 text-gray-100'>Raymon Reyes</h1>
            <div className='flex sm:hidden items-center h-1/5 gap-4 pt-6'>
              <SocialBubbles />
            </div>
            <span className='hidden sm:inline lg:text-5xl md:text-4xl text-3xl font-bold mb-3 text-purple-500'> Desarrollador Web</span>
            <div className='w-3/4'>
              <p className=' md:text-xl font-extrabold mb-4 text-gray-100 pt-6'>Desarrollador Web Junior centrado en la experiencia de usuario, construyendo interfaces rápidas, intuitivas y responsivas con React y Tailwind CSS.</p>
            </div>
          </section>

          <section className='hidden sm:flex flex-col justify-center items-center h-full w-1/2 z-10'>
            <img className=' lg:h-80 md:h-72 sm:h-60 h-52 rounded-full object-cover' src='https://raw.githubusercontent.com/Ray-Phamton/mini-portfolio/refs/heads/master/public/Raymon-perfil.jpeg' alt='image of Raymon Reyes' />
            <div className='flex items-center h-1/5 md:gap-8 sm:gap-2 gap-4 pt-24'>
              <SocialBubbles />
            </div>
          </section>
        </section>

      </section>

      <section className='flex flex-col items-center justify-center bg-gradient-to-b from-purple-950  via-black via-5%  to-zinc-900 z-10 gap-20 pt-20'>
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
              <li className='flex items-center text-zinc-200 bg-gradient-to-tr from-violet-600 via-indigo-00 via-80% to-blue-600 px-4 py-2 rounded-full hover:scale-110 hover:shadow-lg hover:shadow-violet-700/50 transition'>💡 Resolución de Problemas</li>
              <li className='flex items-center text-zinc-200 bg-gradient-to-tr from-violet-600 via-indigo-00 via-80% to-blue-600 px-4 py-2 rounded-full hover:scale-110 hover:shadow-lg hover:shadow-violet-700/70 transition'>🤝 Colaboración</li>
              <li className='flex items-center text-zinc-200 bg-gradient-to-tr from-violet-600 via-indigo-00 via-80% to-blue-600 px-4 py-2 rounded-full hover:scale-110 hover:shadow-lg hover:shadow-violet-700/70 transition'>📈 Aprendizaje Rápido</li>
            </ul>
          </footer>
        </section>

        <section id='Study' className=' bg-zinc-800 w-11/12 p-10 rounded-3xl shadow-2xl shadow-violet-800/70'>
          <header>
            <h2 className='lg:text-4xl md:text-3xl text-2xl  font-extrabold mb-4 text-gray-100 h-16 border-b border-violet-600'><span className='text-violet-600'>➣</span> Estudios</h2>
          </header>

          <StudyCard
            year='2022 — Actualidad'
            certification='Ingeniería de Sistemas'
            institution='Universidad Nacional Experimental Politécnica de las Fuerzas Armadas (UNEFA)'
            description='Formación enfocada en la lógica de programación (C++/Estructuras de Datos) y algoritmos, sentando las bases analíticas esenciales para el desarrollo de software de alta calidad.'
          />
          <StudyCard
            year='2025'
            certification='Desarrollo Frontend Moderno (React, Tailwind, CSS, HTML)'
            institution='midudev (Cursos Gratuitos en YouTube)'
            description='Formación práctica y actualizada en tecnologías clave de frontend: Desarrollo de interfaces dinámicas con React, estilización rápida y eficiente con Tailwind CSS, y técnicas avanzadas de CSS y HTML para construir aplicaciones modernas.'
          />
          <StudyCard
            year='2025'
            certification='Curso Completo de JavaScript Moderno'
            institution='AprendeJavaScript.dev'
            description='Dominio de los fundamentos de JavaScript (ES6+), incluyendo manipulación del DOM, asincronía (Promesas, Async/Await), y patrones de programación esenciales. El pilar fundamental para la interactividad y la lógica de aplicaciones web modernas.'
          />
          <StudyCard
            year='2025'
            certification='Fundamentos de Desarrollo Web (HTML y CSS)'
            institution='Google actívate (Curso - 1/2)'
            description='Adquisición de los conocimientos esenciales de HTML5 para la estructuración semántica de páginas web y CSS3 para el diseño, estilo y responsividad básica, estableciendo la base para el desarrollo frontend.'
          />
          <StudyCard
            year='2018 — 2022'
            certification='Bachillerato en Humanidades y Ciencias Sociales'
            institution='U.E. Colegio Privado "La Milagrosa"'
            description='Formación académica general enfocada en el análisis crítico de textos y sistemas de pensamiento, desarrollando habilidades avanzadas en estructura lógica, resolución de problemas complejos y comunicación clara.'
          />
        </section>

        <section id='Experience' className=' bg-zinc-800 w-11/12 p-10 rounded-3xl shadow-2xl shadow-violet-800/70'>
          <header>
            <h2 className='lg:text-4xl md:text-3xl text-2xl  font-extrabold mb-4 text-gray-100 h-16 border-b border-violet-600'><span className='text-violet-600'>➣</span> Experiencia relevante</h2>
          </header>
          <main className='flex flex-col lg:flex-row sm:justify-around '>

            <ExperienceCard
              role='Líder de Equipo de AI'
              team='Buffer-Ring'
              timeframe='Marzo 2025 - julio 2025'
              achievements={[
                'Lideré un equipo de 4 miembros para integrar la Inteligencia Artificial y acelerar el desarrollo del e-commerce "Car-Fix".',
                'Gestioné el flujo de trabajo del equipo, delegando tareas y asegurando el cumplimiento de objetivos bajo un esquema de desarrollo ágil.',
                'Implementé y gestioné procesos de Git/GitHub para mantener la integridad del código base de la organización.'
              ]}
            >
              <div className='mt-4 pt-4 border-t border-zinc-600 '>
                <a href='https://www.bufferring.org/' target='_blank' className='mb-4 inline-block text-violet-400 hover:text-violet-300 transition duration-150 text-sm font-medium' rel='noreferrer'>
                  Ver Buffer-Ring →
                </a>
              </div>
            </ExperienceCard>
            <ExperienceCard
              role='Especialista en UI de Consola (CLI)'
              team='Equipo de Universidad'
              timeframe='Octubre 2024 - febrero 2025'
              achievements={[
                'Colaboré en un juego didáctico en C++ enfocado en el aprendizaje de nuevas palabras y la expansión del léxico.',
                'Lideré la investigación y la implementación de técnicas para mostrar una interfaz gráfica (UI) clara y decente directamente desde la terminal (CLI).',
                'Fortalecí las bases de mi lógica de programación y la aplicación de estructuras de datos.'
              ]}
            />
          </main>
          <footer>
            <div className='mt-12 text-center'>
              <p className='text-lg text-gray-600 dark:text-gray-300'>
                ¿Interesado en más detalles?
                {/* for future updates */}
                <a href='#contacto' className='text-indigo-400 font-semibold hover:underline ml-2'>
                  ¡Hablemos de tu proyecto!
                </a>
              </p>
            </div>
          </footer>
        </section>

        <section id='Projects' className=' bg-zinc-800 h-96 w-11/12 p-10 rounded-3xl shadow-2xl shadow-violet-800/70'>
          <h2 className='lg:text-4xl md:text-3xl text-2xl  font-extrabold mb-4 text-gray-100 h-16 border-b border-violet-600'><span className='text-violet-600'>➣</span> Proyectos</h2>
          <p />
        </section>
      </section>

    </main>

  )
}

  <div className='relative mb-12 pl-10 border-l border-zinc-600'>
    <div className='absolute -left-2 top-1 w-4 h-4 rounded-full bg-violet-500 ring-4 ring-zinc-800' />

    <div className='bg-zinc-700 p-6 rounded-lg shadow-md hover:shadow-violet-700/50 transition duration-300'>
      <div className='flex flex-col items-start mb-2'>
        <h3 className='text-xl font-bold text-gray-100'>Líder del Equipo de AI</h3>
        <p className='text-sm font-semibold text-violet-400'>Marzo 2025 – julio 2025</p>
      </div>
      <p className='text-md font-medium text-zinc-300 mb-4'>Buffer-Ring (Organización sin Fines de Lucro)</p>

      <ul className='list-disc list-inside space-y-2 text-zinc-300 text-sm ml-4'>
        <li>Lideré un equipo de 4 miembros para integrar la Inteligencia Artificial y acelerar el desarrollo del e-commerce "Car-Fix".</li>
        <li>Gestioné el flujo de trabajo del equipo, delegando tareas y asegurando el cumplimiento de objetivos bajo un esquema de desarrollo ágil.</li>
        <li>Implementé y gestioné procesos de Git/GitHub (forks, pull requests, commits, amends, etc) para mantener la integridad del código base de la organización.</li>
        <li>Investigué e implementé la funcionalidad beta de un asistente virtual, llevando conceptos AI a la funcionalidad web.</li>
      </ul>

      <a href='https://www.bufferring.org/' target='_blank' className='mt-4 inline-block text-violet-400 hover:text-violet-300 transition duration-150 text-sm font-medium' rel='noreferrer'>
        Ver Buffer-Ring →
      </a>
    </div>
  </div>
