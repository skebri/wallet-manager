import { configureStore } from '@reduxjs/toolkit'
import wallet from '../features/walletSlice'

export default configureStore({
  reducer: {
    wallet
  },
})
