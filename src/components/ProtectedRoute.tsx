import { useAuth } from "@clerk/clerk-react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthModal } from "./AuthModal";
import { useState, useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoaded, isSignedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Set client-side flag to prevent hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle initial auth check
  useEffect(() => {
    if (!isLoaded) return;
    
    if (!isSignedIn) {
      // Store the intended path before showing auth modal
      if (location.pathname !== '/') {
        sessionStorage.setItem('redirectAfterLogin', location.pathname);
      }
      // Small delay to prevent flash of content
      const timer = setTimeout(() => {
        setShowAuthModal(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoaded, isSignedIn, location.pathname]);

  // Handle auth state changes
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const redirectUrl = sessionStorage.getItem('redirectAfterLogin');
      if (redirectUrl) {
        sessionStorage.removeItem('redirectAfterLogin');
        // Ensure we're on the client before navigating
        if (typeof window !== 'undefined') {
          // Small delay to ensure proper rendering
          const timer = setTimeout(() => {
            navigate(redirectUrl, { replace: true });
          }, 150);
          return () => clearTimeout(timer);
        }
      }
    }
  }, [isLoaded, isSignedIn, navigate]);

  // Show nothing during server-side rendering
  if (!isClient) {
    return null;
  }

  // Show loading state while checking auth
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Show auth modal if not signed in
  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => {
            setShowAuthModal(false);
            navigate('/', { replace: true });
          }} 
        />
      </div>
    );
  }

  // Render children if authenticated
  return <>{children}</>;
};