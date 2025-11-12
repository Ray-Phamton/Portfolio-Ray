import { RepositoriesList } from '../RepositoriesList'

export function RepoSection() {
  return (
    <section className=" bg-transparent w-full p-10 ">
      <header>
        <h2 className="lg:text-4xl md:text-3xl text-2xl  font-extrabold mb-4 text-gray-100 h-16 border-b border-violet-600">
          <span className="text-violet-600">➣</span> Desarrollos Recientes
        </h2>
      </header>
      <RepositoriesList />
    </section>
  )
}
