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


const Error500 = () => {
  return (
    <Box className='content-center'>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Box mb={'3rem'}>
          <Typography variant='h1'>500</Typography>
          <Typography variant='h5'>
            Internal server error!
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

Error500.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Error500
