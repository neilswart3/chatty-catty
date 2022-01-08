import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import NewChatPage from 'src/pages/NewChatPage'
import { useAppDispatch } from 'src/store/hooks'
import { hydrateRequest } from 'src/store/hydrate'
import { ChatPage, IndexPage } from '../pages'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(hydrateRequest())
  }, [dispatch])

  return (
    <Routes>
      <Route path='/chat/:chatid' element={<ChatPage />} />
      <Route path='/new' element={<NewChatPage />} />
      <Route path='/' element={<IndexPage />} />
      <Route path='*' element={<div>Not Found!!!</div>} />
    </Routes>
  )
}

export default App
