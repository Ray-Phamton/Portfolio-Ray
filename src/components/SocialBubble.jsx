export function SocialBubble ({ destination, title, backgroundColor, children }) {
  return (
    <a
      className={`flex items-center justify-center size-16 rounded-full ${backgroundColor} hover:scale-125 transition`}
      href={destination} title={title} target='_blank' rel='noreferrer'
    >
      {children}

    </a>
  )
}
