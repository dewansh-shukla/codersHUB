import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Box, Button, Typography, Snackbar, Alert } from '@mui/material'
import { AiOutlineDown, AiFillDelete } from 'react-icons/ai'
import { FiCopy } from 'react-icons/fi'
import axios from 'axios'
function Accordion({ tag, info, setRefresh, refresh }) {
  const [expanded, setExpanded] = useState(false)
  const [open, setOpen] = useState(false)
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }
  const handleDelete = (value) => {
    axios
      .delete(`http://localhost:4000/home/delete/${value.code_id}`)
      .then(() => {
        console.log('deleted')
      })
  }

  return (
    <Box sx={{ width: '100% ' }}>
      <motion.header
        initial={false}
        animate={{ backgroundColor: expanded ? 'transparent' : 'transparent' }}
        onClick={() => setExpanded(!expanded)}
        style={{ cursor: 'pointer' }}
      >
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <Button
            sx={{
              borderRadius: '10px',
              padding: '10px',
              width: '100%',
              background: 'linear-gradient(45deg,#e523ff,#4548ff)',
              marginBottom: '8px',
              marginTop: '8px',
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            <Typography
              sx={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 600,
                letterSpacing: '1px',
                fontFamily: `Poppins, sans-serif`,
              }}
            >
              {tag}
            </Typography>
            <AiOutlineDown
              style={{
                color: 'black',
                fontWeight: 900,
              }}
            />
          </Button>
        </Box>
      </motion.header>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.section
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#151D3B',
            }}
          >
            {info.map((value, index) => {
              return value['tag'] === tag ? (
                <>
                  <Box
                    key={index}
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      key={index}
                      sx={{
                        fontWeight: 700,
                        letterSpacing: '2px',
                        color: '#6A5495',
                        fontSize: '20px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                      }}
                    >
                      <Button
                        sx={{ marginLeft: '10px' }}
                        onClick={() => {
                          navigator.clipboard.writeText(value['codes']['body'])
                          setOpen(true)
                        }}
                      >
                        <FiCopy style={{ fontSize: '20px' }} />
                      </Button>
                      {value['codename']}
                      <Button>
                        <AiFillDelete onClick={() => handleDelete(value)} />
                      </Button>
                    </Box>

                    <Snackbar
                      open={open}
                      autoHideDuration={2000}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                    >
                      <Alert
                        onClose={handleClose}
                        severity='success'
                        sx={{ width: '100%' }}
                      >
                        Code Copied..... Paste In Compiler
                      </Alert>
                    </Snackbar>
                  </Box>
                </>
              ) : (
                <></>
              )
            })}
          </motion.section>
        )}
      </AnimatePresence>
    </Box>
  )
}

export default Accordion
