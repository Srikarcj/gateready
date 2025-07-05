import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  User, 
  Users, 
  BookOpen, 
  Settings,
  CheckCircle2,
  XCircle
} from 'lucide-react';

interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  icon: React.ElementType;
  color: string;
}

export const RoleBasedAccess = () => {
  const roles: Role[] = [
    {
      id: '1',
      name: 'Student',
      description: 'Basic access to study materials and practice tests',
      permissions: [
        'Access study materials',
        'Take practice tests',
        'View performance metrics',
        'Participate in discussions'
      ],
      icon: User,
      color: 'blue'
    },
    {
      id: '2',
      name: 'Premium Student',
      description: 'Enhanced access with additional features',
      permissions: [
        'All Student features',
        'Access to premium content',
        'Priority support',
        'Advanced analytics'
      ],
      icon: Users,
      color: 'purple'
    },
    {
      id: '3',
      name: 'Mentor',
      description: 'Guide and support other students',
      permissions: [
        'All Premium features',
        'Create study materials',
        'Host study sessions',
        'Review student progress'
      ],
      icon: BookOpen,
      color: 'green'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Role & Permissions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {roles.map((role) => (
            <div key={role.id} className="p-4 rounded-lg border bg-muted/50">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg bg-${role.color}-100`}>
                    <role.icon className={`h-5 w-5 text-${role.color}-500`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{role.name}</h3>
                      <Badge variant="outline" className={`text-${role.color}-500 border-${role.color}-200`}>
                        {role.permissions.length} permissions
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {role.description}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Manage
                </Button>
              </div>

              <div className="mt-4 space-y-2">
                {role.permissions.map((permission, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>{permission}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}; 