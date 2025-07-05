import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bus, Train, Car, MapPin, Clock, DollarSign } from 'lucide-react';

const transportOptions = [
  {
    id: 1,
    college: "IIT Bombay",
    location: "Mumbai, Maharashtra",
    options: [
      {
        type: "Bus",
        duration: "45 min",
        cost: "₹50",
        frequency: "Every 30 min"
      },
      {
        type: "Train",
        duration: "30 min",
        cost: "₹30",
        frequency: "Every 15 min"
      }
    ]
  },
  {
    id: 2,
    college: "IIT Delhi",
    location: "New Delhi",
    options: [
      {
        type: "Metro",
        duration: "20 min",
        cost: "₹40",
        frequency: "Every 10 min"
      },
      {
        type: "Bus",
        duration: "35 min",
        cost: "₹25",
        frequency: "Every 20 min"
      }
    ]
  }
];

export const CollegeTransportExplorer = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bus className="h-5 w-5" />
          College Transport Explorer
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* College Transport Options */}
          <div className="space-y-4">
            {transportOptions.map((college) => (
              <div key={college.id} className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">{college.college}</h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {college.location}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {college.options.map((option, index) => (
                    <div key={index} className="p-3 rounded-lg border bg-muted/50">
                      <div className="flex items-center gap-2 mb-2">
                        {option.type === "Bus" && <Bus className="h-4 w-4" />}
                        {option.type === "Train" && <Train className="h-4 w-4" />}
                        {option.type === "Metro" && <Train className="h-4 w-4" />}
                        <span className="font-medium">{option.type}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span>{option.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3 text-muted-foreground" />
                          <span>{option.cost}</span>
                        </div>
                        <div className="text-muted-foreground">
                          {option.frequency}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Explore More Button */}
          <Button className="w-full">
            <Car className="h-4 w-4 mr-2" />
            Explore More Routes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}; 