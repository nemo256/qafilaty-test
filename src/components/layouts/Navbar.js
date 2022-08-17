import { styled, alpha } from '@mui/material/styles'
import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Tooltip,
  Menu,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'


const AppBarStyled = styled('div')(({ theme }) => ({
  position: 'fixed',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '90%',
  minWidth: '90%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#dddddd',
  '&:hover': {
    backgroundColor: '#dddddd',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarStyled>
        <Toolbar>
          <Avatar sx={{ mr: 2 }}>A</Avatar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBarStyled>
    </Box>
  );
}

{/* <Tooltip title="Open settings"> */}
{/*   <IconButton sx={{ p: 0 }}> */}
{/*     <Avatar alt="Profile name" src="/logo.png" /> */}
{/*   </IconButton> */}
{/* </Tooltip> */}
