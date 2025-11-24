import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import { Component } from 'react';
import Home from '../home/Home';
import Apps from '../pages/Apps/Apps';
export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        path: '/',
        loader:()=>fetch('homeApps.json'),
        Component: Home,
      },
      {
        path: 'Apps',
        loader:()=>fetch('Apps.json'),
        Component: Apps,
      }
    ],
  },
]);
