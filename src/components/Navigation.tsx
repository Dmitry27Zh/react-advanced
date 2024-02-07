import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="flex justify-between items-center gap-4 h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3 className="font-bold">Github Search</h3>
      <div className="flex gap-1 flex-wrap">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  )
}

export default Navigation
