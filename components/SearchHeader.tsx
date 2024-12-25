import { Layout } from 'lucide-react';
import { SearchBar } from '@/components/SearchBar';
import { ThemeToggle } from '@/components/ThemeToggle';

export function SearchHeader() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layout className="h-6 w-6" />
          <h1 className="text-xl font-bold">TaskFlow</h1>
        </div>
        <div className="flex items-center gap-4">
          <SearchBar />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}