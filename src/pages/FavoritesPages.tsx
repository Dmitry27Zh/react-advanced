import { useAppSelector } from '../hooks/redux'

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.github)

  if (favorites.length === 0) {
    return <p className="text-center">No items.</p>
  }

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-full">
      <ul className="list-none">
        {favorites.map((f) => (
          <li key={f}>
            <a href={f}>{f}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FavoritesPage
