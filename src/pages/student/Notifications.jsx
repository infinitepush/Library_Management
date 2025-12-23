import { useState } from 'react';
import { Bell, Info, AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import { mockNotifications } from '../../data/mockData';
import { useUser } from '../../context/UserContext';
import { formatDateTime } from '../../utils/formatters';
import { NotificationType } from '../../constants/enums';

export const Notifications = () => {
  const { currentUser } = useUser();
  const [filter, setFilter] = useState('all');
  
  const userNotifications = mockNotifications.filter(n => n.userId === currentUser?.id);
  
  const filteredNotifications = filter === 'all' 
    ? userNotifications 
    : filter === 'unread'
    ? userNotifications.filter(n => !n.read)
    : userNotifications.filter(n => n.read);
  
  const getNotificationIcon = (type) => {
    switch (type) {
      case NotificationType.SUCCESS:
        return <CheckCircle size={20} className="text-green-400" />;
      case NotificationType.WARNING:
        return <AlertTriangle size={20} className="text-yellow-400" />;
      case NotificationType.ERROR:
        return <AlertCircle size={20} className="text-red-400" />;
      default:
        return <Info size={20} className="text-blue-400" />;
    }
  };
  
  const getNotificationBg = (type) => {
    switch (type) {
      case NotificationType.SUCCESS:
        return 'bg-green-500/10 border-green-500/30';
      case NotificationType.WARNING:
        return 'bg-yellow-500/10 border-yellow-500/30';
      case NotificationType.ERROR:
        return 'bg-red-500/10 border-red-500/30';
      default:
        return 'bg-blue-500/10 border-blue-500/30';
    }
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Notifications</h1>
        <p className="text-gray-400">Stay updated with your library activity</p>
      </div>
      
      {/* Filter Tabs */}
      <div className="flex gap-2 border-b border-gray-700">
        {['all', 'unread', 'read'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 font-medium capitalize transition-colors ${
              filter === tab
                ? 'text-indigo-400 border-b-2 border-indigo-400'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            {tab}
            {tab === 'unread' && (
              <span className="ml-2 px-2 py-0.5 bg-indigo-600 text-white text-xs rounded-full">
                {userNotifications.filter(n => !n.read).length}
              </span>
            )}
          </button>
        ))}
      </div>
      
      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="card text-center py-12">
            <Bell size={48} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400">No notifications to display</p>
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`card border ${getNotificationBg(notification.type)} ${
                !notification.read ? 'border-l-4' : ''
              }`}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-white">
                      {notification.title}
                    </h3>
                    {!notification.read && (
                      <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mb-2">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatDateTime(notification.date)}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};