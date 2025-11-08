export function NavegationLink ({ withVignette, link, section, withBorder, onChange, currentValue }) {
  return (
    <a
      href={link}
      className={`flex items-center justify-center ${withBorder ? 'border-purple-700 border-b' : ''}  w-full`}
      onClick={() => onChange(!currentValue)}
    >
      <li className=' hover:text-purple-600 lg:text-2xl md:text-xl sm:text-xl text-lg font-medium mb-2 text-gray-100'>
        {withVignette ? '●' : ''} <span className='hover:underline active:no-underline'>{section}</span>
      </li>
    </a>
  )
}
