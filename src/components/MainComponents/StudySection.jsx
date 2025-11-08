import { StudyCard } from '../Cards/StudyCard'

export function StudySection () {
  return (
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

  )
}
