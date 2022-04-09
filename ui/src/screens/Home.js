import React, { useEffect, useState } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import useStyles from './styles'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import UserProfile from '../components/UserProfile'
import CodeList from '../components/CodeList'
import CodeEditor from '../components/CodeEditor'
function Home() {
  const navigate = useNavigate()
  const [data, setData] = useState({})
  useEffect(() => {
    const token = localStorage.getItem('token')
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/home', {
          headers: { Authorization: token },
        })
        setData(response.data)
      } catch (error) {
        if (!error.response.data.isLoggedIn) navigate('/login')
      }
    }
    getData()
    console.log(data)
  }, [])

  const classes = useStyles()
  return (
    <>
      <Container maxWidth className={classes.wrapper}>
        <Typography
          textAlign='center'
          variant='h3'
          sx={{ paddingTop: '30px', fontWeight: '900', fontSize: '40px' }}
        >
          Your Coding Arena
        </Typography>
        <Grid container sx={{ marginTop: '20px', height: '80vh' }}>
          <Grid item xl={0.5} lg={0.5} />
          <Grid
            item
            xl={2.5}
            lg={2.5}
            md={12}
            sm={12}
            xs={12}
            sx={{ padding: '10px' }}
          >
            <CodeList />
          </Grid>
          <Grid item xl={0.5} lg={0.5} />
          <Grid
            item
            xl={5}
            lg={5}
            md={12}
            sm={12}
            xs={12}
            sx={{ padding: '10px' }}
          >
            <CodeEditor />
          </Grid>
          <Grid item xl={0.25} lg={0.25} />
          <Grid
            item
            xl={3}
            lg={3}
            md={12}
            sm={12}
            xs={12}
            sx={{ padding: '20px' }}
          >
            <UserProfile data={data} />
          </Grid>
          <Grid item xl={0.25} lg={0.25} />
        </Grid>
      </Container>
    </>
  )
}

export default Home
