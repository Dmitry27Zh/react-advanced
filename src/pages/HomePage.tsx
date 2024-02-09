import { useEffect, useState } from 'react'
import { useSearchUsersQuery } from '../redux/github/github.api'
import { useDebounce } from '../hooks/useDebounce'

const HomePage = () => {
  const [search, setSearch] = useState('')
  const [dropdown, setDropdown] = useState(false)
  const debouncedSearch = useDebounce(search)
  const { isLoading, isError, data } = useSearchUsersQuery(debouncedSearch, {
    skip: debouncedSearch.length === 0,
    refetchOnFocus: true,
  })
  useEffect(() => {
    setDropdown(debouncedSearch.trim().length > 0)
  }, [debouncedSearch])

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-full">
      {isError && <p className="text-center text-red-600">Something went wrong...</p>}
      <div className="relative w-[560px]">
        <input
          className="border py-2 px-4 w-full h-[42px] mb-2"
          type="text"
          placeholder="Search for Github username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {dropdown && (
          <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
            {isLoading && 'Loading...'}
            {data?.map((user) => (
              <li
                key={user.id}
                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default HomePage
