import { takeEvery } from 'redux-saga/effects'
import { authTypes } from './types'

function* handleAuth() {
  console.log('handleAuth')

  yield null
}

export function* authWatcher() {
  yield takeEvery(authTypes.AUTH_REQUEST, handleAuth)
}
