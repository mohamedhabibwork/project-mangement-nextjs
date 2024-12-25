'use client';

import { useState, useEffect } from 'react';
import { Bell, BellOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { requestNotificationPermission } from '@/lib/firebase/config';
import { toast } from 'sonner';

export function NotificationToggle() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  useEffect(() => {
    const checkPermission = async () => {
      const permission = await Notification.permission;
      setNotificationsEnabled(permission === 'granted');
    };
    checkPermission();
  }, []);

  const handleToggle = async () => {
    if (notificationsEnabled) {
      setNotificationsEnabled(false);
      toast.success('Notifications disabled');
      return;
    }

    const token = await requestNotificationPermission();
    if (token) {
      setNotificationsEnabled(true);
      toast.success('Notifications enabled');
    } else {
      toast.error('Failed to enable notifications');
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      title={notificationsEnabled ? 'Disable notifications' : 'Enable notifications'}
    >
      {notificationsEnabled ? (
        <Bell className="h-5 w-5" />
      ) : (
        <BellOff className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle notifications</span>
    </Button>
  );
}