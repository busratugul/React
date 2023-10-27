import React from 'react'
import { Box, Stack, Divider } from '@mui/material'

export const LessonBox = () => {
 return  <Stack 
 direction={"row"} spacing={5} divider={
  <Divider orientation='vertical' flexItem/>
 }>
  <div>Item1</div>
  <div>Item2</div>
  <div>Item3</div>
  <div>Item4</div>
  <div>Item5</div>
</Stack>

  /* <Box
  sx={{
    backgroundColor: "primary.main",
    width: "100px",
    height:"100px",
    color: "#fff",
    padding:"20px",
    '&:hover': {
        backgroundColor: "primary.light"
    }
  }}>
    lessonBox
  </Box> */
}
