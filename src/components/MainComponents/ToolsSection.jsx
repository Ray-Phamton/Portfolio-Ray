import ToolsCard from '../Cards/ToolsCard'
import { BiLogoJavascript, BiLogoPhp, BiLogoHtml5, BiLogoTailwindCss, BiLogoReact, BiLogoPython, BiLogoCss3, BiLogoCPlusPlus } from 'react-icons/bi'

export function ToolsSection () {
  return (
    <section id='tools' className=' bg-transparent w-full p-10 rounded-3xl '>
      <header>
        <h2 className='lg:text-4xl md:text-3xl text-2xl  font-extrabold mb-4 text-gray-100 h-16 border-b border-violet-600'><span className='text-violet-600'>➣</span> Herramientas</h2>
      </header>
      <main className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 h-full w-full gap-6 p-2'>
        <a title='React-page' href='https://es.react.dev/' target='_blank' rel='noreferrer'>
          <ToolsCard
            backgroundShadowColors='from-blue-500 via-blue-600 to-blue-900 shadow-sky-700/30 hover:shadow-sky-700/80'
          >
            <BiLogoReact className='size-20 md:size-20 text-cyan-400 group-hover:scale-110 transition' title='ReactJS-logo' />
          </ToolsCard>
        </a>
        <a title='Tailwind-page' href='https://tailwindcss.com/' target='_blank' rel='noreferrer'>
          <ToolsCard
            backgroundShadowColors='from-slate-900 to-gray-950 shadow-gray-950 hover:shadow-black'
          >
            <BiLogoTailwindCss className='size-20 md:size-20 text-cyan-500 to-transparent group-hover:scale-110 transition' title='Tailwindcss-logo' />
          </ToolsCard>
        </a>
        <a title='Javascript-MDN' href='https://developer.mozilla.org/es/docs/Web/JavaScript' target='_blank' rel='noreferrer'>
          <ToolsCard
            backgroundShadowColors='from-yellow-400 to-orange-500 shadow-yellow-400/50 hover:shadow-yellow-300'
            borderColor='border-yellow-300'
            background2='bg-radial-[at_48%_71%] from-black from-8% via-transparent via-8% to-transparent'
          > <BiLogoJavascript className='size-20 md:size-20 text-yellow-300 bg-radial-[at_61%_65%] from-black from-25% via-transparent via-25% to-transparent group-hover:scale-110 transition' title='JavaScript-logo' />
          </ToolsCard>
        </a>
        <a title='HTML5-MDN' href='https://developer.mozilla.org/es/docs/Web/HTML' target='_blank' rel='noreferrer'>
          <ToolsCard
            backgroundShadowColors='from-orange-600 via-70% via-amber-400 to-orange-500 shadow-orange-600/50 hover:shadow-orange-600'
          >
            <BiLogoHtml5 className='size-20 md:size-20 text-orange-500 bg-radial-[at_50%_48%] from-white from-41% via-transparent via-41% to-transparent group-hover:scale-110 transition' title='HTML5-logo' />
          </ToolsCard>
        </a>
        <a title='CSS3-MDN' href='https://developer.mozilla.org/es/docs/Web/CSS' target='_blank' rel='noreferrer'>
          <ToolsCard
            backgroundShadowColors='from-indigo-800 via-60% via-blue-500 to-cyan-400 shadow-blue-700/50 hover:shadow-blue-600'
          >
            <BiLogoCss3 className='size-20 md:size-20 text-blue-700 bg-radial-[at_50%_48%] from-gray-200 from-40% via-transparent via-40% to-transparent group-hover:scale-110 transition ' title='CSS3-logo' />
          </ToolsCard>
        </a>
        <a title='Cplusplus-Microsoft' href='https://learn.microsoft.com/en-us/cpp/cpp/?view=msvc-170' target='_blank' rel='noreferrer'>
          <ToolsCard
            backgroundShadowColors='from-indigo-700 via-60% via-blue-500 to-blue-400 shadow-blue-600/50 hover:shadow-blue-600'
          >
            <BiLogoCPlusPlus className='size-18 md:size-20 text-blue-700 bg-radial-[at_50%_50%] from-gray-200 from-50% via-transparent via-50% to-transparent group-hover:scale-110 transition  ' title='Cplusplus-logo' />
          </ToolsCard>
        </a>
        <a title='Python-page' href='https://www.python.org/' target='_blank' rel='noreferrer'>
          <ToolsCard
            backgroundShadowColors=' from-indigo-600 to-cyan-400 shadow-indigo-600/50 hover:shadow-blue-600'
          >
            <BiLogoPython className='size-20 md:size-20 text-blue-600  group-hover:scale-110 transition' title='Python-logo' />
          </ToolsCard>
        </a>
        <a title='PHP-page' href='https://www.php.net/docs.php' target='_blank' rel='noreferrer'>
          <ToolsCard
            backgroundShadowColors='from-indigo-700 via-60% via-violet-500 to-violet-500 shadow-violet-600/50 hover:shadow-violet-500'
            background2='max-w-58 bg-radial-[at_50%_50%] from-indigo-600/70 from-40% via-transparent via-40% to-transparent group-hover:scale-110 transition'
          >
            <BiLogoPhp className='size-18 md:size-20 text-black group-hover:scale-105 transition ' title='PHP-logo' />
          </ToolsCard>
        </a>
      </main>
    </section>
  )
}
