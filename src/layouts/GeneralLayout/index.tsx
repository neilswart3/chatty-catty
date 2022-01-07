import { CircularProgress } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'src/store/hooks'
import Styled from './styles'

interface Props {
  children: React.ReactNode
  className?: string
}

const GeneralLayout: React.FC<Props> = ({
  children,
  className = 'GeneralLayout',
}) => {
  const {
    data: authData,
    isLoading: isAuthLoading,
    error: authError,
  } = useAppSelector(({ auth }) => auth)
  const { isLoading: isHydrateLoading } = useAppSelector(
    ({ hydrate }) => hydrate
  )
  const navigate = useNavigate()

  useEffect(() => {
    if (!isHydrateLoading && !authData.accessToken) {
      navigate('/')
    }
  }, [authData, isHydrateLoading, navigate])

  return (
    <Styled.GeneralLayout className={className}>
      {isHydrateLoading ? <CircularProgress /> : children}
    </Styled.GeneralLayout>
  )
}

export default GeneralLayout
