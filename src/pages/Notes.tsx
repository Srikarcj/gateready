import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, ExternalLink } from "lucide-react";

export const Notes = () => {
  // Automatically redirect to external notes site after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open('https://gate-ready-with-ai-notes.netlify.app/', '_blank');
    }, 3000); // 3 second delay to show the redirect message

    return () => clearTimeout(timer);
  }, []);

  const handleRedirectNow = () => {
    window.open('https://gate-ready-with-ai-notes.netlify.app/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-100 flex items-center justify-center p-6">
      <Card className="max-w-2xl w-full bg-white shadow-2xl border-0">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-4 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <div className="p-4 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full">
              <ExternalLink className="h-10 w-10 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
            Notes Redirect
          </CardTitle>
          <p className="text-gray-600 text-lg">
            Redirecting to our comprehensive AI-powered Notes platform
          </p>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              📚 AI-Powered Study Notes
            </h3>
            <p className="text-gray-700 mb-4">
              Access our advanced notes platform with AI-generated content:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>AI-Generated Study Notes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>Subject-wise Organization</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>Interactive Learning Materials</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>GATE-Focused Content</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              You will be automatically redirected to the Notes platform in a few seconds...
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={handleRedirectNow}
                className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Open Notes Platform Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="text-xs text-gray-500 mt-6">
            This will open the AI-powered notes platform in a new tab
          </div>
        </CardContent>
      </Card>
    </div>
  );
};