import { PayloadAction } from '@reduxjs/toolkit'

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

export type AuthRequestPayload = PayloadAction<{
  form: 'login' | 'register'
  email: string
  password: string
}>

export type AuthFailedPayload = PayloadAction<{
  error: string
}>

export type AuthSuccessPayload = PayloadAction<{
  data: AuthUser
}>

export enum authTypes {
  AUTH_REQUEST = 'auth/authRequest',
  AUTH_FAILED = 'auth/authFailed',
  AUTH_SUCCESS = 'auth/authSuccess',
}
