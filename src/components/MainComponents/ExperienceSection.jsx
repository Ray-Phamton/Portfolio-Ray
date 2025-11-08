import { ExperienceCard } from '../Cards/ExperienceCard'
import ContactFormModal from '../HeaderComponents/ContactFormModal'
import { useState } from 'react'

export function ExperienceSection () {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const HandleClick = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <>
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
              <span onClick={HandleClick} className='text-indigo-400 font-semibold hover:underline ml-2'>
                ¡Hablemos de tu proyecto!
              </span>
            </p>
          </div>
        </footer>
      </section>
      <ContactFormModal
        isOpen={isModalOpen} // Tells the modal whether to display// Le dice al modal si debe mostrarse
        onClose={closeModal}
      />
    </>
  )
}
