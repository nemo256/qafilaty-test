import * as React from 'react'
import {
  Box,
  Alert,
  IconButton,
  Collapse,
  Button,
  Paper,
  Grid
} from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Main() {
  const [open, setOpen] = React.useState(true)

  return (
    <>
      <Box sx={{ width: '88%', position: 'fixed' }}>
        <Collapse in={open}>
          <Alert
            severity='warning'
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Clients without an account cannot access this page.
          </Alert>
        </Collapse>
      </Box>
      <Box sx={{ mt: 12, flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>xs=2</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
