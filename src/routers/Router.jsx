import { createBrowserRouter } from 'react-router';
import DashBoardLayout from '../layouts/DashBoardLayout';
import RootLayout from '../layouts/RootLayout';
import AllJobsListPage from '../pages/DashBoard/AllJobsListPage';
import JobPostFormPage from '../pages/DashBoard/JobPostFormPage';
import ShowAllJobsPage from '../pages/DashBoard/ShowAllJobsPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'show-jobs',
        element: <ShowAllJobsPage />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashBoardLayout />,
    children: [
      {
        index: true,
        Component: LoginPage,
      },
      {
        path: 'signup',
        Component: RegisterPage,
      },
      {
        path: 'show-all-jobs',
        element: <AllJobsListPage />,
      },
      {
        path: 'add-new-job',
        element: <JobPostFormPage />,
      },
    ],
  },
]);

export default router;
