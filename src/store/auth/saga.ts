import { call, put, takeLatest } from 'redux-saga/effects'
import { AuthFactory } from 'src/lib/factories'
import { LocalStorageVariables } from 'src/lib/utils'
import { authFailed, authSignOutSuccess } from '.'
import { hydrateRequest } from '../hydrate'
import { AuthRequest, authTypes } from './types'

function* handleAuth({ payload }: AuthRequest): any {
  const { form, email, password } = payload

  let res

  try {
    if (form === 'register') {
      res = yield call(AuthFactory.createUser, { email, password })
    } else {
      res = yield call(AuthFactory.signInUser, { email, password })
    }

    const { accessToken, uid, displayName, email: authEmail, photoUrl } = res

    const data = {
      accessToken,
      uid,
      displayName,
      email: authEmail,
      photoUrl,
    }

    LocalStorageVariables.setUser(data)

    yield put(hydrateRequest())
  } catch (err) {
    const error = err as unknown as Error

    yield put(authFailed({ error: error.message }))
  }
}

function* handleSignOut(): any {
  try {
    yield call(AuthFactory.signOutUser)

    LocalStorageVariables.removeUser()

    yield put(authSignOutSuccess())
  } catch (err) {
    const error = err as unknown as Error

    yield put(authFailed({ error: error.message }))
  }
}

export function* authWatcher() {
  yield takeLatest(authTypes.AUTH_REQUEST, handleAuth)
  yield takeLatest(authTypes.AUTH_SIGNOUT_REQUEST, handleSignOut)
}
