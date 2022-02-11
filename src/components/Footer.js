import { Typography } from '@mui/material';


export const Footer = () => {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'devandtravel '}
      {new Date().getFullYear()}
    </Typography>
  )
}
