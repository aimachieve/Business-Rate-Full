import React from 'react'
import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
// import fileFill from '@iconify/icons-eva/file-fill';
// routes
// import { PATH_DASHBOARD } from '../../routes/paths';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'Categories',
    path: '/categories',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'Restaurants',
    path: '/restaurants',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'Locations',
    path: '/locations',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'Business detail',
    path: '/detail',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'Store',
    path: '/store',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  // {
  //   title: 'Messages',
  //   path: '/',
  //   icon: <Icon icon={homeFill} {...ICON_SIZE} />
  // },
  // {
  //   title: 'Account',
  //   path: '/',
  //   icon: <Icon icon={homeFill} {...ICON_SIZE} />
  // }
  // { title: 'Dashboard', path: PATH_DASHBOARD.root, icon: <Icon icon={fileFill} {...ICON_SIZE} /> }
];

export default menuConfig;
