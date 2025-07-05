import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const GenerateSchedule = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Open the external link in a new tab
    window.open('https://gatewithme-aischedule.netlify.app/', '_blank');
    // Navigate back to the previous page
    navigate(-1);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Button 
        variant="outline" 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Go Back
      </Button>
    </div>
  );
};

export default GenerateSchedule; 