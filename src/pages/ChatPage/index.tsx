import { Typography } from '@mui/material'
import { SignOut } from 'src/atoms'
import Styled from './styles'

const ChatPage: React.FC = () => {
  return (
    <Styled.Chat>
      <SignOut />
      <Typography variant='h4'>Chat component</Typography>
    </Styled.Chat>
  )
}

export default ChatPage
