import * as React from 'react'
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Divider,
  Modal,
  IconButton,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { red } from '@mui/material/colors';
import { experimentalStyled as styled } from '@mui/material/styles'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import CheckIcon from '@mui/icons-material/Check'


// picking a random color
const colors = ['red','blue','green','yellow', 'magenta', 'indigo', 'lime', 'gold']

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
  width: { xs: '90%', sm: '92%', md: '70%'},
  height: { xs: '80%', sm: '60%', md: '70%'},
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
            <Stack direction='column' spacing={2} height='100%' justifyContent='space-between'>
              <Alert severity="warning">
                <Typography fontSize={10}>
                  Note: You must have an email address
                </Typography>
              </Alert>
            </Stack>
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
                    border: '2px solid',
                    color: '#7D749E',
                    borderColor: '#7D749E',
                    backgroundColor: '#FFFFFF',
                    '&:hover': {
                      border: '2px solid',
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
          mt: 6,
          mx: 'auto',
          flexGrow: 1, 
          width: '97%',
        }}
      >
        <Grid container pr={{ xs: 0, sm: 1, md: 0 }} spacing={{ xs: 6, sm: 4, md: 2 }} columns={{ xs: 1, sm: 8, md: 16 }}>
          {shipments.map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: colors[Math.floor(Math.random()*colors.length)] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
