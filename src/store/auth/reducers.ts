import { createSlice } from '@reduxjs/toolkit'
import * as helpers from './helpers'
import { AuthState } from './types'

const initialState: AuthState = {
  data: {
    uid: null,
    accessToken: null,
    displayName: null,
    email: null,
    photoUrl: null,
  },
  isLoading: false,
  error: null,
}

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authRequest: helpers.authRequest,
    authFailed: helpers.authFailed,
    authSuccess: helpers.authSuccess,
  },
})

export { reducer, actions }
