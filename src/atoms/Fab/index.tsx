import Styled from './styles'
import { Chat } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const icons = {
  chat: <Chat />,
}

interface Props {
  icon: 'chat'
  path: string
}

const Fab: React.FC<Props> = ({ icon, path }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(path)
  }

  return (
    <Styled.Fab color='primary' onClick={handleClick}>
      {icons[icon]}
    </Styled.Fab>
  )
}

export default Fab
