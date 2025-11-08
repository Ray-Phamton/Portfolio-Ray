export function StudyCard ({ certification, year, institution, description }) {
  return (
    <div className='relative pl-10 border-l border-zinc-600 pt-8  '>

      <div className='absolute -left-2 top-8 w-4 h-4 rounded-full bg-violet-600 ring-4 ring-zinc-800 shadow-lg shadow-violet-500/80 ' />

      <div className='flex flex-col bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-violet-700/50 transition duration-300 hover:-translate-y-2 '>

        <p className='text-xs font-semibold text-violet-500 mb-1'>{year}</p>
        <h3 className='text-md font-bold text-gray-100 mb-2'>{certification}</h3>

        <p className='text-xs font-medium text-zinc-300'>{institution}</p>

        <p className='text-zinc-400 mt-3 text-xs'>
          {description}
        </p>

      </div>
    </div>

  )
}
