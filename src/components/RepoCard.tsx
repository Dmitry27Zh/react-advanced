import { IRepo } from '../models/models'

type RepoCardProps = {
  repo: IRepo
}

const RepoCard = ({ repo }: RepoCardProps) => {
  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
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
    </div>
  )
}

export default RepoCard
