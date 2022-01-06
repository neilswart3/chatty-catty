import { call, put, takeEvery } from 'redux-saga/effects'
import { AuthFactory } from 'src/lib/factories'
import { LocalStorageVariables } from 'src/lib/utils'
import { authFailed } from '.'
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

export function* authWatcher() {
  yield takeEvery(authTypes.AUTH_REQUEST, handleAuth)
}
