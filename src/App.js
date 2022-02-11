import {
  Box,
  Container,
  Typography,
} from '@mui/material';

import { Footer } from './components/Footer';


export const App = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography align='center'>devandtravel CV</Typography>
        <Footer />
      </Box>
    </Container>
  )
}
