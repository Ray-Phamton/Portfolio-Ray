import { RiTelegram2Fill, RiInstagramLine, RiGithubFill } from 'react-icons/ri'
import { FaLinkedinIn } from 'react-icons/fa'

export function SocialBubbles () {
  return (
    <>
      <a title='Telegram de Raymon' href='https://t.me/Ray_Phamton' target='_blank' rel='noreferrer'>
        <RiTelegram2Fill className='size-16 md:size-20 text-gray-100 bg-linear-to-tr from-sky-600 via-cyan-400 via-40% to-emerald-400 p-3 rounded-full hover:shadow-lg hover:shadow-violet-500 hover:scale-125 active:translate-y-1 transition' />
      </a>
      <a title='Instagram de Raymon' href='https://www.instagram.com/raymonreyes72?igsh=MWRicHQyNTdpNWduMA==' target='_blank' rel='noreferrer'>
        <RiInstagramLine className='size-16 md:size-20 text-gray-100 bg-linear-to-tr from-yellow-300 via-red-600 to-purple-700 p-2 rounded-full active:translate-y-1 hover:shadow-lg hover:shadow-violet-500 hover:scale-125 transition' />
      </a>
      <a title='Github de Raymon' href='https://github.com/Ray-Phamton' target='_blank' rel='noreferrer'>
        <RiGithubFill className='size-16 md:size-20 text-gray-100 bg-black p-2 rounded-full hover:shadow-lg hover:shadow-violet-500 active:translate-y-1 hover:scale-125 transition' />
      </a>
      <a title='LinkedIn de Raymon' href='https://www.linkedin.com/in/ray-phamton/' target='_blank' rel='noreferrer'>
        <FaLinkedinIn className='size-16 md:size-20 text-gray-100 bg-blue-700 p-3 rounded-full hover:shadow-lg active:translate-y-1 hover:shadow-violet-500 hover:scale-125 transition overflow-visible' />
      </a>
    </>
  )
}
