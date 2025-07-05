import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, ArrowRight, Zap } from "lucide-react";

export const MockTests = () => {
  const navigate = useNavigate();

  // Automatically redirect to practice tests page after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/practice-tests');
    }, 3000); // 3 second delay to show the redirect message

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleRedirectNow = () => {
    navigate('/practice-tests');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 flex items-center justify-center p-6">
      <Card className="max-w-2xl w-full bg-white shadow-2xl border-0">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
              <Target className="h-10 w-10 text-white" />
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full">
              <Zap className="h-10 w-10 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
            Mock Tests Redirect
          </CardTitle>
          <p className="text-gray-600 text-lg">
            Mock Tests have been integrated into our comprehensive Practice Tests section
          </p>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              🎯 Enhanced Practice Experience
            </h3>
            <p className="text-gray-700 mb-4">
              Our Practice Tests page now includes everything you need:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Full-length Mock Tests</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Subject-wise Tests</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span>Topic-wise Practice</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span>Real GATE Questions</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              You will be automatically redirected to Practice Tests in a few seconds...
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={handleRedirectNow}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Go to Practice Tests Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="text-xs text-gray-500 mt-6">
            This redirect ensures you have access to all testing features in one place
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
