import { CircularProgress } from '@mui/material'
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
  const { isLoading } = useAppSelector(({ hydrate }) => hydrate)

  return (
    <Styled.GeneralLayout className={className}>
      {isLoading ? <CircularProgress /> : children}
    </Styled.GeneralLayout>
  )
}

export default GeneralLayout
