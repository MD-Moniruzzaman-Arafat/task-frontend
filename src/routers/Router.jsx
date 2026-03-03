import { createBrowserRouter } from 'react-router';
import DashBoardLayout from '../layouts/DashBoardLayout';
import RootLayout from '../layouts/RootLayout';
import AllApplicationListPage from '../pages/DashBoard/AllApplicationListPage';
import AllJobsListPage from '../pages/DashBoard/AllJobsListPage';
import JobPostFormPage from '../pages/DashBoard/JobPostFormPage';
import ShowAllJobsPage from '../pages/DashBoard/ShowAllJobsPage';
import HomePage from '../pages/HomePage';
import JobDetailsPage from '../pages/JobDetailsPage';
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
      {
        path: 'jobsDetails/:id',
        element: <JobDetailsPage />,
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
      {
        path: 'applications-list',
        element: <AllApplicationListPage />,
      },
    ],
  },
]);

export default router;
