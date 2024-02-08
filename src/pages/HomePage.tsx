import { useSearchUsersQuery } from '../redux/github/github.api'

const HomePage = () => {
  const { isLoading, isError, data } = useSearchUsersQuery('vasya')

  return <div>Home</div>
}

export default HomePage
