import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import githubSlice from '../redux/github/github.slice'

const actions = { ...githubSlice.actions }

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(actions, dispatch)
}
