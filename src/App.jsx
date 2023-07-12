import * as React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import Dashboard from './Dashboard';
import Tabel, { loader as usersLoader } from './Tabel';
import Posts, { loader as postsLoader } from './Posts';
import Loading from './components/Loading';
import Error from './components/Error';
import Navbar from './components/Navbar';
import './style.css';
import PostDetails, { loader as postDetailsLoader } from './routes/posts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        errorElement: <Error />,
      },
      {
        path: '/tabel',
        element: <Tabel />,
        loader: usersLoader,
        errorElement: <Error />,
      },
      {
        path: '/posts',
        element: <Posts />,
        loader: postsLoader,
        errorElement: <Error />,
      },
      {
        path: '/posts/:postsId',
        element: <PostDetails />,
        loader: postDetailsLoader,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<Loading />} />;
}

function Root() {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar />}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
    >
      <Outlet />
    </AppShell>
  );
}
