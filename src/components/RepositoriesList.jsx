import { useState, useEffect } from 'react'
import { FaStar, FaGithub } from 'react-icons/fa'

export function RepositoriesList() {
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const username = 'ray-phamton'
  const perPage = 5

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?page=1&per_page=${perPage}&sort=pushed&direction=desc`
        )

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`)
        }

        const data = await response.json()

        setRepos(data)
      } catch (err) {
        console.error('Error al hacer fetch:', err)
        setError('Error al cargar los datos.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchRepositories()
  }, [])

  if (isLoading) {
    return (
      <div className="p-4 text-center text-gray-600">
        Cargando los repositorios...
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-4 text-center bg-red-100 text-red-700 border border-red-400">
        {error}
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 pt-4 ">
      {repos.length > 0 ? (
        repos.map((repo) => (
          <div
            key={repo.id}
            className="min-w-80 xl:min-w-[400px] bg-zinc-800 rounded-lg shadow-lg shadow-violet-700/50 hover:shadow-violet-700 transition duration-300 hover:-translate-y-2 overflow-hidden"
          >
            <div className="p-5 ">
              <h3 className="text-xl font-semibold text-violet-500 w-1/2 mb-2">
                {repo.name}
              </h3>

              <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                {repo.description || 'Sin descripción.'}
              </p>

              <div className="flex flex-col xl:flex-row items-start xl:items-center text-gray-500 text-sm">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 text-xl"> </FaStar>
                  <span className="pl-1 pr-4 text-gray-200">
                    {repo.stargazers_count} Estrellas
                  </span>

                  <span className="px-2 py-0.5 bg-zinc-700 text-gray-200 rounded-full">
                    {repo.language || 'Sin especificar'}
                  </span>
                </div>

                <div className="flex items-center text-gray-200 xl:pl-4 mt-1">
                  <span className="mr-1">👁️</span>
                  <span className="pr-4">
                    {repo.watchers_count} observadores
                  </span>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="size-6 text-zinc-300 " />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center col-span-full text-gray-500">
          No se encontraron repositorios públicos.
        </div>
      )}
    </div>
  )
}
