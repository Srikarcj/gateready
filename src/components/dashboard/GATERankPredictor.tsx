import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, TrendingUp, Building2, MapPin } from 'lucide-react';

const recommendedColleges = [
  {
    name: "IIT Bombay",
    location: "Mumbai, Maharashtra",
    cutoff: "Top 500",
    confidence: "High"
  },
  {
    name: "IIT Delhi",
    location: "New Delhi",
    cutoff: "Top 800",
    confidence: "Medium"
  },
  {
    name: "IIT Madras",
    location: "Chennai, Tamil Nadu",
    cutoff: "Top 1000",
    confidence: "High"
  }
];

export const GATERankPredictor = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          GATE Rank Predictor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Current Performance */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Predicted Rank</span>
              <span className="text-2xl font-bold text-blue-600">#450</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Percentile</span>
              <span className="text-2xl font-bold text-green-600">98.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Confidence Level</span>
              <span className="text-2xl font-bold text-purple-600">85%</span>
            </div>
          </div>

          {/* College Recommendations */}
          <div className="space-y-4">
            <h4 className="font-semibold flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Recommended Colleges
            </h4>
            <div className="space-y-3">
              {recommendedColleges.map((college, index) => (
                <div key={index} className="p-3 rounded-lg border bg-muted/50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-medium">{college.name}</h5>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {college.location}
                      </p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      college.confidence === 'High' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {college.confidence} Chance
                    </span>
                  </div>
                  <p className="text-sm mt-2">
                    Expected Cutoff: <span className="font-medium">{college.cutoff}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <Button className="w-full">
            <TrendingUp className="h-4 w-4 mr-2" />
            View Detailed Analysis
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}; 