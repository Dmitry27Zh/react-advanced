import { createSlice } from '@reduxjs/toolkit'

const LS_FAVORITE_KEY = 'rfk'

interface InitialState {
  favorites: string[]
}

const initialState: InitialState = {
  favorites: JSON.parse(localStorage.getItem(LS_FAVORITE_KEY) ?? '[]'),
}

const slice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload)
      localStorage.setItem(LS_FAVORITE_KEY, JSON.stringify(state.favorites))
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((favorite) => favorite !== action.payload)
      localStorage.setItem(LS_FAVORITE_KEY, JSON.stringify(state.favorites))
    },
  },
})

export default slice
