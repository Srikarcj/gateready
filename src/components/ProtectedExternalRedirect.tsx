import { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

interface ProtectedExternalRedirectProps {
  to: string;
}

export const ProtectedExternalRedirect = ({ to }: ProtectedExternalRedirectProps) => {
  const { isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoaded) return;

    if (!isSignedIn) {
      // Store the intended destination before redirecting to sign-in
      sessionStorage.setItem('redirectAfterLogin', window.location.pathname);
      navigate('/sign-in');
      return;
    }

    // Only proceed with external redirect if user is authenticated
    window.location.href = to;
  }, [isLoaded, isSignedIn, navigate, to]);

  // Show loading state while checking auth
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        <p className="text-gray-600">Redirecting to practice tests...</p>
      </div>
    </div>
  );
};
