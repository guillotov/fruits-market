import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '@/lib/store/types/index'

export const initialState: AuthState = {
    isAuth: false,
    username: '',
    password: '',
    uid: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      username: payload
    }),

  },
})

export const {
  login
} = authSlice.actions

export default authSlice.reducer
