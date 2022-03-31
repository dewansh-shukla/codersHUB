import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Grid,
  Switch,
  TextField,
  Typography,
  Button,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import Coding from '../assets/images/coding.svg'
import { motion } from 'framer-motion'

const useStyles = makeStyles(() => ({
  imgContainer: {
    backgroundImage: `url(${Coding})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'auto',
    height: '85vh',
  },
  rightGrid: {
    display: 'flex',
    flexDirection: 'column !important',
    padding: '25px !important',
    background: 'white',
    borderRadius: '20px',
    maxWidth: '400px !important',
    maxHeight: '600px ',
    color: 'black',
    margin: '25px !important',
    minHeight: '620px !important',
    WebkitBoxShadow: `0px 0px 18px 0px rgba(251, 255, 139, 0.8)`,
    MozBoxShadow: `0px 0px 18px 0px rgba(251, 255, 139, 0.8)`,
    boxShadow: `0px 0px 18px 0px rgba(251, 255, 139, 0.8)`,
  },
  signin: {
    marginTop: '15px !important',
    height: '50px',
    borderRadius: '100px !important',
    width: '100%',
  },
}))

function Login() {
  const classes = useStyles()
  const navigate = useNavigate()
  const handlelogin = (e) => {
    e.preventDefault()
    const form = e.target
    const user = {
      username: form[0].value,
      email: form[1].value,
      password: form[2].value,
    }
    console.log(user)
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then(async (res) => {
      res.json()
      navigate('/login')
    })
  }

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Grid
        item
        sx={{ display: { xs: 'none', md: 'block' } }}
        xl={7.5}
        lg={6}
        md={6}
        className={classes.imgContainer}
      ></Grid>
      <Grid
        item
        className={classes.rightGrid}
        xl={4.5}
        lg={4}
        md={4}
        sm={12}
        xs={12}
        component={motion.div}
      >
        <form onSubmit={(event) => handlelogin(event)}>
          <Typography
            variant='h1'
            sx={{
              fontWeight: 900,
              letterSpacing: '3px',
              display: 'inline-block',
              marginTop: '10px',
              fontSize: '30px',
              color: 'purple',
              fontFamily: 'cursive',
            }}
          >
            CodersHUB !!
          </Typography>

          <Typography
            sx={{
              fontWeight: '400',
              marginTop: '20px',
              fontSize: '20px',
              color: 'lightpurple',
            }}
          >
            Welcome!!! Kindly Register
          </Typography>
          <TextField
            label='username'
            variant='standard'
            autoComplete='off'
            sx={{ marginTop: '40px', width: '100%' }}
            required
          />
          <TextField
            id='filled-basic'
            label='Email or Phone number'
            variant='standard'
            autoComplete='off'
            sx={{ width: '100%', marginTop: '20px' }}
            required
          />
          <TextField
            id='filled-password-input'
            label='Password'
            type='password'
            variant='standard'
            autoComplete='off'
            sx={{ marginTop: '20px', width: '100%' }}
            required
          />
          <Container
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 !important',
              marginTop: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Switch />
              <Typography>Remember</Typography>
            </div>
            <a href='#' style={{ textDecoration: 'none' }}>
              Forgot password
            </a>
          </Container>
          <Button
            variant='contained'
            type='submit'
            value='Submit'
            className={classes.signin}
            component={motion.button}
            whileHover={{
              scale: 0.9,
              transition: { duration: 0.8 },
            }}
          >
            Register User
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}

export default Login
