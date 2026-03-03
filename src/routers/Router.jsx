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
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'show-jobs', element: <ShowAllJobsPage /> },
      { path: 'jobsDetails/:id', element: <JobDetailsPage /> },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashBoardLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <AllJobsListPage /> },
      { path: 'add-new-job', element: <JobPostFormPage /> },
      { path: 'applications-list', element: <AllApplicationListPage /> },
    ],
  },
  { path: 'login-page', element: <LoginPage /> },
  { path: 'signup', element: <RegisterPage /> },
]);

export default router;
