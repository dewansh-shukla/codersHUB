import { Box, Button, Container, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import Accordion from './Accordion'
import { FcRefresh } from 'react-icons/fc'
import AddCodeModal from './AddCodeModal'
import axios from 'axios'
import './style.css'
function CodeList({ data, info, setInfo, refresh, setRefresh, setCurrent }) {
  const [open, setOpen] = useState(false)
  const [tags, setTags] = useState(new Set())

  useEffect(() => {
    axios.get(`http://localhost:4000/home/getCodes/${data._id}`).then((res) => {
      refreshTags(res.data)
    })
  }, [refresh])

  const refreshTags = async (data) => {
    console.log('called')
    setTags(new Set())
    var arr = []
    data.map((value, index) => {
      arr.push(value['tag'])
    })

    setTimeout(() => {
      setInfo(data)
      setTags(new Set(arr))
    }, 2000)
  }

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
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            margin: '20px 0',
          }}
        >
          <Typography
            sx={{
              fontWeight: 900,
              letterSpacing: '3px',
              fontSize: '25px',
              display: 'flex',
            }}
          >
            Code_List
            <button
              style={{ margin: '5px', borderRadius: '50%' }}
              onClick={() => setOpen(true)}
            >
              +
            </button>
            <AddCodeModal
              open={open}
              setOpen={setOpen}
              data={data}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          </Typography>
          <button
            style={{
              background: 'transparent',
              border: 0,
              fontSize: '25px',
              marginTop: '10px',
            }}
            onClick={() => setRefresh(!refresh)}
          >
            <FcRefresh />
          </button>
        </Box>
        {[...tags].map((value, index) => {
          return (
            <Accordion
              key={index}
              tag={value}
              info={info}
              setCurrent={setCurrent}
              setRefresh={setRefresh}
              refresh={refresh}
            />
          )
        })}
      </Container>
    </>
  )
}

export default CodeList
