export interface AuthUser {
  uid: string | null
  accessToken: string | null
  displayName: string | null
  email: string | null
  photoUrl: string | null
}

export interface AuthState {
  data: AuthUser
  isLoading: boolean
  error: string | null
}

export type AuthRequestPayload = {
  form: 'login' | 'register'
  email: string
  password: string
}

export type AuthFailedPayload = {
  error: string
}

export type AuthSuccessPayload = {
  data: AuthUser
}

export enum authTypes {
  AUTH_REQUEST = 'auth/authRequest',
  AUTH_FAILED = 'auth/authFailed',
  AUTH_SUCCESS = 'auth/authSuccess',
  AUTH_SIGNOUT_REQUEST = 'auth/authSignOutRequest',
  AUTH_SIGNOUT_SUCCESS = 'auth/authSignOutSuccess',
}

export interface AuthRequest {
  type: authTypes.AUTH_REQUEST
  payload: AuthRequestPayload
}
