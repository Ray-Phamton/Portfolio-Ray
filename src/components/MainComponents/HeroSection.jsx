import ParticleBackground from '../BackgroundParticles'
import { SocialBubbles } from '../SocialBubbles'

export function HeroSection () {
  return (
    <section
      className='flex flex-col h-screen w-full z-0 '
    >
      <ParticleBackground />

      <section className='flex flex-col sm:flex-row lg:pl-32 md:pl-20 sm:pl-12  h-full z-10 pt-20'>
        <section className='flex flex-col justify-center sm:items-stretch sm:w-1/2 items-center h-full gap-2 z-10'>
          <img className=' sm:hidden h-52 mask-radial-at-center mask-radial-from-58% mask-radial-to-75% rounded-full object-cover mt-6' src='../../../public/Raymon-perfil.jpeg' alt='image of Raymon Reyes' />
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
          <img className=' lg:h-80 md:h-72 sm:h-60 h-52 mask-radial-at-center mask-radial-from-58% mask-radial-to-75% rounded-full object-cover' src='../../../public/Raymon-perfil.jpeg' alt='image of Raymon Reyes' />
          <div className='flex items-center h-1/5 md:gap-8 sm:gap-2 gap-4 pt-24'>
            <SocialBubbles />
          </div>
        </section>
      </section>

    </section>
  )
}
