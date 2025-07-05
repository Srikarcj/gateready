import React from 'react';
import { useAuth } from '@clerk/clerk-react';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
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
      {/* Mobile-first responsive layout */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar - Only show for authenticated users */}
        {isSignedIn && <Sidebar />}

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-h-screen md:min-h-0">
          {/* Header - Mobile optimized */}
          <header className="h-14 md:h-16 border-b bg-background sticky top-0 z-20 flex-shrink-0">
            <div className="h-full px-3 md:px-4 flex items-center justify-between">
              <div className="flex items-center">
                {/* Mobile menu button space - handled by Sidebar component */}
                <h1 className="text-lg md:text-xl font-semibold ml-12 md:ml-0">GATE Ready</h1>
              </div>
            </div>
          </header>

          {/* Page Content - Mobile optimized */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <div className="w-full max-w-full">
              <div className="px-3 md:px-4 lg:px-6 py-4 md:py-6">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;