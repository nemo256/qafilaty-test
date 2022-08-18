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

const shipments = [
  {
    'id': 'qaf-2nbd231k',
    'name': 'alilo chekima',
    'address': 'Sidi belabbes',
    'state': 'new shipment',
    'date': 'xx-xx-xxxx',
  },
  {
    'id': 'qaf-2n1d231k',
    'name': 'alilo chekima',
    'address': 'Sidi belabbes',
    'state': 'new shipment',
    'date': 'xx-xx-xxxx',
  },
  {
    'id': 'qaf-2n2d231k',
    'name': 'alilo chekima',
    'address': 'Sidi belabbes',
    'state': 'new shipment',
    'date': 'xx-xx-xxxx',
  },
  {
    'id': 'qaf-2n3d231k',
    'name': 'alilo chekima',
    'address': 'Sidi belabbes',
    'state': 'new shipment',
    'date': 'xx-xx-xxxx',
  },
  {
    'id': 'qaf-2n4d231k',
    'name': 'alilo chekima',
    'address': 'Sidi belabbes',
    'state': 'new shipment',
    'date': 'xx-xx-xxxx',
  },
  {
    'id': 'qaf-2n5d231k',
    'name': 'alilo chekima',
    'address': 'Sidi belabbes',
    'state': 'new shipment',
    'date': 'xx-xx-xxxx',
  },
  {
    'id': 'qaf-2n6d231k',
    'name': 'alilo chekima',
    'address': 'Sidi belabbes',
    'state': 'new shipment',
    'date': 'xx-xx-xxxx',
  },
  {
    'id': 'qaf-2n7d231k',
    'name': 'alilo chekima',
    'address': 'Sidi belabbes',
    'state': 'new shipment',
    'date': 'xx-xx-xxxx',
  },
  {
    'id': 'qaf-2n8d231k',
    'name': 'alilo chekima',
    'address': 'Sidi belabbes',
    'state': 'new shipment',
    'date': 'xx-xx-xxxx',
  },
]


export default function Main() {
  const [open, setOpen] = React.useState(true)

  return (
    <>
      <Box sx={{ 
          mt: 10, 
          mx: 'auto',
          flexGrow: 1, 
          width: '88%', 
        }}
      >
        <Grid container spacing={{ xs: 4, sm: 4, md: 8 }} columns={{ xs: 1, sm: 4, md: 12 }}>
          {shipments.map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>SX</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
