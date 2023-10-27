import { Typography } from '@mui/material';
import React from 'react';

export const LTypography = () => {
  return (
    <div>

      <Typography variant='body1'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem saepe enim minima consequuntur ipsam, deleniti aspernatur porro dicta veniam. Quo numquam voluptatem veritatis voluptates quae blanditiis, tenetur maxime voluptate quos minima obcaecati. Incidunt provident, aspernatur eaque consequuntur facere 
      </Typography>
      <Typography variant='body2'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem saepe enim minima consequuntur ipsam, deleniti aspernatur porro dicta veniam. Quo numquam voluptatem veritatis voluptates quae blanditiis, tenetur maxime voluptate quos minima obcaecati. Incidunt provident, aspernatur eaque consequuntur facere 
      </Typography>
      <Typography variant='h1' component='h4'>H1</Typography>
      {/* görünüm olarak h1 html elementi olarak h4 demektir*/}
      <Typography variant='h2' component="h4" align='right'>align: right</Typography>
      <Typography variant='h3'>H3</Typography>
      <Typography variant='h4'>H4</Typography>
      <Typography variant='h5'>H5</Typography>
      <Typography variant='subtitle1'>Subtitle1</Typography>
      <Typography variant='subtitle2'>Subtitle2</Typography>

      <Typography></Typography>
    </div>
  )
}
