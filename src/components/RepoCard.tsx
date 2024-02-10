import { MouseEventHandler } from 'react'
import { useActions } from '../hooks/useActions'
import { IRepo } from '../models/models'

type RepoCardProps = {
  repo: IRepo
}

const RepoCard = ({ repo }: RepoCardProps) => {
  const { addFavorite } = useActions()
  const addToFavorite: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    addFavorite(repo.html_url)
  }

  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          <span>
            Forks: <b>{repo.forks}</b>
          </span>
          <span>
            Watchers: <b>{repo.watchers}</b>
          </span>
        </p>
        <p className="text-sm font-thin">{repo.description}</p>
        <button className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all" onClick={addToFavorite}>
          Add
        </button>
      </a>
    </div>
  )
}

export default RepoCard
