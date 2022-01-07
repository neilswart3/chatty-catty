import { Logout } from '@mui/icons-material'
import { authSignOutRequest } from 'src/store/auth'
import { useAppDispatch, useAppSelector } from 'src/store/hooks'
import Styled from './styles'

const SignOut: React.FC = () => {
  const { data } = useAppSelector(({ auth }) => auth)
  const dispatch = useAppDispatch()

  const handleClick = (): void => {
    dispatch(authSignOutRequest())
  }

  return data.accessToken ? (
    <Styled.SignOut onClick={handleClick}>
      <Logout />
    </Styled.SignOut>
  ) : null
}

export default SignOut
