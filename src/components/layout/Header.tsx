import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box, 
  Menu, 
  MenuItem, 
  useTheme, 
  useMediaQuery,
  Container,
  Avatar,
  Badge,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Tooltip
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Notifications as NotificationsIcon,
  AccountCircle,
  Close as CloseIcon,
  Logout,
  Settings,
  School
} from '@mui/icons-material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, BarChart2 } from 'lucide-react';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Dashboard', icon: <BarChart2 size={20} />, path: '/dashboard' },
    { text: 'Study Materials', icon: <BookOpen size={20} />, path: '/materials' },
    { text: 'Practice Tests', icon: <BookOpen size={20} />, path: '/tests' },
    { text: 'Performance', icon: <BarChart2 size={20} />, path: '/performance' },
  ];

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    handleClose();
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        background: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        '& .MuiToolbar-root': {
          minHeight: { xs: '56px', sm: '64px' },
          padding: { xs: '0 8px', sm: '0 16px' }
        }
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ 
          justifyContent: 'space-between', 
          py: { xs: 1, sm: 1.5 },
          px: { xs: 1, sm: 2 }
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            flexGrow: { xs: 1, sm: 0 },
            justifyContent: { xs: 'space-between', sm: 'flex-start' }
          }}>
            <School sx={{ 
              fontSize: { xs: 28, sm: 32, md: 40 }, 
              mr: 1,
              color: '#fff',
              display: { xs: 'none', sm: 'block' }
            }} />
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'white',
                fontWeight: 'bold',
                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  color: '#90caf9'
                }
              }}
            >
              GATE Ready
            </Typography>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleMobileMenuToggle}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 2,
            flexGrow: 1,
            ml: 4
          }}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                startIcon={item.icon}
                onClick={() => handleNavigation(item.path)}
                sx={{
                  color: 'white',
                  textTransform: 'none',
                  fontWeight: isActive(item.path) ? 'bold' : 'normal',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Mobile Drawer */}
          <Drawer
            anchor="left"
            open={mobileMenuOpen}
            onClose={handleMobileMenuToggle}
            sx={{
              '& .MuiDrawer-paper': {
                width: 250,
                boxSizing: 'border-box',
                background: 'linear-gradient(45deg, #1a237e 0%, #283593 100%)',
                color: 'white',
              },
            }}
          >
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton onClick={handleMobileMenuToggle} sx={{ color: 'white' }}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
            <List>
              {menuItems.map((item) => (
                <ListItemButton
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    bgcolor: isActive(item.path) ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  }}
                >
                  <ListItemIcon sx={{ color: 'inherit' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              ))}
            </List>
          </Drawer>

          {/* Right-side icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton color="inherit" size="small">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleMenu}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={Boolean(anchorEl) ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
              >
                <AccountCircle sx={{ width: 32, height: 32 }} />
              </IconButton>
            </Tooltip>
          </Box>

          {/* Account Menu */}
          <Menu
            id="account-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
