import React, { useState } from 'react'
import {
    Snackbar,
    Button,
    IconButton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'


export const LessonSnackBar = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const action = (
        <React.Fragment>
        <button
        onClick= {handleClose}> Geri Al </button>
        <IconButton>
            <CloseIcon onClick= {handleClose}
            sx={{
                color: "#fff"
            }}/>
        </IconButton></React.Fragment>
        
    )

  return <div>
    <Button color="secondary" size="small" onClick={handleClick}>
        Snackbarı aç
    </Button>
    <Snackbar 
    open={open} 
    message={"HATA MESAJI ALDINIZ!"} 
    action={action}
    autoHideDuration={2000}
    onClose={handleClose}
    anchorOrigin={{vertical:"top",horizontal:"right"}}/>
  </div>
}
