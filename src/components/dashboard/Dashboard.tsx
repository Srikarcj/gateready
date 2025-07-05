import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  useTheme, 
  useMediaQuery,
  List as MuiList,
  ListItem as MuiListItem,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
  Container
} from '@mui/material';
import { 
  BookOpen, 
  Clock, 
  BarChart2, 
  BookMarked, 
  TrendingUp, 
  Users,
  Calendar,
  FileText,
  Award,
  Lightbulb
} from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  trend: string;
}

interface QuickActionProps {
  title: string;
  icon: React.ReactNode;
  color: string;
}

interface ActivityProps {
  id: number;
  title: string;
  time: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color, trend }) => (
  <Card sx={{ 
    height: '100%',
    borderRadius: 2,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    }
  }}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {title}
          </Typography>
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
            {value}
          </Typography>
          <Typography variant="caption" sx={{ color, fontWeight: 'medium' }}>
            {trend}
          </Typography>
        </Box>
        <Box sx={{ 
          width: 48, 
          height: 48, 
          borderRadius: '12px', 
          bgcolor: `${color}10`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: color
        }}>
          {icon}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const QuickAction: React.FC<QuickActionProps> = ({ title, icon, color }) => (
  <Button
    fullWidth
    variant="outlined"
    sx={{
      p: 2,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 2,
      borderColor: 'divider',
      '&:hover': {
        borderColor: color,
        bgcolor: `${color}08`
      }
    }}
  >
    <Box 
      sx={{ 
        width: 40, 
        height: 40, 
        borderRadius: '12px', 
        bgcolor: `${color}10`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: color,
        mb: 1
      }}
    >
      {icon}
    </Box>
    <Typography variant="body2" sx={{ textAlign: 'center' }}>
      {title}
    </Typography>
  </Button>
);

const ActivityItem: React.FC<ActivityProps> = ({ title, time, icon }) => (
  <MuiListItem 
    sx={{ 
      display: 'flex', 
      alignItems: 'flex-start',
      mb: 2,
      p: 2,
      borderRadius: 2,
      '&:hover': {
        bgcolor: 'action.hover',
        cursor: 'pointer'
      }
    }}
  >
    <MuiListItemIcon sx={{ 
      width: 36, 
      height: 36, 
      borderRadius: '10px', 
      bgcolor: 'primary.light',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'primary.main',
      mr: 2,
      flexShrink: 0
    }}>
      {icon}
    </MuiListItemIcon>
    <MuiListItemText 
      primary={title} 
      secondary={time} 
      primaryTypographyProps={{ variant: 'body2', fontWeight: 'medium' }} 
      secondaryTypographyProps={{ variant: 'caption', color: 'text.secondary' }}
    />
  </MuiListItem>
);

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const stats: StatCardProps[] = [
    { 
      title: 'Study Hours', 
      value: '24.5', 
      icon: <Clock size={24} />, 
      color: '#4f46e5',
      trend: '+2.4h from last week'
    },
    { 
      title: 'Practice Tests', 
      value: '12', 
      icon: <FileText size={24} />, 
      color: '#10b981',
      trend: '+3 this week'
    },
    { 
      title: 'Accuracy', 
      value: '78%', 
      icon: <Award size={24} />, 
      color: '#f59e0b',
      trend: '+5% from last week'
    },
    { 
      title: 'Rank', 
      value: '#1,245', 
      icon: <TrendingUp size={24} />, 
      color: '#ec4899',
      trend: '↑ 25 positions'
    },
  ];

  const quickActions: QuickActionProps[] = [
    { title: 'Continue Learning', icon: <BookOpen size={20} />, color: '#4f46e5' },
    { title: 'Take Practice Test', icon: <FileText size={20} />, color: '#10b981' },
    { title: 'View Performance', icon: <BarChart2 size={20} />, color: '#f59e0b' },
    { title: 'Study Plan', icon: <Calendar size={20} />, color: '#ec4899' },
  ];

  const recentActivities: ActivityProps[] = [
    { id: 1, title: 'Completed Calculus Practice', time: '2 hours ago', icon: <BookMarked size={18} /> },
    { id: 2, title: 'Achieved 90% in Algebra Test', time: '1 day ago', icon: <Award size={18} /> },
    { id: 3, title: 'Started New Chapter: Trigonometry', time: '2 days ago', icon: <Lightbulb size={18} /> },
    { id: 4, title: 'Joined Study Group: GATE 2025', time: '3 days ago', icon: <Users size={18} /> },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: isMobile ? 2 : 3, px: isMobile ? 1 : 2 }}>
      {/* Welcome Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
          Welcome back, Student! 👋
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here's what's happening with your GATE preparation today.
        </Typography>
      </Box>

      {/* Stats Grid */}
      <Box sx={{ width: '100%', mb: 4 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }, gap: 3 }}>
          {stats.map((stat, index) => (
            <Box key={index}>
              <StatCard {...stat} />
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 3 }}>
          {/* Quick Actions */}
          <Box>
            <Card sx={{ borderRadius: 2, mb: 3, height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                    Quick Actions
                  </Typography>
                  <Button size="small" color="primary">View All</Button>
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 2 }}>
                  {quickActions.map((action, index) => (
                    <Box key={index}>
                      <QuickAction {...action} />
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Recent Activities */}
          <Box>
            <Card sx={{ borderRadius: 2, height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                    Recent Activities
                  </Typography>
                  <Button size="small" color="primary">View All</Button>
                </Box>
                <MuiList sx={{ p: 0 }}>
                  {recentActivities.map((activity) => (
                    <ActivityItem key={activity.id} {...activity} />
                  ))}
                </MuiList>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
