import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import { Component } from 'react';
import Home from '../home/Home';
import Apps from '../pages/Apps/Apps';
import AppDetails from '../pages/AppDitails/AppDetails';
import InstallApps from '../pages/InstallApps/InstallApps';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: '/',
        loader: () => fetch('/homeApps.json'),
        Component: Home,
      },
      {
        path: 'Apps',
        loader: () => fetch('/Apps.json'),
        Component: Apps,
      },
      {
        path: 'AppDetails/:id',
        loader: () => fetch('/Apps.json'),
        Component: AppDetails,
      },
      {
        path: 'Installation',
        loader: () => fetch('/Apps.json'),
        Component: InstallApps,
      },
    ],
  },
]);
