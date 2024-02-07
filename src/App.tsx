import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FavoritesPage from './pages/FavoritesPages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  )
}

export default App
