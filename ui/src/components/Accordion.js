import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Box, Button, Typography } from '@mui/material'
import { AiOutlineDown } from 'react-icons/ai'
function Accordion({ tag, info, setCurrent }) {
  const [expanded, setExpanded] = useState(false)

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
            }}
          >
            <Typography
              sx={{
                color: 'white',
                width: '100%',
                textAlign: 'center',
                fontWeight: 900,
                letterSpacing: '2px',
              }}
            >
              {tag}
            </Typography>
            <AiOutlineDown
              style={{
                color: 'white !important',
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
                  <Button
                    key={index}
                    sx={{
                      fontWeight: 700,
                      letterSpacing: '2px',
                      color: '#6A5495',
                      fontSize: '20px',
                    }}
                    onClick={() => setCurrent({ ...value })}
                  >
                    {value['codename']}
                  </Button>
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
