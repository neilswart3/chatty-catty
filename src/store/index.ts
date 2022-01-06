import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { authReducer } from './auth'
import { hydrateReducer } from './hydrate'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    auth: authReducer,
    hydrate: hydrateReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
