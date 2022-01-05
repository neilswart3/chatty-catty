import { Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { User } from 'firebase/auth'
import { LocalStorageVariables } from 'src/lib/utils'
import { AuthFactory } from 'src/lib/factories'
import Styled from './styles'

const initValues = {
  email: '',
  password: '',
}

interface Props {
  form: 'login' | 'register'
}

interface Values {
  email: string
  password: string
}

const Form: React.FC<Props> = ({ form }) => {
  const [values, setValues] = useState<Values>(initValues)

  const handleChange = (e: any): void => {
    const { name, value } = e.target

    setValues(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault()

    const { email, password } = values

    if (form === 'register') {
      try {
        const user = await AuthFactory.createUser({ email, password })

        console.log('user:', user)

        LocalStorageVariables.setUser(user as User)
      } catch (error) {
        console.log('error:', error)
      }
    } else {
      try {
        const user = await AuthFactory.signInUser({ email, password })

        console.log('user:', user)

        LocalStorageVariables.setUser(user as User)
      } catch (error) {
        console.log('error:', error)
      }
    }
  }

  return (
    <Styled.Form component='form' onSubmit={handleSubmit}>
      <Typography variant='h2' gutterBottom>
        {form === 'login' ? 'Login' : 'Register'}
      </Typography>

      <TextField
        name='email'
        id='email'
        type='email'
        label='Email'
        margin='dense'
        fullWidth
        value={values.email}
        onChange={handleChange}
      />
      <TextField
        name='password'
        id='password'
        type='password'
        label='Password'
        margin='dense'
        fullWidth
        value={values.password}
        onChange={handleChange}
      />
      <br />
      <br />
      <Button variant='contained' type='submit' fullWidth>
        Submit
      </Button>
    </Styled.Form>
  )
}

export default Form
