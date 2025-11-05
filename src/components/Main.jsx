import { HeroSection } from './Main-components/HeroSection'
import { AboutMeSection } from './Main-components/AboutMeSection'
import { StudySection } from './Main-components/StudySection'
import { ToolsSection } from './Main-components/ToolsSection'
import { ExperienceSection } from './Main-components/ExperienceSection'

export function Main () {
  return (
    <>
      <main className='bg-purple-950'>
        <HeroSection />
        <section className='flex flex-col items-center justify-center bg-linear-to-b from-purple-950  via-black via-5%  to-zinc-900 z-10 gap-20 pt-20'>

          <AboutMeSection />

          <StudySection />

          <ExperienceSection />

          <ToolsSection />
        </section>

      </main>

    </>

  )
}
