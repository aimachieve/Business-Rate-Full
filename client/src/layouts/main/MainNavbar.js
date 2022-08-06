import React from 'react'
import { NavLink as RouterLink, useLocation, useNavigate } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Box, AppBar, Toolbar, Container, Stack, Button, Typography, Grid } from '@material-ui/core';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// components
import Logo from '../../components/Logo';
// import Label from '../../components/Label';
import { MHidden } from '../../components/@material-extend';
// import AccountPopover from './AccountPopover';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';
// Component
import SearchForm from 'pages/SearchForm'

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 112;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  zIndex: -1,
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.longer
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  console.log(pathname)
  const pathArray = pathname.split('/')
  console.log(pathArray)
  // const { isAuthenticated, logout } = useAuth();
  const isHome = pathname === '/';

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent', borderBottom: '#f0f0f5 1px solid' }}>
      {
        pathArray[1] === 'search' | pathArray[1] === 'profile' | pathArray[1] === 'review' ?
          <Grid container spacing={1} justifyContent="space-around" alignItems="center"
            style={{
              backgroundColor: '#f5f6fa',
              border: '#f0f0f5 1px solid',
              padding: '10px',
            }}>
            <Grid xs={12} md={3} item>
              <Typography sx={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#083f62',
              }}>
                Search Top Rated Local® Businesses
              </Typography>
            </Grid>
            <Grid xs={12} md={9} item>
              <SearchForm />
            </Grid>
          </Grid>
          :
          ''
      }
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 80 },
          })
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            // pr: 20
          }}
        >
          <RouterLink to="/">
            <Logo
              sx={{
                transition: 'transform 0.3s',
                ...(isOffset && {
                  transform: 'scale(0.5)'
                }),
                height: '90px'
              }}
            />
          </RouterLink>
          <Box sx={{ flexGrow: 1 }} />

          <MHidden width="mdDown">
            <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>

          {/* {isAuthenticated ? (
            <Button variant="contained" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button component={RouterLink} variant="contained" to="/auth/login">
              Login
            </Button>
          )} */}
          {/* <AccountPopover /> */}

          <MHidden width="mdUp">
            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
