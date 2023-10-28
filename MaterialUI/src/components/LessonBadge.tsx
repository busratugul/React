import React from 'react'
import {
Badge,Stack
} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export const LessonBadge = () => {
  return (
    <Stack direction={'row'} spacing={4}>
        <Badge badgeContent={50} max={10} color='error'>
            <MailIcon/>
        </Badge>
        <Badge badgeContent={30} max={40} color='primary' anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
        }}>
            <MailIcon/>
        </Badge>
    </Stack>
  )
}
