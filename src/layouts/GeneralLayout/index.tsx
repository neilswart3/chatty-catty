import Styled from './styles'

interface Props {
  children: React.ReactNode
  className?: string
}

const GeneralLayout: React.FC<Props> = ({
  children,
  className = 'GeneralLayout',
}) => {
  return (
    <Styled.GeneralLayout className={className}>
      {children}
    </Styled.GeneralLayout>
  )
}

export default GeneralLayout
