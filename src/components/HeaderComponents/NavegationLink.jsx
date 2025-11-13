export function NavegationLink({
  withVignette,
  link,
  section,
  withBgHover,
  onChange,
  currentValue,
}) {
  return (
    <a
      href={link}
      className={`flex items-center justify-center pt-3 ${
        withBgHover ? 'hover:bg-zinc-800/50 active:bg-zinc-800/80' : ''
      } `}
      onClick={() => onChange(!currentValue)}
    >
      <li className=" hover:text-purple-600 xl:text-2xl md:text-xl sm:text-xl text-lg font-medium mb-2 text-gray-100">
        {withVignette ? '●' : ''}{' '}
        <span className="hover:underline active:no-underline">{section}</span>
      </li>
    </a>
  )
}
