import styled from '@emotion/styled/macro'
import { Paper } from '@mui/material'

const Auth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

interface FormProps {
  component: string
}

const Form = styled(Paper)<FormProps>`
  max-width: 40%;
  padding: 2rem;
`

const Styled = { Auth, Form }

export default Styled
