import { AuthUser } from '../auth/types'

export interface HydrateState {
  isLoading: boolean
  error: string | null
}

export type HydrateRequestPayload = {
  data: AuthUser
}

export type HydrateFailedPayload = {
  error: string
}

// export type HydrateSuccessPayload = {
//   data: AuthUser
// }

export enum hydrateTypes {
  HYDRATE_REQUEST = 'hydrate/hydrateRequest',
  HYDRATE_FAILED = 'hydrate/hydrateFailed',
  HYDRATE_SUCCESS = 'hydrate/hydrateSuccess',
}

export interface HydrateRequest {
  type: hydrateTypes.HYDRATE_REQUEST
  // payload: HydrateRequestPayload
}
