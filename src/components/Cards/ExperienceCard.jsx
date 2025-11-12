export function ExperienceCard({
  role,
  team,
  timeframe,
  icon,
  achievements,
  children,
}) {
  return (
    <div className="lg:w-2/5 bg-zinc-700 rounded-2xl shadow-xl hover:shadow-violet-700/50 transition duration-300 hover:-translate-y-2 pl-10 pt-4 mt-8 lg:mt-0">
      <div className="flex flex-rows">
        <div className="w-3/4">
          <h3 className=" text-xl font-bold text-violet-400">{role}</h3>
          <p className="text-md text-gray-400 mt-1 italic">
            {team} | {timeframe}
          </p>
        </div>
        <div>
          <span className="text-4xl">{icon}</span>
        </div>
      </div>
      <div className="mt-6 grow mr-10 lg:mr-8">
        <p className="font-semibold lg:text-lg text-gray-300 mb-2">
          🎯 Logros Destacados:
        </p>
        <ul className="list-disc list-inside text-sm md:text-md text-gray-300 space-y-1 mb-6">
          {achievements.map((achievements, index) => (
            <li key={index}>{achievements}</li>
          ))}
        </ul>
        {children}
      </div>
    </div>
  )
}
