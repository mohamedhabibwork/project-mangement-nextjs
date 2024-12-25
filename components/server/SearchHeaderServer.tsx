import { Layout } from 'lucide-react';
import { SearchBarClient } from '@/components/client/SearchBarClient';
import { ThemeSelect } from '@/components/theme/ThemeSelect';
import { NotificationToggle } from '@/components/notifications/NotificationToggle';

export function SearchHeaderServer() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layout className="h-6 w-6" />
          <h1 className="text-xl font-bold">TaskFlow</h1>
        </div>
        <div className="flex items-center gap-4">
          <SearchBarClient />
          <NotificationToggle />
          <ThemeSelect />
        </div>
      </div>
    </header>
  );
}