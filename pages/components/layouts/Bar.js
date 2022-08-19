import { styled, alpha } from '@mui/material/styles'
import * as React from 'react'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  InputBase,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  Tooltip,
  Toolbar,
} from '@mui/material'
import BadgeUnstyled, { badgeUnstyledClasses } from '@mui/base/BadgeUnstyled'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import Link from 'next/link'


const drawerWidth = '7%'
const pages = ['Home', 'Charts', 'Profile']
const settings = ['Profile', 'Settings', 'Logout']

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#F3F3F3',
  '&:hover': {
    backgroundColor: '#F3F3F3',
  },
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    marginLeft: 12,
    marginRight: 12,
    width: 'auto',
  },
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 4),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('xs')]: {
    display: 'none',
    paddingLeft: 0,
  },
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    paddingLeft: 12,
  },
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 16),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(8)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      paddingLeft: `calc(1em + ${theme.spacing(0)})`,
      align: 'center'
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 8px;
  font-variant: tabular-nums;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    min-width: 20px;
    height: 20px;
    padding: 0 2px;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: #07f;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
`


export default function Bar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <Box
      sx={{ 
        display: { xs: 'flex', md: 'flex', lg: 'flex' },
        mb: 10,
        mr: 20
      }}
    >
      <AppBar 
        elevation={0}
        position='fixed'
        sx={{
          backgroundColor: '#FFFFFF',
          color: '#000000',
          maxWidth: { xs: '100%', sm: '100%', md: '93%' },
          right: 0,
        }}
      >
        <Container width='100%'>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 0, display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search...'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: { xs: 0, sm: 1, md: 0 }, display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: 'none', sm: 'none', md: 'flex' } }}>
              <StyledBadge badgeContent={5}>
                <IconButton sx={{ ml: 2, backgroundColor: '#EEEEEE' }} >
                  <NotificationsOutlinedIcon />
                </IconButton>
              </StyledBadge>
            </Box>
            <Box sx={{ flexGrow: 0, ml: { xs: 1, sm: 2, md: 2 } }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar sx={{ bgcolor: '#B2C8DF' }} alt='Amine' src=''>A</Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderWidth: 0,
          },
          border: 'none',
          borderWidth: 0,
          display: { xs: 'none', md: 'flex' }
        }}
        variant='permanent'
        anchor='left'
      >
        <Tooltip title='Qafilaty'>
          <IconButton sx={{ p: 0, mt: 1 }}>
            <Avatar 
              alt='Profile name'
              src='/logo.png' 
              sx={{
                width: 62,
                height: 56,
              }}
            />
          </IconButton>
        </Tooltip>
        <List>
          <ListItem sx={{ mt: 6, justifyContent: 'center' }}>
            <Stack direction='column' spacing={2}>
              <ListItemButton sx={{ backgroundColor: '#DDDDDD', borderRadius: 2 }}>
                <Link href='/'>
                  <HomeOutlinedIcon opacity={.8}/>
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ borderRadius: 2 }}>
                <Link href='/charts'>
                  <SignalCellularAltOutlinedIcon opacity={.8} />
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ borderRadius: 2 }}>
                <Link href='/profile'>
                  <PersonOutlinedIcon opacity={.8} />
                </Link>
              </ListItemButton>
            </Stack>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  )
}
