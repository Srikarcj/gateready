import { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

interface ExternalRedirectProps {
  to: string;
}

export const ExternalRedirect = ({ to }: ExternalRedirectProps) => {
  const { isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoaded) return;
    
    if (!isSignedIn) {
      // Store the intended destination in session storage
      sessionStorage.setItem('redirectAfterLogin', to);
      // Redirect to sign-in
      navigate('/sign-in');
      return;
    }

    // If signed in, proceed with external redirect
    window.location.href = to;
  }, [isLoaded, isSignedIn, navigate, to]);

  // Show loading indicator while processing
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
};
