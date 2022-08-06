// import { Link as ScrollLink } from 'react-scroll';
import React from 'react'
import { Outlet } from 'react-router-dom';
// material
// import { Box, Link, Container, Typography } from '@material-ui/core';
// components
// import Logo from '../../components/Logo';
//
import MainNavbar from './MainNavbar';
import MainFooter from './MainFooter';

// ----------------------------------------------------------------------

export default function MainLayout() {

  return (
    <>
      <MainNavbar />
      <div>
        <Outlet />
      </div>
      <MainFooter />
    </>
  );
}
