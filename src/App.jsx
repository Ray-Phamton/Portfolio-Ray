import { Header } from './components/header'
import { Main } from './components/Main'

function App () {
  return (
    <>
      <Header />
      <Main />
      <footer className='flex justify-end bg-gradient-to-t from-purple-950 via-black to-zinc-900 items-end h-44 w-full pr-8 pb-4 z-0'>

        <h2 className='text-sm mb-4 text-gray-100'> Raymon Reyes. Copyright  © 2025 todos los derechos reservados</h2>

      </footer>
    </>
  )
}

export default App
