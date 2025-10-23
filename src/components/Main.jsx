import ParticleBackground from './BackgroundParticles'
import { RiTelegram2Fill, RiInstagramLine, RiGithubFill } from 'react-icons/ri'
import { FaLinkedinIn } from 'react-icons/fa'

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
            <h1 className='lg:text-6xl md:text-5xl text-4xl font-extrabold mb-4 text-blue-50'>Raymon Reyes</h1>
            <div className='flex sm:hidden items-center h-1/5 gap-4 pt-6'>
              <div className='size-12 rounded-full bg-gradient-to-br from-white to-zinc-900 to-75%' />
              <div className='size-12 rounded-full bg-gradient-to-br from-white to-zinc-900 to-75%' />
              <div className='size-12 rounded-full bg-gradient-to-br from-white to-zinc-900 to-75%' />
              <div className='size-12 rounded-full bg-gradient-to-br from-white to-zinc-900 to-75%' />
            </div>
            <span className='hidden sm:inline lg:text-5xl md:text-4xl text-3xl font-bold mb-3 text-purple-500'> web developer</span>
            <div className='w-3/4'>
              <p className=' md:text-xl font-extrabold mb-4 text-white pt-6'>Desarrollador Web Junior centrado en la experiencia de usuario, construyendo interfaces rápidas, intuitivas y responsivas con React y Tailwind CSS.</p>
            </div>
          </section>
          <section className='hidden sm:flex flex-col justify-center items-center h-full w-1/2 z-10'>
            <img className=' lg:h-80 md:h-72 sm:h-60 h-52 rounded-full object-cover' src='https://raw.githubusercontent.com/Ray-Phamton/mini-portfolio/refs/heads/master/public/Raymon-perfil.jpeg' alt='image of Raymon Reyes' />
            <div className='flex items-center h-1/5 gap-4'>

              <a title='Telegram de Raymon' href='https://t.me/Ray_Phamton' target='_blank' rel='noreferrer'>
                <RiTelegram2Fill className='size-16 text-white bg-gradient-to-tr from-sky-500 via-sky-500 via-40% to-emerald-400 p-3 rounded-full hover:shadow-lg hover:shadow-violet-500 hover:scale-125 active:translate-y-1 transition' />
              </a>
              <a title='Instagram de Raymon' href='https://www.instagram.com/raymonreyes72?igsh=MWRicHQyNTdpNWduMA==' target='_blank' rel='noreferrer'>
                <RiInstagramLine className='size-16 text-white bg-gradient-to-tr from-yellow-300 via-red-600 to-purple-700 p-2 rounded-full active:translate-y-1 hover:shadow-lg hover:shadow-violet-500 hover:scale-125 transition' />
              </a>
              <a title='Github de Raymon' href='https://github.com/Ray-Phamton' target='_blank' rel='noreferrer'>
                <RiGithubFill className='size-16 text-white bg-black p-2 rounded-full hover:shadow-lg hover:shadow-violet-500 active:translate-y-1 hover:scale-125 transition' />
              </a>
              <a title='LinkedIn de Raymon' href='https://www.linkedin.com/in/ray-phamton/' target='_blank' rel='noreferrer'>
                <FaLinkedinIn className='size-16 text-white bg-blue-700 p-3 rounded-full hover:shadow-lg active:translate-y-1 hover:shadow-violet-500 hover:scale-125 transition overflow-visible' />
              </a>

            </div>
          </section>
        </section>

      </section>

      <section className='bg-gray-950 h-screen z-10 sm:-mt-[76px] -mt-[64px] border-white '>
        <h1 id='Biografy' className='lg:text-5xl md:text-4xl text-3xl font-extrabold mb-4 text-blue-50'>Biografia</h1>
      </section>

      <section className='bg-black h-screen z-10 sm:-mt-[76px] -mt-[64px] border-white '>
        <h1 id='Study' className='lg:text-5xl md:text-4xl text-3xl font-extrabold mb-4 text-blue-50'>Estudios</h1>
      </section>

      <section className='bg-black h-screen z-10 sm:-mt-[76px] -mt-[64px] border-white '>
        <h1 id='Experience' className='lg:text-5xl md:text-4xl text-3xl font-extrabold mb-4 text-blue-50'>Experiencia</h1>
      </section>

      <section className='bg-black h-screen z-10 sm:-mt-[76px] -mt-[64px] border-white '>
        <h1 id='Projects' className='lg:text-5xl md:text-4xl text-3xl font-extrabold mb-4 text-blue-50'>Proyectos</h1>
      </section>

    </main>
  )
}
