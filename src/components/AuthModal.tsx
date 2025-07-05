import { X } from "lucide-react";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const { isSignedIn } = useAuth();

  // Close modal if user signs in
  useEffect(() => {
    if (isSignedIn && isOpen) {
      onClose();
    }
  }, [isSignedIn, isOpen, onClose]);

  if (!isOpen) return null;

  const handleAuthAction = () => {
    // Store the current path for after login
    const currentPath = window.location.pathname;
    if (currentPath !== '/') {
      sessionStorage.setItem('redirectAfterLogin', currentPath);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h2 className="text-2xl font-bold mb-4">Access Restricted</h2>
        <p className="text-gray-600 mb-6">
          Please sign in or create an account to access this feature.
        </p>
        
        <div className="space-y-3">
          <SignInButton 
            mode="modal"
            afterSignInUrl={window.location.pathname}
            afterSignUpUrl={window.location.pathname}
          >
            <button 
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              onClick={handleAuthAction}
            >
              Sign In
            </button>
          </SignInButton>
          <SignUpButton 
            mode="modal"
            afterSignInUrl={window.location.pathname}
            afterSignUpUrl={window.location.pathname}
          >
            <button 
              className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              onClick={handleAuthAction}
            >
              Create Account
            </button>
          </SignUpButton>
        </div>
      </div>
    </div>
  );
}; 