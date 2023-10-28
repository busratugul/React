import React from 'react'
import {
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon

} from '@mui/material'
import CopyIcon from '@mui/icons-material/FileCopyOutlined'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Print'
import EditIcon from '@mui/icons-material/Edit'

export const LessonSpeedDial = () => {
  return ( <SpeedDial ariaLabel='Navigation' icon={<SpeedDialIcon openIcon={<EditIcon/>}/>}>
        <SpeedDialAction icon={<CopyIcon/>} tooltipTitle={"Copy"} tooltipOpen={false}/>
        <SpeedDialAction icon={<PrintIcon/>} tooltipTitle={"Print"} tooltipOpen={true}/>
        <SpeedDialAction icon={<ShareIcon/>} tooltipTitle={"Share"} tooltipOpen={true}/>
    </SpeedDial>
  )
}
