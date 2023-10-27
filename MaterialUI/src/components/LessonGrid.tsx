import React from 'react'
import { Grid , Box, Palette } from '@mui/material'

export const LessonGrid = () => {
  return (
    <Box>
   <Grid container>
    <Grid xs={6} md={4} sx={{ backgroundColor: 'primary.main' }}>8 birimlik yer</Grid>
    <Grid xs={6} md={8} sx={{ backgroundColor: 'success.main' }}>4 birimlik yer</Grid>
    <Grid xs={6} md={10} sx={{ backgroundColor: 'error.main' }}>8 birimlik yer</Grid>
    <Grid xs={6} md={2} sx={{ backgroundColor: 'warning.main' }} >4 birimlik yer</Grid>
   </Grid>
   </Box>
  )
}
