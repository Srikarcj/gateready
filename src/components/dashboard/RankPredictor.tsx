import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Target, Award } from 'lucide-react';

interface PredictionResult {
  estimatedRank: number;
  confidence: number;
  percentile: number;
  topColleges: string[];
}

export const RankPredictor: React.FC = () => {
  const [mockTestScore, setMockTestScore] = useState('');
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePredict = () => {
    if (!mockTestScore) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const score = parseInt(mockTestScore);
      const estimatedRank = Math.floor(1000000 * (1 - score / 100));
      const confidence = Math.min(95, 70 + (score - 50) * 2);
      const percentile = Math.min(99.9, score + 0.1);

      setPrediction({
        estimatedRank,
        confidence,
        percentile,
        topColleges: [
          'IIT Bombay',
          'IIT Delhi',
          'IIT Madras',
          'IIT Kanpur',
          'IIT Kharagpur'
        ]
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-blue-500" />
          GATE Rank Predictor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex gap-4">
            <Input
              type="number"
              placeholder="Enter your mock test score"
              value={mockTestScore}
              onChange={(e) => setMockTestScore(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handlePredict} disabled={isLoading}>
              {isLoading ? 'Predicting...' : 'Predict Rank'}
            </Button>
          </div>

          {prediction && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Estimated Rank</p>
                      <p className="text-2xl font-bold">{prediction.estimatedRank.toLocaleString()}</p>
                      <Badge className="mt-2" variant="secondary">
                        Confidence: {prediction.confidence}%
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Percentile</p>
                      <p className="text-2xl font-bold">{prediction.percentile.toFixed(1)}%</p>
                      <Progress value={prediction.percentile} className="mt-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Top Colleges</p>
                      <div className="mt-2 space-y-1">
                        {prediction.topColleges.map((college, index) => (
                          <Badge key={index} variant="outline" className="mr-1 mb-1">
                            {college}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Award className="h-4 w-4 text-yellow-500" />
                  Recommendations
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Focus on weak areas in Digital Logic and Computer Networks</li>
                  <li>Take more mock tests to improve accuracy</li>
                  <li>Join study groups for better preparation</li>
                  <li>Consider applying to these top colleges based on your predicted rank</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RankPredictor; 