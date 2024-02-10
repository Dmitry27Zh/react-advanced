import { MouseEventHandler, useState } from 'react'
import { useActions } from '../hooks/useActions'
import { IRepo } from '../models/models'
import { useAppSelector } from '../hooks/redux'

type RepoCardProps = {
  repo: IRepo
}

const RepoCard = ({ repo }: RepoCardProps) => {
  const { addFavorite, removeFavorite } = useActions()
  const { favorites } = useAppSelector((state) => state.github)
  const [isFavorite, setIsFavorite] = useState(favorites.includes(repo.html_url))
  const handleAddToFavorite: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    addFavorite(repo.html_url)
    setIsFavorite(true)
  }
  const handleRemoveFromFavorite: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    removeFavorite(repo.html_url)
    setIsFavorite(false)
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
        {isFavorite ? (
          <button
            className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
            onClick={handleRemoveFromFavorite}
          >
            Remove
          </button>
        ) : (
          <button
            className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all"
            onClick={handleAddToFavorite}
          >
            Add
          </button>
        )}
      </a>
    </div>
  )
}

export default RepoCard
