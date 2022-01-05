import { Button, ButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import Form from './Form'
import Styled from './styles'

type FormState = 'login' | 'register'

const Auth: React.FC = () => {
  const [form, setForm] = useState<FormState>('login')

  return (
    <Styled.Auth>
      <ButtonGroup variant='contained' color='secondary'>
        <Button onClick={() => setForm('login')}>Login</Button>
        <Button onClick={() => setForm('register')}>Register</Button>
      </ButtonGroup>
      <Form form={form} />
    </Styled.Auth>
  )
}

export default Auth
