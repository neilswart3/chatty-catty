import {
  AuthFailedPayload,
  AuthRequestPayload,
  AuthState,
  AuthSuccessPayload,
} from './types'

export const authRequest = (
  state: AuthState,
  _action: AuthRequestPayload
): AuthState => ({
  ...state,
  error: null,
  isLoading: true,
})

export const authFailed = (
  state: AuthState,
  { payload }: AuthFailedPayload
): AuthState => ({
  ...state,
  isLoading: false,
  error: payload.error,
})

export const authSuccess = (
  state: AuthState,
  { payload }: AuthSuccessPayload
): AuthState => ({
  ...state,
  isLoading: false,
  data: payload.data,
})
