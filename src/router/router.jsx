import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import { Component } from 'react';
import Home from '../home/Home';
export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
      }
    ],
  },
]);
