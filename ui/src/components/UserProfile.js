import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function UserProfile({ data }) {
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '100px',
            height: '100px',
            background: 'linear-gradient(45deg,#e523ff,#4548ff)',
            position: 'absolute',
            zIndex: '2',
            borderRadius: '50%',
          }}
        ></Box>
        <Box
          sx={{
            width: '100%',
            color: 'black',
            height: '20em',
            background: '#F7F5F2',
            zIndex: '1',
            marginTop: '50px',
            borderRadius: '15px',
            padding: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              marginTop: '30px',
              fontWeight: 900,
              fontSize: '25px',
              letterSpacing: '2px',
            }}
          >
            @_{data.username}
          </Typography>
          <Typography>maid_id:{data.email}</Typography>
        </Box>
      </Container>
    </>
  )
}

export default UserProfile
