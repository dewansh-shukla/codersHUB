import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Grid,
  Switch,
  TextField,
  Typography,
  Button,
  Snackbar,
  Alert,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import Coding from '../assets/images/coding.svg'
import axios from 'axios'

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
  },
  signin: {
    marginTop: '15px !important',
    height: '50px',
    borderRadius: '100px !important',
    width: '100%',
  },
}))

function Login() {
  const [invalidUser, setInvalidUser] = useState(false)
  const classes = useStyles()
  const navigate = useNavigate()
  const handlelogin = (e) => {
    e.preventDefault()
    const form = e.target
    const user = {
      username: form[0].value,
      password: form[1].value,
    }

    fetch('/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('token', data.token)
        if (data.message === 'Success') {
          navigate('/home')
        } else setInvalidUser(true)
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
        sm={0}
        xs={0}
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
      >
        <form onSubmit={(event) => handlelogin(event)}>
          <Typography
            variant='h6'
            sx={{
              fontWeight: '900',
              letterSpacing: '3px',
              display: 'inline-block',
              marginTop: '10px',

              fontSize: '25px',
            }}
          >
            CodersHUB
          </Typography>
          <Typography
            sx={{
              fontWeight: '200',
              marginTop: '20px',

              fontSize: '20px',
            }}
          >
            Nice to see you again !!!
          </Typography>
          <TextField
            id='filled-basic'
            label='User_Name'
            variant='filled'
            sx={{ marginTop: '40px', width: '100%' }}
            required
          />
          <TextField
            id='filled-password-input'
            label='Password'
            type='password'
            autoComplete='current-password'
            variant='filled'
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
          >
            Sign in
          </Button>
          <Snackbar
            open={invalidUser}
            autoHideDuration={3000}
            onClose={() => setInvalidUser(false)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert severity='error'>Enter valid Login Credentials </Alert>
          </Snackbar>
        </form>
      </Grid>
    </Grid>
  )
}

export default Login
