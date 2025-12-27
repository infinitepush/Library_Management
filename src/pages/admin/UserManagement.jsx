import { useState, useEffect } from 'react';
import { Table } from '../../components/shared/Table';
import { Button } from '../../components/shared/Button';
import { Input, Select } from '../../components/shared/Input';
import { Modal } from '../../components/shared/Modal';
import { StatusBadge } from '../../components/shared/Badge';
import { Plus, Edit, Trash } from 'lucide-react';
import { mockUsers } from '../../data/mockData';
import { formatDate, formatRole } from '../../utils/formatters';

export const UserManagement = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', password: '', role: 'student', status: 'active', phone: '' });

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const t = typeof window !== 'undefined' ? localStorage.getItem('lm_token') : null;
        const headers = {};
        if (t) headers.Authorization = `Bearer ${t}`;

        const res = await fetch('/api/users', { headers });
        if (!res.ok) {
          if (res.status === 401) throw new Error('Not authorized');
          throw new Error('Failed to fetch users');
        }
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        // fallback to mock users if unauthenticated or error
        setUsers(mockUsers);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  
  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { 
      key: 'role', 
      label: 'Role',
      sortable: true,
      render: (value) => formatRole(value)
    },
    { 
      key: 'status', 
      label: 'Status',
      render: (value) => <StatusBadge status={value} />
    },
    { 
      key: 'joinedDate', 
      label: 'Joined Date',
      render: (value) => formatDate(value)
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="ghost"
            icon={Edit}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedUser(row);
              setShowEditModal(true);
            }}
          />
          <Button
            size="sm"
            variant="ghost"
            icon={Trash}
            onClick={(e) => {
              e.stopPropagation();
              if (confirm('Are you sure you want to delete this user?')) {
                alert('User deleted (mock)');
              }
            }}
          />
        </div>
      )
    }
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">User Management</h1>
          <p className="text-gray-400">Manage system users and their roles</p>
        </div>
        <Button icon={Plus} onClick={() => setShowAddModal(true)}>
          Add New User
        </Button>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-sm text-gray-400 mb-2">Total Students</h3>
          <p className="text-3xl font-bold text-indigo-400">{users.filter(u => u.role === 'student').length}</p>
        </div>
        <div className="card">
          <h3 className="text-sm text-gray-400 mb-2">Total Librarians</h3>
          <p className="text-3xl font-bold text-purple-400">{users.filter(u => u.role === 'librarian').length}</p>
        </div>
        <div className="card">
          <h3 className="text-sm text-gray-400 mb-2">Total Admins</h3>
          <p className="text-3xl font-bold text-orange-400">{users.filter(u => u.role === 'admin').length}</p>
        </div>
      </div>
      
      {/* Users Table */}
      <Table columns={columns} data={users.length ? users : mockUsers} loading={loading} />
      
      {/* Add User Modal */}
      <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)} title="Add New User">
        <form className="space-y-4" onSubmit={async (e) => {
          e.preventDefault();
          // submit to backend
          try {
            const t = typeof window !== 'undefined' ? localStorage.getItem('lm_token') : null;
            const headers = { 'Content-Type': 'application/json' };
            if (t) headers.Authorization = `Bearer ${t}`;

            const res = await fetch('/api/users', {
              method: 'POST',
              headers,
              body: JSON.stringify({
                name: formState.name,
                email: formState.email,
                password: formState.password,
                role: formState.role
              })
            });

            if (!res.ok) {
              const err = await res.json().catch(() => ({ message: 'Failed to create user' }));
              if (res.status === 401) {
                alert('Not authorized. Please sign in as an admin.');
                return;
              }
              throw new Error(err.message || 'Failed to create user');
            }

            const created = await res.json();
            setUsers(prev => [created, ...prev]);
            setShowAddModal(false);
            setFormState({ name: '', email: '', password: '', role: 'student', status: 'active', phone: '' });
          } catch (err) {
            alert(err.message || 'Could not add user');
          }
        }}>
          <Input label="Full Name" value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} required />
          <Input label="Email" type="email" value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} required />
          <Input label="Phone" type="tel" value={formState.phone} onChange={(e) => setFormState({...formState, phone: e.target.value})} />
          <Input label="Password" type="password" value={formState.password} onChange={(e) => setFormState({...formState, password: e.target.value})} required />
          <Select label="Role" value={formState.role} onChange={(e) => setFormState({...formState, role: e.target.value})} options={[{ value: 'student', label: 'Student' },{ value: 'librarian', label: 'Librarian' },{ value: 'admin', label: 'Admin' }]} required />
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="secondary" onClick={() => setShowAddModal(false)} className="flex-1">Cancel</Button>
            <Button type="submit" className="flex-1">Add User</Button>
          </div>
        </form>
      </Modal>
      
      {/* Edit User Modal */}
      <Modal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setSelectedUser(null);
        }}
        title="Edit User"
      >
        {selectedUser && (
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            alert('User updated (mock)');
            setShowEditModal(false);
          }}>
            <Input label="Full Name" defaultValue={selectedUser.name} required />
            <Input label="Email" type="email" defaultValue={selectedUser.email} required />
            <Input label="Phone" type="tel" defaultValue={selectedUser.phone} />
            <Select
              label="Role"
              defaultValue={selectedUser.role}
              options={[
                { value: 'student', label: 'Student' },
                { value: 'librarian', label: 'Librarian' },
                { value: 'admin', label: 'Admin' }
              ]}
              required
            />
            <Select
              label="Status"
              defaultValue={selectedUser.status}
              options={[
                { value: 'active', label: 'Active' },
                { value: 'inactive', label: 'Inactive' }
              ]}
              required
            />
            <div className="flex gap-3 pt-4">
              <Button type="button" variant="secondary" onClick={() => setShowEditModal(false)} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1">
                Update User
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};