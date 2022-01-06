import { put, takeEvery } from 'redux-saga/effects'
import { LocalStorageVariables } from 'src/lib/utils'
import { hydrateFailed, hydrateSuccess } from '.'
import { authSuccess } from '../auth'
import { HydrateRequest, hydrateTypes } from './types'

function* handleHydrate(): any {
  const data = LocalStorageVariables.getUser()

  try {
    if (data) {
      yield put(authSuccess({ data }))
      yield put(hydrateSuccess())
    } else {
      yield put(hydrateFailed({ error: 'Hydrate Failed' }))
    }
  } catch (err) {
    const error = err as unknown as Error
    yield put(hydrateFailed({ error: error.message }))
  }
}

export function* hydrateWatcher() {
  yield takeEvery(hydrateTypes.HYDRATE_REQUEST, handleHydrate)
}
