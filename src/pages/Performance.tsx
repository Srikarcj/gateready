import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, ArrowRight, TrendingUp } from "lucide-react";

export const Performance = () => {
  const navigate = useNavigate();

  // Automatically redirect to dashboard page after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 3000); // 3 second delay to show the redirect message

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleRedirectNow = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-100 flex items-center justify-center p-6">
      <Card className="max-w-2xl w-full bg-white shadow-2xl border-0">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full">
              <BarChart3 className="h-10 w-10 text-white" />
            </div>
            <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
            Performance Analytics Redirect
          </CardTitle>
          <p className="text-gray-600 text-lg">
            Performance analytics have been integrated into your comprehensive Dashboard
          </p>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              📊 Enhanced Analytics Experience
            </h3>
            <p className="text-gray-700 mb-4">
              Your Dashboard now includes comprehensive performance tracking:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Real-time Performance Charts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Subject-wise Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Progress Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span>Study Statistics</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              You will be automatically redirected to your Dashboard in a few seconds...
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={handleRedirectNow}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Go to Dashboard Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="text-xs text-gray-500 mt-6">
            This redirect ensures you have access to all performance analytics in one central location
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
