import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { 
  Shield, 
  Users, 
  Settings, 
  Plus, 
  MoreVertical, 
  Search, 
  Filter,
  UserPlus,
  UserCog,
  Lock,
  Unlock,
  Trash2,
  Edit,
  Copy,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  User,
  Key,
  Save,
  X,
  Check,
} from 'lucide-react';

// Types
interface Permission {
  id: string;
  name: string;
  description: string;
  category: string;
}

interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  isDefault?: boolean;
}

interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  isActive: boolean;
  lastLogin?: string;
}

// Default permissions
const DEFAULT_PERMISSIONS: Permission[] = [
  {
    id: 'view_dashboard',
    name: 'View Dashboard',
    description: 'Can view the main dashboard',
    category: 'General'
  },
  {
    id: 'manage_users',
    name: 'Manage Users',
    description: 'Can create, edit, and delete users',
    category: 'User Management'
  },
  {
    id: 'manage_roles',
    name: 'Manage Roles',
    description: 'Can create, edit, and delete roles',
    category: 'Role Management'
  },
  {
    id: 'view_reports',
    name: 'View Reports',
    description: 'Can view system reports',
    category: 'Reports'
  },
  {
    id: 'manage_settings',
    name: 'Manage Settings',
    description: 'Can modify system settings',
    category: 'System'
  }
];

// Default roles
const DEFAULT_ROLES: Role[] = [
  {
    id: 'admin',
    name: 'Administrator',
    description: 'Full system access',
    permissions: ['view_dashboard', 'manage_users', 'manage_roles', 'view_reports', 'manage_settings'],
    isDefault: true
  },
  {
    id: 'manager',
    name: 'Manager',
    description: 'Limited administrative access',
    permissions: ['view_dashboard', 'manage_users', 'view_reports'],
    isDefault: true
  },
  {
    id: 'user',
    name: 'Standard User',
    description: 'Basic system access',
    permissions: ['view_dashboard'],
    isDefault: true
  }
];

// Local Storage Keys
const STORAGE_KEYS = {
  ROLES: 'gate_roles',
  PERMISSIONS: 'gate_permissions',
  USERS: 'gate_users',
  CURRENT_USER: 'gate_current_user'
};

// Helper functions for local storage
const getFromStorage = <T,>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading from localStorage: ${key}`, error);
    return defaultValue;
  }
};

const saveToStorage = <T,>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving to localStorage: ${key}`, error);
    toast.error('Failed to save data');
  }
};

const RolesAndPermissions = () => {
  const [roles, setRoles] = useState<Role[]>(() => getFromStorage(STORAGE_KEYS.ROLES, DEFAULT_ROLES));
  const [permissions, setPermissions] = useState<Permission[]>(() => getFromStorage(STORAGE_KEYS.PERMISSIONS, DEFAULT_PERMISSIONS));
  const [users, setUsers] = useState<User[]>(() => getFromStorage(STORAGE_KEYS.USERS, []));
  const [currentUser, setCurrentUser] = useState<User | null>(() => getFromStorage(STORAGE_KEYS.CURRENT_USER, null));
  const [activeTab, setActiveTab] = useState('roles');
  const [isAddingRole, setIsAddingRole] = useState(false);
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [newRole, setNewRole] = useState<Partial<Role>>({});
  const [newUser, setNewUser] = useState<Partial<User>>({});
  const [editingRole, setEditingRole] = useState<Role | null>(null);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.ROLES, roles);
  }, [roles]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.PERMISSIONS, permissions);
  }, [permissions]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.USERS, users);
  }, [users]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.CURRENT_USER, currentUser);
  }, [currentUser]);

  const handleAddRole = () => {
    if (!newRole.name || !newRole.description) {
      toast.error('Please fill in all required fields');
      return;
    }

    const role: Role = {
      id: `role_${Date.now()}`,
      name: newRole.name,
      description: newRole.description,
      permissions: newRole.permissions || []
    };

    setRoles([...roles, role]);
    setNewRole({});
    setIsAddingRole(false);
    toast.success('Role added successfully');
  };

  const handleEditRole = (role: Role) => {
    setEditingRole(role);
  };

  const handleSaveRole = () => {
    if (!editingRole) return;

    setRoles(roles.map(role => 
      role.id === editingRole.id ? editingRole : role
    ));
    setEditingRole(null);
    toast.success('Role updated successfully');
  };

  const handleDeleteRole = (roleId: string) => {
    const role = roles.find(r => r.id === roleId);
    if (role?.isDefault) {
      toast.error('Cannot delete default roles');
      return;
    }

    setRoles(roles.filter(role => role.id !== roleId));
    toast.success('Role deleted successfully');
  };

  const handleAddUser = () => {
    if (!newUser.username || !newUser.email || !newUser.role) {
      toast.error('Please fill in all required fields');
      return;
    }

    const user: User = {
      id: `user_${Date.now()}`,
      username: newUser.username,
      email: newUser.email,
      role: newUser.role,
      isActive: true
    };

    setUsers([...users, user]);
    setNewUser({});
    setIsAddingUser(false);
    toast.success('User added successfully');
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
  };

  const handleSaveUser = () => {
    if (!editingUser) return;

    setUsers(users.map(user => 
      user.id === editingUser.id ? editingUser : user
    ));
    setEditingUser(null);
    toast.success('User updated successfully');
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
    toast.success('User deleted successfully');
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    toast.success(`Welcome back, ${user.username}!`);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    toast.success('Logged out successfully');
  };

  const renderRolesTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Roles</h2>
        <Button onClick={() => setIsAddingRole(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Role
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Permissions</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {roles.map(role => (
            <TableRow key={role.id}>
              <TableCell>
                {editingRole?.id === role.id ? (
                  <Input
                    value={editingRole.name}
                    onChange={e => setEditingRole({...editingRole, name: e.target.value})}
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    {role.name}
                    {role.isDefault && (
                      <Badge variant="secondary">Default</Badge>
                    )}
                  </div>
                )}
              </TableCell>
              <TableCell>
                {editingRole?.id === role.id ? (
                  <Input
                    value={editingRole.description}
                    onChange={e => setEditingRole({...editingRole, description: e.target.value})}
                  />
                ) : (
                  role.description
                )}
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-2">
                  {role.permissions.map(permissionId => {
                    const permission = permissions.find(p => p.id === permissionId);
                    return permission ? (
                      <Badge key={permissionId} variant="outline">
                        {permission.name}
                      </Badge>
                    ) : null;
                  })}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {editingRole?.id === role.id ? (
                    <>
                      <Button size="sm" onClick={handleSaveRole}>
                        <Save className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => setEditingRole(null)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button size="sm" variant="ghost" onClick={() => handleEditRole(role)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      {!role.isDefault && (
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button size="sm" variant="ghost" className="text-red-500">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Role</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete this role? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDeleteRole(role.id)}>
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      )}
                    </>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isAddingRole} onOpenChange={setIsAddingRole}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Role</DialogTitle>
            <DialogDescription>
              Create a new role with specific permissions
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <Input
                value={newRole.name || ''}
                onChange={e => setNewRole({...newRole, name: e.target.value})}
                placeholder="Enter role name"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Description</label>
              <Input
                value={newRole.description || ''}
                onChange={e => setNewRole({...newRole, description: e.target.value})}
                placeholder="Enter role description"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Permissions</label>
              <div className="space-y-2 mt-2">
                {permissions.map(permission => (
                  <div key={permission.id} className="flex items-center gap-2">
                    <Switch
                      checked={newRole.permissions?.includes(permission.id)}
                      onCheckedChange={checked => {
                        const permissions = newRole.permissions || [];
                        setNewRole({
                          ...newRole,
                          permissions: checked
                            ? [...permissions, permission.id]
                            : permissions.filter(p => p !== permission.id)
                        });
                      }}
                    />
                    <span className="text-sm">{permission.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setIsAddingRole(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddRole}>
              Add Role
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );

  const renderUsersTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Users</h2>
        <Button onClick={() => setIsAddingUser(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Username</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>
                {editingUser?.id === user.id ? (
                  <Input
                    value={editingUser.username}
                    onChange={e => setEditingUser({...editingUser, username: e.target.value})}
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {user.username}
                  </div>
                )}
              </TableCell>
              <TableCell>
                {editingUser?.id === user.id ? (
                  <Input
                    value={editingUser.email}
                    onChange={e => setEditingUser({...editingUser, email: e.target.value})}
                  />
                ) : (
                  user.email
                )}
              </TableCell>
              <TableCell>
                {editingUser?.id === user.id ? (
                  <Select
                    value={editingUser.role}
                    onValueChange={value => setEditingUser({...editingUser, role: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map(role => (
                        <SelectItem key={role.id} value={role.id}>
                          {role.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <Badge variant="outline">
                    {roles.find(r => r.id === user.role)?.name || user.role}
                  </Badge>
                )}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={user.isActive}
                    onCheckedChange={checked => {
                      if (editingUser?.id === user.id) {
                        setEditingUser({...editingUser, isActive: checked});
                      } else {
                        setUsers(users.map(u => 
                          u.id === user.id ? {...u, isActive: checked} : u
                        ));
                      }
                    }}
                  />
                  <Badge variant={user.isActive ? "success" : "destructive"}>
                    {user.isActive ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {editingUser?.id === user.id ? (
                    <>
                      <Button size="sm" onClick={handleSaveUser}>
                        <Save className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => setEditingUser(null)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button size="sm" variant="ghost" onClick={() => handleEditUser(user)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button size="sm" variant="ghost" className="text-red-500">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete User</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this user? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteUser(user.id)}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                      {!currentUser && (
                        <Button size="sm" onClick={() => handleLogin(user)}>
                          <Key className="h-4 w-4" />
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isAddingUser} onOpenChange={setIsAddingUser}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
              Create a new user with specific role
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Username</label>
              <Input
                value={newUser.username || ''}
                onChange={e => setNewUser({...newUser, username: e.target.value})}
                placeholder="Enter username"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input
                value={newUser.email || ''}
                onChange={e => setNewUser({...newUser, email: e.target.value})}
                placeholder="Enter email"
                type="email"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Role</label>
              <Select
                value={newUser.role}
                onValueChange={value => setNewUser({...newUser, role: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map(role => (
                    <SelectItem key={role.id} value={role.id}>
                      {role.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setIsAddingUser(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddUser}>
              Add User
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl font-bold">Roles & Permissions</CardTitle>
              <CardDescription className="mt-2">
                Manage user roles and permissions
              </CardDescription>
            </div>
            {currentUser && (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{currentUser.username}</span>
                  <Badge variant="outline">
                    {roles.find(r => r.id === currentUser.role)?.name}
                  </Badge>
                </div>
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="roles">
                <Shield className="mr-2 h-4 w-4" />
                Roles
              </TabsTrigger>
              <TabsTrigger value="users">
                <User className="mr-2 h-4 w-4" />
                Users
              </TabsTrigger>
            </TabsList>
            <TabsContent value="roles">
              {renderRolesTab()}
            </TabsContent>
            <TabsContent value="users">
              {renderUsersTab()}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default RolesAndPermissions;
export { RolesAndPermissions }; 