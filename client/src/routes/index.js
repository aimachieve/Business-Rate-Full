import React from 'react'
import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
// import GuestGuard from '../guards/GuestGuard';

import MainLayout from '../layouts/main';
// import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // Auth Routes
    // {
    //   path: 'auth',
    //   children: [
    //     {
    //       path: 'login',
    //       element: (
    //         <GuestGuard>
    //           <Login />
    //         </GuestGuard>
    //       )
    //     },
    //     {
    //       path: 'register',
    //       element: (
    //         <GuestGuard>
    //           <Register />
    //         </GuestGuard>
    //       )
    //     },
    //     { path: 'login', element: <Login /> },
    //     { path: 'register', element: <Register /> },
    //     { path: 'reset-password', element: <ResetPassword /> },
    //     { path: 'verify', element: <VerifyCode /> }
    //   ]
    // },

    // Dashboard Routes
    // {
    //   path: 'dashboard',
    //   element: <DashboardLayout />,
    //   children: [
    //     { path: '/', element: <Navigate to="/dashboard/one" replace /> },
    //     { path: 'one', element: <PageOne /> },
    //     { path: 'two', element: <PageTwo /> },
    //     { path: 'three', element: <PageThree /> },
    //     {
    //       path: 'app',
    //       children: [
    //         {
    //           path: '/',
    //           element: <Navigate to="/dashboard/app/four" replace />
    //         },
    //         { path: 'four', element: <PageFour /> },
    //         { path: 'five', element: <PageFive /> },
    //         { path: 'six', element: <PageSix /> }
    //       ]
    //     }
    //   ]
    // },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/detail', element: <LandingPage /> },
        { path: '/categories', element: <CategoriesPage /> },
        { path: '/restaurants', element: <RestaurantsPage /> },
        { path: '/locations', element: <LocationsPage /> },
        { path: '/store', element: <StorePage /> },
        { path: '/products/headphone', element: <ProductPage /> },
        { path: '/cart', element: <CartPage /> },
        { path: '/checkout', element: <CheckoutPage /> },
        { path: '/contactus', element: <ContactUsPage /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'verify', element: <VerifyCode /> },
        { path: '/search', element: <SearchPage /> },
        { path: '/profile/:id', element: <ProfilePage /> },
        { path: '/review/:id', element: <ReviewPage /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// IMPORT COMPONENTS

// Authentication
// const Login = Loadable(lazy(() => import('../pages/authentication/Login')));
// const Register = Loadable(lazy(() => import('../pages/authentication/Register')));
const ResetPassword = Loadable(lazy(() => import('../pages/authentication/ResetPassword')));
const VerifyCode = Loadable(lazy(() => import('../pages/authentication/VerifyCode')));
// Dashboard
// const PageOne = Loadable(lazy(() => import('../pages/PageOne')));
// const PageTwo = Loadable(lazy(() => import('../pages/PageTwo')));
// const PageThree = Loadable(lazy(() => import('../pages/PageThree')));
// const PageFour = Loadable(lazy(() => import('../pages/PageFour')));
// const PageFive = Loadable(lazy(() => import('../pages/PageFive')));
// const PageSix = Loadable(lazy(() => import('../pages/PageSix')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
// Main
const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
const HomePage = Loadable(lazy(() => import('../pages/Home')));
const CategoriesPage = Loadable(lazy(() => import('../pages/CategoriesPage')));
const RestaurantsPage = Loadable(lazy(() => import('../pages/Restaurants')));
const LocationsPage = Loadable(lazy(() => import('../pages/Locations')));
const SearchPage = Loadable(lazy(() => import('../pages/Search')));
const ProfilePage = Loadable(lazy(() => import('../pages/Profile')));
const ReviewPage = Loadable(lazy(() => import('../pages/Review')));
const StorePage = Loadable(lazy(() => import('../pages/Store')));
const ProductPage = Loadable(lazy(() => import('../pages/Product')));
const CartPage = Loadable(lazy(() => import('../pages/cart/cartPage')));
const CheckoutPage = Loadable(lazy(() => import('../pages/cart/checkout')));
const ContactUsPage = Loadable(lazy(() => import('../pages/ContactUs')));