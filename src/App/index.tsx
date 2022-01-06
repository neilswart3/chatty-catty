import { useEffect } from 'react'
import { useAppDispatch } from 'src/store/hooks'
import { hydrateRequest } from 'src/store/hydrate'
import { IndexPage } from '../pages'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(hydrateRequest())
  }, [dispatch])

  return <IndexPage />
}

export default App
