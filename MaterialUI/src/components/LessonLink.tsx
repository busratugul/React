import React from 'react'
import { Link, Box } from '@mui/material'

export const LessonLink = () => {
  return (
    <Box>
    <Link href='https://mui.com/material-ui'underline='hover'>
    Websiteme Git...
    </Link>
    <Link href='https://mui.com/material-ui' underline="none">
    Websiteme Git...
    </Link>
    <Link href='https://mui.com/material-ui' color={"error"} variant='body1'>
    Websiteme Git...
    </Link>

    <Link href='https://mui.com/material-ui' color="error" variant='body1' >
    Websiteme Git...
    </Link>
    </Box>
  )
}
