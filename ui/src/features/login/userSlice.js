import { createSlice } from '@reduxjs/toolkit'

const initialState = { err: "",
                       username: "",
                       password: "",
                       isAuthenticated: false }

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    storeErr(state, action) {
      state.err = action.payload
    },
    storeUser(state, action) {
      state.username = action.payload
    },
    storePass(state, action) {
      state.password = action.payload
    },
    storeAuth(state, action) {
        state.isAuthenticated = action.payload
      },
  },
})

export const { storeAuth, storeErr, storePass, storeUser } = userSlice.actions
export default userSlice.reducer