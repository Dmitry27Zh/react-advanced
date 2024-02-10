import { configureStore } from '@reduxjs/toolkit'
import { githubApi } from './github/github.api'
import { setupListeners } from '@reduxjs/toolkit/query'
import githubSlice from './github/github.slice'

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    github: githubSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(githubApi.middleware)
  },
})

setupListeners(store.dispatch)
