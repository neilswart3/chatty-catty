import { all, fork } from 'redux-saga/effects'
import { authSaga } from './auth'
import { hydrateSaga } from './hydrate'

function* rootSaga() {
  yield all([fork(authSaga), fork(hydrateSaga)])
}

export default rootSaga
