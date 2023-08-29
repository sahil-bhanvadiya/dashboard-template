// ** React Imports
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

const Error401 = () => {
  return (
    <Box className='content-center'>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Box mb={'3rem'}>
          <Typography variant='h1'>401</Typography>
          <Typography variant='h5'>
            Not authorized!
          </Typography>
        </Box>
        <Link passHref href='/'>
          <Button component='a' variant='contained'>
            &larr;
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

Error401.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Error401
