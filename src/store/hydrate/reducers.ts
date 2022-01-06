import { createSlice } from '@reduxjs/toolkit'
import * as helpers from './helpers'
import { HydrateState } from './types'

const initialState: HydrateState = {
  isLoading: true,
  error: null,
}

const { actions, reducer } = createSlice({
  name: 'hydrate',
  initialState,
  reducers: {
    hydrateRequest: helpers.hydrateRequest,
    hydrateFailed: helpers.hydrateFailed,
    hydrateSuccess: helpers.hydrateSuccess,
  },
})

export { reducer, actions }
