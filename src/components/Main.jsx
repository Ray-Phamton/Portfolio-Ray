import ParticleBackground from './BackgroundParticles'
import { SocialBubbles } from './SocialBubbles'

export function Main () {
  return (
    <main>
      <section
        className='flex flex-col h-screen w-full z-0 '
      >
        <ParticleBackground />

        <section className='flex flex-col sm:flex-row lg:pl-32 md:pl-20 sm:pl-12 pl-4 justify-center items-center sm:h-full h-5/6 w-full  z-10'>
          <section className='flex flex-col justify-center sm:items-stretch sm:w-1/2 items-center h-1/2 gap-2 z-10'>
            <img className=' sm:hidden h-52 rounded-full object-cover mt-6' src='https://raw.githubusercontent.com/Ray-Phamton/mini-portfolio/refs/heads/master/public/Raymon-perfil.jpeg' alt='image of Raymon Reyes' />
            <h1 className='lg:text-6xl md:text-5xl text-4xl font-extrabold mb-4 text-gray-100'>Raymon Reyes</h1>
            <div className='flex sm:hidden items-center h-1/5 gap-4 pt-6'>
              <SocialBubbles />
            </div>
            <span className='hidden sm:inline lg:text-5xl md:text-4xl text-3xl font-bold mb-3 text-purple-500'> web developer</span>
            <div className='w-3/4'>
              <p className=' md:text-xl font-extrabold mb-4 text-gray-100 pt-6'>Desarrollador Web Junior centrado en la experiencia de usuario, construyendo interfaces rápidas, intuitivas y responsivas con React y Tailwind CSS.</p>
            </div>
          </section>

          <section className='hidden sm:flex flex-col justify-center items-center h-full w-1/2 z-10'>
            <img className=' lg:h-80 md:h-72 sm:h-60 h-52 rounded-full object-cover' src='https://raw.githubusercontent.com/Ray-Phamton/mini-portfolio/refs/heads/master/public/Raymon-perfil.jpeg' alt='image of Raymon Reyes' />
            <div className='flex items-center h-1/5 gap-4'>
              <SocialBubbles />
            </div>
          </section>
        </section>

      </section>

      <section id='About-me' className='flex items-center justify-center bg-gradient-to-b from-purple-950  via-black via-10%  to-zinc-900 h-screen z-10 sm:-mt-[76px] -mt-[121px] border-white '>
        <div className=' bg-zinc-800 h-4/5 w-11/12 p-10 rounded-3xl '>
          <h2 className='lg:text-4xl md:text-3xl text-2xl font-extrabold mb-4 text-gray-100'>Acerca de mí</h2>
          <p />
        </div>
      </section>

      <section id='Study' className='flex items-center justify-center bg-zinc-900 h-screen z-10 sm:-mt-[76px] -mt-[64px] border-white '>
        <div className=' bg-zinc-800 h-4/5 w-11/12 p-10 rounded-3xl '>
          <h2 className='lg:text-4xl md:text-3xl text-2xl font-extrabold mb-4 text-gray-100'>Estudios</h2>
          <p />
        </div>
      </section>

      <section id='Experience' className='flex items-center justify-center bg-zinc-900 h-screen z-10 sm:-mt-[76px] -mt-[64px] border-white '>
        <div className=' bg-zinc-800 h-4/5 w-11/12 p-10 rounded-3xl '>
          <h2 className='lg:text-4xl md:text-3xl text-2xl font-extrabold mb-4 text-gray-100'>Experiencia</h2>
          <p />
        </div>
      </section>

      <section id='Projects' className='flex items-center justify-center bg-zinc-900 h-screen z-10 sm:-mt-[76px] -mt-[64px] border-white  '>
        <div className=' bg-zinc-800 h-4/5 w-11/12 p-10 rounded-3xl '>
          <h2 className='lg:text-4xl md:text-3xl text-2xl font-extrabold mb-4 text-gray-100'>Proyectos</h2>
          <p />
        </div>
      </section>
    </main>

  )
}
