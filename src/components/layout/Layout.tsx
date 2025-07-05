import React from 'react';
import { useAuth } from '@clerk/clerk-react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isLoaded, isSignedIn } = useAuth();

  // Don't render anything until auth is loaded
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Layout - Fixed with proper container */}
      <div className="hidden md:flex">
        {/* Desktop Sidebar */}
        {isSignedIn && (
          <aside className="w-64 border-r min-h-screen">
            <Sidebar />
          </aside>
        )}
        {/* Desktop Main Content */}
        <main className="flex-1 overflow-hidden">
          {isSignedIn ? (
            // Authenticated users - desktop content with proper container
            <div className="h-screen overflow-y-auto">
              <div className="max-w-7xl mx-auto px-6 py-6">
                {children}
              </div>
            </div>
          ) : (
            // Non-authenticated users (landing page)
            children
          )}
        </main>
      </div>

      {/* Mobile Layout - Everything in sidebar */}
      <div className="md:hidden">
        {/* Mobile Sidebar with all features */}
        {isSignedIn && <Sidebar />}

        {/* Mobile Main Content */}
        <main className="min-h-screen">
          {isSignedIn ? (
            // Authenticated users - mobile content with padding
            <div className="px-4 py-4">
              {children}
            </div>
          ) : (
            // Non-authenticated users (landing page)
            children
          )}
        </main>
      </div>
    </div>
  );
};

export default Layout;
 