const SkillCard = ({
  name,
  background2,
  svgPath,
  iconTitle,
  backgroundShadowColors,
  textColor,
  borderColor,
  animationPositionSize,
  progressBarColors,
  progress = 0
}) => {
  const backgroundClass = `bg-linear-to-tr ${backgroundShadowColors}`

  const svgClass = ` ${textColor} ${animationPositionSize}`
  const borderClass = `${borderColor}`

  const progressClass = `bg-linear-to-tr ${progressBarColors} h-2 rounded-full transition-all duration-500 ease-out`

  const safeProgress = Math.max(0, Math.min(100, progress))

  const backgroundUtility = `flex size-16 ${background2}`

  return (
    <div
      className={`relative flex justify-end items-center flex-col shadow-xl transition duration-300 hover:-translate-y-2 h-24 rounded-3xl overflow-hidden group ${backgroundClass}`}
    >

      <div className='flex items-center justify-center  h-2/3 w-full'>
        <div className='flex justify-center w-2/3 pl-14'>

          <h3 className='lg:text-3xl md:text-2xl text-xl font-bold text-gray-100'>
            {name}
          </h3>
        </div>
        <div className={`h-full w-16 ${backgroundUtility}`}>

          <svg
            className={svgClass}
            role='img'
            fill='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>{iconTitle}</title>
            <path d={svgPath} />
          </svg>

        </div>
      </div>

      <div className='flex justify-center w-full h-2/6 pb-4'>
        <div
          role='progressbar'
          aria-valuenow={safeProgress}
          aria-valuemin='0'
          aria-valuemax='100'
          className={`w-9/12 bg-transparent ${borderClass} border-2 rounded-full h-4 overflow-hidden p-0.5`}
        >
          <div
            className={progressClass}
            style={{ width: `${safeProgress}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default SkillCard
