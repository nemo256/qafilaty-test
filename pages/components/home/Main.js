import * as React from 'react'
import {
  Box,
  Alert,
  IconButton,
  Collapse,
  Divider,
  Button,
  Paper,
  Grid,
  Stack,
  Modal,
  Typography,
} from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import CheckIcon from '@mui/icons-material/Check'


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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height: '70%',
  bgcolor: 'white',
  border: '2px solid #EEEEEE',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};


export default function Main() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button 
        sx={{
          width: { xs: '90%', sm: '95%', md: 'auto' },
          ml: 2,
          mt: { xs: 2, sm: 3, md: 4 },
          backgroundColor: '#7D749E',
          '&:hover': {
            backgroundColor: '#884FAA'
          }
        }}
        size='large'
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleOpen}
      >
        Add shipment
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Stack direction='column' spacing={2} height='100%' justifyContent='space-between'>
            <Stack direction='column' spacing={2}>
              <Stack direction='row' spacing={1}>
                <AddIcon /> 
                <Typography>
                  Add Shipment
                </Typography>
              </Stack>
              <Divider />
            </Stack>
            <Alert severity="warning">
              <Typography fontSize={9}>
                Note: You must have an email address
              </Typography>
            </Alert>
            <Stack direction='column' spacing={2}>
              <Divider />
              <Stack direction='row' spacing={2} height={36}>
                <Button 
                  size='small'
                  sx={{
                    backgroundColor: '#7D749E',
                    '&:hover': {
                      backgroundColor: '#884FAA'
                    }
                  }}
                  variant='contained'
                  startIcon={<CheckIcon />}
                >
                  Confirm
                </Button>
                <Button 
                  size='small'
                  sx={{
                    border: '4px solid',
                    color: '#7D749E',
                    borderColor: '#7D749E',
                    backgroundColor: '#FFFFFF',
                    '&:hover': {
                      border: '4px solid',
                      color: '#7D749E',
                      borderColor: '#7D749E',
                      backgroundColor: '#DDDDDD',
                    }
                  }}
                  variant='outlined'
                  startIcon={<CloseIcon />}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Modal>
      <Box sx={{ 
          mt: {xs: 4, sm: 8, md: 10},
          mx: 'auto',
          flexGrow: 1, 
          width: '97%',
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
