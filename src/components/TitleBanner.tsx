import { Card } from "@/components/ui/card";
import { useAuth } from "@clerk/clerk-react";

export const TitleBanner = () => {
  const { isSignedIn } = useAuth();

  // Only show for authenticated users
  if (!isSignedIn) return null;

  return (
    <>
      {/* Desktop Title Banner - Scrolls with page */}
      <div className="hidden md:block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-left">
              <h1 className="text-4xl font-bold mb-1">GATE Ready</h1>
              <p className="text-lg opacity-90">AI-Powered Study Assistant</p>
            </div>
            <div className="flex gap-4">
              <Card className="bg-white/15 backdrop-blur-sm px-4 py-3 text-center border border-white/20 min-w-[80px]">
                <div className="text-xl font-bold mb-1">24/7</div>
                <div className="text-xs opacity-90">AI Support</div>
              </Card>
              <Card className="bg-white/15 backdrop-blur-sm px-4 py-3 text-center border border-white/20 min-w-[80px]">
                <div className="text-xl font-bold mb-1">100+</div>
                <div className="text-xs opacity-90">Colleges</div>
              </Card>
              <Card className="bg-white/15 backdrop-blur-sm px-4 py-3 text-center border border-white/20 min-w-[80px]">
                <div className="text-xl font-bold mb-1">1000+</div>
                <div className="text-xs opacity-90">Resources</div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Title Banner - Optimized for mobile */}
      <div className="md:hidden w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
        <div className="px-4">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold mb-1">GATE Ready</h1>
            <p className="text-sm opacity-90">AI-Powered Study Assistant</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Card className="bg-white/15 backdrop-blur-sm p-3 text-center border border-white/20">
              <div className="text-lg font-bold mb-1">24/7</div>
              <div className="text-xs opacity-90">AI Support</div>
            </Card>
            <Card className="bg-white/15 backdrop-blur-sm p-3 text-center border border-white/20">
              <div className="text-lg font-bold mb-1">100+</div>
              <div className="text-xs opacity-90">Colleges</div>
            </Card>
            <Card className="bg-white/15 backdrop-blur-sm p-3 text-center border border-white/20">
              <div className="text-lg font-bold mb-1">1000+</div>
              <div className="text-xs opacity-90">Resources</div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
 
 