import { Typography } from '@mui/material'
import React from 'react'
import { useAppSelector } from 'src/store/hooks'
import Styled from './styles'

const IndexPage: React.FC = () => {
  const { data } = useAppSelector(({ auth }) => auth)

  return (
    <Styled.Index>
      {data.uid && data.email && (
        <Typography variant='h3'>Signed in as {data.email}</Typography>
      )}
    </Styled.Index>
  )
}

export default IndexPage
