import { ProjectListServer } from '@/components/server/ProjectListServer';
import { SearchHeaderServer } from '@/components/server/SearchHeaderServer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SearchHeaderServer />
      <main className="container mx-auto px-4 py-8">
        <ProjectListServer />
      </main>
    </div>
  );
}