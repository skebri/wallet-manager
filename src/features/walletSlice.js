import { createSlice } from '@reduxjs/toolkit'

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    address: '',
    networkId: '',
  },
  reducers: {
    connectWallet: (state, action) => {
      state.address = action.payload.address
    },
  },
})

// Action creators are generated for each case reducer function
export const { connectWallet } = walletSlice.actions

export default walletSlice.reducer
