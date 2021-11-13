import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PaymentIcon from '@mui/icons-material/Payment';
import CloseIcon from '@mui/icons-material/Close';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useRouteMatch
  } from "react-router-dom";
import AddProducts from '../AddProducts/AddProducts';
import useAuth from '../Hook/useAuth';
import Adadmin from './AdAdmin/Adadmin';
import ManageAllOrder from './ManageAllOrder/ManageAllOrder';
import ManageProduct from './ManageProduct/ManageProduct';
import MyOrder from './Myorder/MyOrder';
import Review from './Review/Review';
import Pay from './Pay/Pay';
import AdminRoute from '../Pages/Login/AdminRoute/AdminRoute';
import Button from '@restart/ui/esm/Button';
  
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Dashboard = () => {
    const history = useHistory()
    const {logOut, admin} = useAuth()
    let { path, url } = useRouteMatch();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const logout = () =>{
        logOut()
        history.push('/')
    }

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
            <IconButton>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
          <Link to="/home">
          <Button style={{marginRight: '7rem'}} variant="text">Home</Button>
          </Link>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <CloseIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
          {admin? <Box>
            <li>
            <Link style={{textDecoration: 'none', color: '#000'}} to={`${url}/addproduct`}><AddToPhotosIcon style={{color: '#000', fontSize:'2rem', marginLeft:'10px'}} ></AddToPhotosIcon>........Add Product</Link>
            </li>
             <li>
              <Link style={{textDecoration: 'none', color: '#000'}} to={`${url}/admin`}><AdminPanelSettingsIcon style={{color: '#000', fontSize:'2rem', marginLeft:'10px'}} ></AdminPanelSettingsIcon>........Make An Admin</Link>
            </li>
             <li>
              <Link style={{textDecoration: 'none', color: '#000'}} to={`${url}/manage`}><AddShoppingCartIcon style={{color: '#000', fontSize:'2rem', marginLeft:'10px'}} ></AddShoppingCartIcon>........Manage Orders</Link>
              </li>
            <li>
              <Link style={{textDecoration: 'none', color: '#000'}} to={`${url}/product`}><ChildFriendlyIcon style={{color: '#000', fontSize:'2rem', marginLeft:'10px'}} ></ChildFriendlyIcon>........Manage Products</Link>
            </li>
            <li>
            <p style={{cursor:'pointer'}} onClick={logout}><LogoutIcon style={{color: '#000', fontSize:'2rem', marginLeft:'10px'}}/>........Log Out</p>
              </li>
          </Box>
              :
              <Box>
                  <li>
            <Link style={{textDecoration: 'none', color: '#000'}} to={`${url}/myorder`}><ChangeCircleIcon style={{color: '#000', fontSize:'2rem', marginLeft:'10px'}} ></ChangeCircleIcon>........My Orders</Link>
            </li>
            <li>
              <Link style={{textDecoration: 'none', color: '#000'}} to={`${url}/review`}><MenuBookIcon style={{color: '#000', fontSize:'2rem', marginLeft:'10px'}} ></MenuBookIcon>........Add Review</Link>
              </li>
             <li>
              <Link style={{textDecoration: 'none', color: '#000'}} to={`${url}/pay`}><PaymentIcon style={{color: '#000', fontSize:'2rem', marginLeft:'10px'}} ></PaymentIcon>........Pay</Link>
            </li>
             <li>
            <p style={{cursor:'pointer'}} onClick={logout}><LogoutIcon style={{color: '#000', fontSize:'2rem', marginLeft:'10px'}}/>........Log Out</p>
              </li>
              </Box>
            }
 
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Switch>
        <Route exact path={path}>
          <h1>Welcome to your dashboard</h1>
        </Route>
        <AdminRoute path={`${path}/addproduct`}>
        <AddProducts></AddProducts>
        </AdminRoute>
        <AdminRoute path={`${path}/admin`}>
        <Adadmin></Adadmin>
        </AdminRoute>
        <Route path={`${path}/myorder`}>
        <MyOrder></MyOrder>
        </Route>
        <AdminRoute path={`${path}/manage`}>
        <ManageAllOrder></ManageAllOrder>
        </AdminRoute>
        <Route path={`${path}/review`}>
        <Review></Review>
        </Route>
        <AdminRoute path={`${path}/product`}>
        <ManageProduct></ManageProduct>
        </AdminRoute>
        <Route path={`${path}/pay`}>
        <Pay></Pay>
        </Route>
      </Switch>
        </Box>
      </Box>
    );
};

export default Dashboard;