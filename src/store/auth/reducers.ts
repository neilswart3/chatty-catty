import { createSlice } from '@reduxjs/toolkit'
import * as helpers from './helpers'

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState: helpers.initialState,
  reducers: {
    authRequest: helpers.authRequest,
    authFailed: helpers.authFailed,
    authSuccess: helpers.authSuccess,
    authSignOutRequest: helpers.authSignOutRequest,
    authSignOutSuccess: helpers.authSignOutSuccess,
  },
})

export { reducer, actions }
