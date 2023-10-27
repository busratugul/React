import React from 'react'
import { 
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button
} from '@mui/material'

export const LessonCard = () => {
  return (
    <Card sx={{
        width: "350px",
        position: "cover"
    }}>
        <CardMedia 
        component={"img"}
        image='https://source.unsplash.com/random'
        height={"150px"}
        />
        <CardContent sx={{p:3}}>
            <Typography variant='h5' component="div">
                Başlığım
            </Typography>
            <Typography variant='body2' component="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, nulla. Recusandae dicta optio magnam rem repudiandae, consequuntur assumenda ut neque!
            </Typography>
        </CardContent>
        <CardActions sx={{justifyContent:"space-between",p:3}}>
            <Button>Kaydet</Button>
            <Button color='error'>Temizle</Button>

        </CardActions>
    </Card>
  )
}
