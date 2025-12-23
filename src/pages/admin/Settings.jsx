import { Button } from '../../components/shared/Button';
import { Input, Select } from '../../components/shared/Input';
import { Settings as SettingsIcon, Save } from 'lucide-react';

export const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">System Settings</h1>
        <p className="text-gray-400">Configure library system preferences</p>
      </div>
      
      {/* General Settings */}
      <div className="card">
        <div className="flex items-center gap-2 mb-6">
          <SettingsIcon size={24} className="text-indigo-400" />
          <h2 className="text-xl font-semibold text-white">General Settings</h2>
        </div>
        <form className="space-y-4">
          <Input label="Library Name" defaultValue="LibraryHub Digital Management" />
          <Input label="Library Email" type="email" defaultValue="contact@libraryhub.edu" />
          <Input label="Library Phone" type="tel" defaultValue="+1-555-0100" />
          <Input label="Address" defaultValue="123 University Ave, Campus City, ST 12345" />
          <Button icon={Save}>Save Changes</Button>
        </form>
      </div>
      
      {/* Loan Settings */}
      <div className="card">
        <h2 className="text-xl font-semibold text-white mb-6">Loan Settings</h2>
        <form className="space-y-4">
          <Input label="Default Loan Period (days)" type="number" defaultValue="30" />
          <Input label="Maximum Renewals" type="number" defaultValue="2" />
          <Input label="Fine Per Day (USD)" type="number" step="0.01" defaultValue="0.50" />
          <Input label="Maximum Books Per User" type="number" defaultValue="5" />
          <Button icon={Save}>Save Changes</Button>
        </form>
      </div>
      
      {/* Notification Settings */}
      <div className="card">
        <h2 className="text-xl font-semibold text-white mb-6">Notification Settings</h2>
        <form className="space-y-4">
          <Select
            label="Due Date Reminder"
            defaultValue="3"
            options={[
              { value: '1', label: '1 day before' },
              { value: '3', label: '3 days before' },
              { value: '7', label: '7 days before' }
            ]}
          />
          <Select
            label="Overdue Notification Frequency"
            defaultValue="daily"
            options={[
              { value: 'daily', label: 'Daily' },
              { value: 'weekly', label: 'Weekly' },
              { value: 'never', label: 'Never' }
            ]}
          />
          <Button icon={Save}>Save Changes</Button>
        </form>
      </div>
      
      {/* System Maintenance */}
      <div className="card">
        <h2 className="text-xl font-semibold text-white mb-6">System Maintenance</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
            <div>
              <h3 className="font-medium text-white">Database Backup</h3>
              <p className="text-sm text-gray-400">Last backup: 2 hours ago</p>
            </div>
            <Button variant="secondary">Backup Now</Button>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
            <div>
              <h3 className="font-medium text-white">Clear Cache</h3>
              <p className="text-sm text-gray-400">Improve system performance</p>
            </div>
            <Button variant="secondary">Clear Cache</Button>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
            <div>
              <h3 className="font-medium text-white">Export All Data</h3>
              <p className="text-sm text-gray-400">Download complete database</p>
            </div>
            <Button variant="secondary">Export</Button>
          </div>
        </div>
      </div>
    </div>
  );
};