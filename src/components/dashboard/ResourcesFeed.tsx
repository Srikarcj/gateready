import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Video, FileText, ExternalLink, Bookmark, Share2 } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: "Complete Data Structures Course",
    type: "Course",
    provider: "NPTEL",
    duration: "8 weeks",
    icon: BookOpen,
    url: "#"
  },
  {
    id: 2,
    title: "GATE Mathematics Playlist",
    type: "Video Series",
    provider: "YouTube",
    duration: "12 hours",
    icon: Video,
    url: "#"
  },
  {
    id: 3,
    title: "Previous Year Question Papers",
    type: "PDF",
    provider: "GATE Official",
    duration: "2018-2023",
    icon: FileText,
    url: "#"
  }
];

export const ResourcesFeed = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Study Resources
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Resources List */}
          <div className="space-y-4">
            {resources.map((resource) => (
              <div key={resource.id} className="p-4 rounded-lg border bg-muted/50">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <resource.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{resource.title}</h4>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{resource.type}</span>
                      <span>•</span>
                      <span>{resource.provider}</span>
                      <span>•</span>
                      <span>{resource.duration}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="link" 
                  className="mt-2 p-0 h-auto text-primary"
                  asChild
                >
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Open Resource
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <Button className="w-full">
            <BookOpen className="h-4 w-4 mr-2" />
            View More Resources
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}; 