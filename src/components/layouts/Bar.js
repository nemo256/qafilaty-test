import { styled, alpha } from "@mui/material/styles"
import * as React from 'react'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  InputBase,
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
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import Link from "next/link"


const drawerWidth = '7%'
const pages = ['Home', 'Charts', 'Profile']
const settings = ['Profile', 'Settings', 'Logout']

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#EEEEEE',
  '&:hover': {
    backgroundColor: '#EEEEEE',
  },
  marginLeft: 0,
  marginRight: 20,
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    marginLeft: 12,
    marginRight: 12,
    width: 'auto',
  },
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  right: 0,
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 6),
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
        display: { xs: "flex", md: "flex", lg: "flex" }
      }}
    >
    <AppBar 
      position="fixed"
      sx={{
        backgroundColor: '#FFFFFF',
        color: '#000000',
        maxWidth: { xs: '100%', md: '93%' },
        left: 0,
      }}
    >
      <Container width="100%">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Amine" src="">A</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
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
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <StyledBadge badgeContent={5}>
              <IconButton sx={{ ml: 2, backgroundColor: '#EEEEEE' }} >
                <NotificationsOutlinedIcon />
              </IconButton>
            </StyledBadge>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              dir="rtl"
              placeholder="يبحث"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
                  <Typography textAlign="center">{page}</Typography>
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
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: { xs: 'none', md: 'flex' }
        }}
        variant="permanent"
        anchor="right"
      >
        <Tooltip title="Qafilaty">
          <IconButton sx={{ p: 0, mt: 1 }}>
            <Avatar 
              alt="Profile name"
              src="/logo.png" 
              sx={{
                width: 56,
                height: 52,
              }}
            />
          </IconButton>
        </Tooltip>
        <List>
          <ListItem sx={{ mt: 4, justifyContent: 'center' }}>
            <Stack direction="column" spacing={1}>
              <ListItemButton>
                <Link href="/">
                  <HomeOutlinedIcon />
                </Link>
              </ListItemButton>
              <ListItemButton>
                <Link href="/charts">
                  <SignalCellularAltOutlinedIcon />
                </Link>
              </ListItemButton>
              <ListItemButton>
                <Link href="/profile">
                  <PersonOutlinedIcon />
                </Link>
              </ListItemButton>
            </Stack>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  )
}
