import { useEffect, useState } from 'react'
import { useSearchUsersQuery } from '../redux/github/github.api'
import { useDebounce } from '../hooks/useDebounce'

const HomePage = () => {
  const [search, setSearch] = useState('')
  const { isLoading, isError, data } = useSearchUsersQuery('vasya')
  const debouncedSearch = useDebounce(search)
  useEffect(() => {
    console.log(debouncedSearch)
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
        <div className="absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsum.
        </div>
      </div>
    </div>
  )
}

export default HomePage
