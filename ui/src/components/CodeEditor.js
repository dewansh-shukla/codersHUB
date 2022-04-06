import { Container, Typography } from '@mui/material'
import React from 'react'

function CodeEditor() {
  return (
    <>
      <Container
        sx={{
          width: '100%',
          background: '#F7F5F2',
          height: '100%',
          borderRadius: '15px ',
          padding: '10px',
        }}
      >
        <Typography sx={{ color: 'black' }}>x</Typography>
      </Container>
    </>
  )
}

export default CodeEditor
