import { PayloadAction } from '@reduxjs/toolkit'

import {
  HydrateFailedPayload,
  // HydrateRequestPayload,
  HydrateState,
} from './types'

export const hydrateRequest = (
  state: HydrateState
  // _action: PayloadAction<HydrateRequestPayload>
): HydrateState => ({
  ...state,
  error: null,
  isLoading: true,
})

export const hydrateFailed = (
  state: HydrateState,
  { payload }: PayloadAction<HydrateFailedPayload>
): HydrateState => ({
  ...state,
  isLoading: false,
  error: payload.error,
})

export const hydrateSuccess = (
  state: HydrateState
  // { payload }: PayloadAction<AuthSuccessPayload>
): HydrateState => ({
  ...state,
  isLoading: false,
})
