import { CircularProgress } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Fab } from 'src/atoms'
import { Auth } from 'src/components'
import { useAppSelector } from 'src/store/hooks'
import Styled from './styles'

interface Props {
  children: React.ReactNode
  className?: string
}

const GeneralLayout: React.FC<Props> = props => {
  const { children, className = 'GeneralLayout' } = props
  const navigate = useNavigate()
  const { data: authData, isLoading: isAuthLoading } = useAppSelector(
    ({ auth }) => auth
  )
  const { isLoading: isHydrateLoading } = useAppSelector(
    ({ hydrate }) => hydrate
  )

  useEffect(() => {
    if (!isHydrateLoading && !authData.accessToken) {
      navigate('/')
    }
  }, [authData, isHydrateLoading, navigate])

  if (isHydrateLoading || isAuthLoading) {
    return (
      <Styled.GeneralLayout className={className}>
        <CircularProgress />
      </Styled.GeneralLayout>
    )
  }

  return (
    <Styled.GeneralLayout className={className}>
      {authData.accessToken ? children : <Auth />}
      {authData.accessToken && <Fab path='/new' icon='chat' />}
    </Styled.GeneralLayout>
  )
}

export default GeneralLayout
