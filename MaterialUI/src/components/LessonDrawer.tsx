import React from 'react'
import {
    Drawer,Box,IconButton,Typography
} from '@mui/material'
import { useState } from 'react'

import MenuIcon from '@mui/icons-material/Menu'

export const LessonDrawer = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <IconButton 
    size='large' 
    onClick={() => setIsOpen(true)}>
        <MenuIcon/></IconButton>
    <Drawer open={isOpen} onClose={()=> setIsOpen(false)} anchor={"bottom"}>
        <Box width={"15rem"} textAlign={"center"}>
            <Typography 
            component={"div"}
            variant='h6' 
            >Soldaki Panel</Typography>
        </Box>
    </Drawer>
    </>
  )
}
