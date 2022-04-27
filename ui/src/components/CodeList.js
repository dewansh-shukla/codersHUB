import { Button, Container, Typography } from '@mui/material'
import { useState } from 'react'
import Accordion from './Accordion'
import AddCodeModal from './AddCodeModal'
import './style.css'
function CodeList({ data }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Container
        maxWidth
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxHeight: '500px',
          minHeight: '100%',
          overflowY: 'scroll',
          background: '#F7F5F2',
          color: 'black',
          borderRadius: '20px',
          border: '5px solid lightcyan',
        }}
        className='xyz'
      >
        <Typography
          sx={{
            fontWeight: 900,
            letterSpacing: '3px',
            fontSize: '25px',
            marginTop: '25px',
            marginBottom: '25px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Code_List
          <button
            style={{ margin: '5px', borderRadius: '50%' }}
            onClick={() => setOpen(true)}
          >
            +
          </button>
          <AddCodeModal open={open} setOpen={setOpen} data={data} />
        </Typography>
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
      </Container>
    </>
  )
}

export default CodeList
