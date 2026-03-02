import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  const from = location.state?.from?.pathname || 'show-all-jobs';

  if (!user) {
    return <Navigate to="/dashboard" replace state={{ from }} />;
  }

  return <>{children}</>;
}
