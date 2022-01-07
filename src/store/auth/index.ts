import { reducer as authReducer, actions } from './reducers'
import { authWatcher as authSaga } from './saga'

export const {
  authRequest,
  authFailed,
  authSuccess,
  authSignOutRequest,
  authSignOutSuccess,
} = actions

export { authReducer, authSaga }
