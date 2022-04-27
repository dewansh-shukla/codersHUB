import {
  Modal,
  Box,
  Typography,
  MenuItem,
  Select,
  TextField,
  Button,
} from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import { GiCrossMark } from 'react-icons/gi'

function AddCodeModal({ open, setOpen, data }) {
  const [language, setLanguage] = useState('')
  const [tags, setTags] = useState('')
  const [code, setCode] = useState('')
  const handleClose = () => {
    setOpen(false)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
    var info = {
      id: data._id,
      language: language,
      tags: tags,
      code: code,
    }
    console.log(info)
    axios({ method: 'POST', url: 'http://localhost:4000/home/add', data: info })
  }
  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '60%',
              height: '60%',
              background: 'white',
              color: 'black',
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              border: '2px solid black',
              borderRadius: '5px',
              padding: '10px',
            }}
          >
            <Box
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                fontWeight: 900,
                fontSize: '25px',
                marginLeft: '-20px',
                marginBottom: '10px',
              }}
            >
              <Button
                sx={{
                  color: 'black',
                  fontWeight: 'bolder',
                  fontSize: '25px',
                  padding: 0,
                  margin: 0,
                  border: 0,
                  marginTop: '20px',
                }}
                onClick={handleClose}
              >
                <GiCrossMark />
              </Button>
            </Box>
            <Typography
              sx={{ fontWeight: 900, textAlign: 'center', fontSize: '25px' }}
            >
              Enter Your Code
            </Typography>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Box
                sx={{
                  width: '100%',
                  marginTop: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignContent: 'center',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Typography sx={{ margin: '2px' }}>
                      Select Language =
                    </Typography>
                    <Select
                      labelId='demo-simple-select-label'
                      label='language'
                      value={language}
                      onChange={(e) => {
                        setLanguage(e.target.value)
                      }}
                      sx={{ width: '150px' }}
                    >
                      <MenuItem value='cpp'>C++</MenuItem>
                      <MenuItem value='c'>C</MenuItem>
                      <MenuItem value='python'>Python</MenuItem>
                      <MenuItem value='java'>Java</MenuItem>
                    </Select>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography>Enter Tags = </Typography>
                    <TextField
                      label='tags'
                      variant='outlined'
                      value={tags}
                      onInput={(e) => setTags(e.target.value)}
                    />
                  </Box>
                </Box>
                <Typography sx={{ fontWeight: 900, marginTop: '15px' }}>
                  Paste Your Code
                </Typography>
                <textarea
                  cols='80'
                  rows='8'
                  style={{ width: '80%', marginTop: '5px' }}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
                <Button
                  type='submit'
                  value='submit'
                  sx={{
                    background: 'linear-gradient(45deg,#e523ff,#4548ff)',
                    color: 'white',
                    marginTop: '10px',
                    padding: '10px',
                    width: '20%',
                    borderRadius: '15px',
                  }}
                >
                  <Typography>Submit</Typography>
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default AddCodeModal
