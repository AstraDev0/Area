import { useAuth } from '../context/AuthContextProvider';
import { Navigate } from 'react-router-dom';
import Auth from '../components/Auth';

export function Redirection(_: RedirectionProps) {
  const { loggedIn } = useAuth();

  return (
    <>
      {loggedIn ? <Navigate to="/home" replace /> : <Auth />}
    </>
  );
}

export interface RedirectionProps {}

export default Redirection;
