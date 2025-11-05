const ToolsCard = ({
  background2,
  backgroundShadowColors,
  children
}) => {
  const backgroundClass = `bg-linear-to-tr ${backgroundShadowColors}`

  const backgroundUtility = `flex size-16 ${background2}`

  return (
    <div
      className={`flex justify-center items-center flex-col shadow-xl transition duration-300 hover:-translate-y-2 h-24 rounded-3xl overflow-hidden group ${backgroundClass}`}
    >

      <div className='flex items-center justify-center  h-full w-full'>
        <div className={`flex items-center justify-center h-full w-full ${backgroundUtility}`}>
          {children}

        </div>
      </div>
    </div>

  )
}

export default ToolsCard
