import { styled, alpha } from "@mui/material/styles"
import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  InputBase,
  Tooltip,
  Paper,
  Stack,
  Menu,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import Link from "next/link"


const drawerWidth = 60;

const AppBarStyled = styled("div")(({ theme }) => ({
  position: "fixed",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "90%",
  minWidth: "90%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}))


export default function Bar() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBarStyled>
        <Toolbar>
          <Avatar sx={{ mr: 2 }}>A</Avatar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
          </Typography>
          <Paper
            component="form"
            sx={{ 
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 200,
              borderRadius: 0,
              backgroundColor: "#eeeeee"
            }}
          >
            <InputBase
              dir="rtl"
              sx={{ mr: 1, flex: 1 }}
              placeholder="يبحث"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Toolbar>
      </AppBarStyled>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: { xs: "none", md: "flex", lg: "flex" }
        }}
        variant="permanent"
        anchor="right"
      >
        <Tooltip title="Qafilaty">
          <IconButton sx={{ p: 0, mt: 3 }}>
            <Avatar 
              alt="Profile name"
              src="/logo.png" 
              sx={{
                width: 58,
                height: 52,
              }}
            />
          </IconButton>
        </Tooltip>
        <List>
          <ListItem sx={{ mt: 4 }}disablePadding>
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
  );
}


