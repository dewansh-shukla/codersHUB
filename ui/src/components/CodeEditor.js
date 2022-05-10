import { Container, Typography, Box, Button } from '@mui/material'
import Select from 'react-select'
import Editor from '@monaco-editor/react'
import React, { useState } from 'react'
import './style.css'
import Axios from 'axios'
function CodeEditor({}) {
  const languages = [
    { value: 'c', label: 'C' },
    { value: 'cpp', label: 'C++' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
  ]

  const [lang, setLang] = useState('cpp')
  const [code, setCode] = useState(``)
  const [font, setFont] = useState(20)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(true)
  const options = {
    fontSize: font,
  }
  function compile() {
    setLoading(true)
    if (code === ``) {
      return
    }
    // Post request to compile endpoint
    Axios.post(`http://localhost:4000/home`, {
      code: code,
      language: lang,
      input: input,
    })
      .then((res) => {
        setOutput(res.data.output)
      })
      .then(() => {
        setLoading(false)
      })
  }
  function clearOutput() {
    setOutput('')
  }

  return (
    <>
      <Container
        sx={{
          width: '100%',
          maxHeight: '500px',
          minHeight: '100%',
          background: '#F7F5F2',
          height: '100%',
          borderRadius: '15px ',
          padding: '8px',
          overflowY: 'scroll',
        }}
        className='xyz'
      >
        {/* Mini - Navbar */}

        <Box
          sx={{
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            color: 'black',
            width: '100%',
            justifyContent: 'space-around',
            marginTop: '10px',
            marginBottom: '10px',
          }}
        >
          <Select
            options={languages}
            value={lang}
            onChange={(e) => setLang(e.value)}
            placeholder={lang}
          />
          <Box sx={{ display: 'flex' }}>
            <label style={{ color: 'black' }}>
              <Typography>Font Size</Typography>
            </label>
            <input
              type='range'
              min='18'
              max='30'
              value={font}
              step='2'
              onChange={(e) => {
                setFont(e.target.value)
              }}
            />
          </Box>
        </Box>

        {/* Compiler */}
        <Box sx={{ width: '100%', marginTop: '10px' }}>
          {/* Editor */}
          <Box sx={{ width: '100%' }}>
            <Editor
              options={options}
              height='300px'
              theme='vs-dark'
              width='100%'
              language={lang}
              defaultLanguage='cpp'
              defaultValue={'code here'}
              onChange={(value) => {
                setCode(value)
              }}
            />
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                onClick={() => compile()}
                sx={{
                  background: 'linear-gradient(45deg,#e523ff,#4548ff)',
                  color: 'white',
                  marginTop: '5px',
                  borderRadius: '10px',
                }}
              >
                <Typography> Run</Typography>
              </Button>
            </Box>
          </Box>

          {/* Input and Output     */}

          <Box sx={{ width: '100%', flexDirection: 'column', color: 'black' }}>
            <Typography>Input:</Typography>
            <Box sx={{ width: '100%' }}>
              <textarea
                onChange={(e) => setInput(e.target.value)}
                style={{ width: '100%', height: '100px', borderRadius: '10px' }}
              />
            </Box>
            <Typography>Output:</Typography>
            {loading ? (
              <Box>
                <Typography>Loading...</Typography>
              </Box>
            ) : (
              <Box sx={{ width: '100%' }}>
                <Typography sx={{ width: '100%' }}>{output}</Typography>

                <Button
                  sx={{
                    background: 'linear-gradient(45deg,#e523ff,#4548ff)',
                    color: 'white',
                    marginTop: '5px',
                    borderRadius: '10px',
                  }}
                  onClick={() => {
                    clearOutput()
                  }}
                >
                  Clear
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default CodeEditor
