import { Grid } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import LandingLogo from '../assets/images/landingphoto.jpg'

function LandingPage() {
  const navigate = useNavigate()
  return (
    <>
      <Wrapper>
        <Nav>
          <NavContainer>
            <Logo>
              Coders<span style={{ color: 'yellow' }}>Hub</span>
            </Logo>
            <NavItem>
              <NavLink href='#'>Login</NavLink>
              <NavLink href='#'>Login</NavLink>
              <NavLink href='#'>Login</NavLink>
              <Btn>Sign In</Btn>
            </NavItem>
          </NavContainer>
        </Nav>
        <div
          style={{
            width: '80%',
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <Grid
            container
            sx={{
              color: 'white',
              marginTop: '10px',
              height: '100%',
            }}
          >
            <Grid item xl={8}>
              <div>
                <p
                  style={{
                    fontSize: '4em',
                    padding: 0,
                    margin: 0,
                    marginTop: '15%',
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontFamily: 'Poppins',
                  }}
                >
                  The Ultimatum Coding Platform
                </p>
                <p
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Poppins,sanserif',
                    fontSize: '1em',
                  }}
                >
                  Be the ultimate coders .Save and run your code here for free
                </p>
                <div
                  style={{
                    display: 'flex',
                    width: '100% ',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '80%',
                      display: 'flex',
                      justifyContent: 'space-evenly',
                      marginTop: '10%',
                    }}
                  >
                    <Btn2 color='yellow' onClick={() => navigate('/')}>
                      SignUp
                    </Btn2>
                    <Btn2 color='white' onClick={() => navigate('/login')}>
                      Login
                    </Btn2>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xl={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src={LandingLogo}
                alt='logo here'
                style={{ width: '100%' }}
              />
            </Grid>
          </Grid>
        </div>
      </Wrapper>
    </>
  )
}

export default LandingPage

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Poppins, sans-serif;
`
const Nav = styled.nav`
  width: 80%;
  color: white;
  background: #000000;
  display: 'flex';
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  padding: 25px;
`
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
`
const NavItem = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  align-items: center;
`
const NavLink = styled.a`
  text-decoration: none;
  color: white;
`
const Btn = styled.button`
  color: yellow;
  width: 40%;
  background: transparent;
  padding: 10px 10px 10px 10px;
  border: 1px solid yellow;
  border-radius: 30px;
  font-weight: 900;
  &:hover {
    cursor: pointer;

    border: 1px solid white;
  }
`

const Logo = styled.h1`
  letter-spacing: 4px;
  font-size: 30px;
`
const Btn2 = styled.button`
  background: ${(props) => props.color || 'yellow'};
  &:hover {
    cursor: pointer;
    background: ${(props) => (props.color === 'yellow' ? 'white' : 'yellow')};
  }
  width: 40%;
  color: black;
  padding: 15px 40px 15px 40px;
  font-weight: 900;
  border-radius: 30px;
  font-size: 15px;
`
