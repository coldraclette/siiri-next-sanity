import Link from 'next/link';

import { ProjectListItem, PublishedProps } from '../types';

interface ProjectsTableProps {
  projects: ProjectListItem[];
}

export default function ProjectTable({ projects }: ProjectsTableProps) {
  const renderProjectTitle = (project: ProjectListItem) => {
    if (!project.title) {
      return '';
    }

    if (project.url) {
      return (
        <Link
          className="hover:underline"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.title}
        </Link>
      );
    }

    if (project.slug?.current) {
      return (
        <Link className="hover:underline" href={`/${project.slug?.current}`}>
          {project.title}
        </Link>
      );
    }

    return project.title;
  };

  const renderPublisher = (publisher: PublishedProps) => {
    if (!publisher) {
      return '';
    }

    if (publisher.url) {
      return (
        <Link
          className="hover:underline"
          href={publisher.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {publisher.name}
        </Link>
      );
    }

    return publisher.name;
  };

  return (
    <div className="mt-10 md:mt-20">
      <h2>Project List</h2>
      <table className="mt-2">
        <thead>
          <tr className="mb-2 grid grid-cols-4 md:grid-cols-[200px_1fr_1fr_1fr] gap-8">
            <th className="text-left font-normal">Type</th>
            <th className="text-left font-normal">Title</th>
            <th className="text-left font-normal">Published by</th>
            <th className="text-left font-normal">Year</th>
          </tr>
        </thead>
        <tbody className="flex flex-col gap-1">
          {projects.map((project) => (
            <tr key={project._id} className="grid grid-cols-4 md:grid-cols-[200px_1fr_1fr_1fr] gap-8">
              <td>{project.type ? project.type : ''}</td>
              <td>{renderProjectTitle(project)}</td>
              <td>{renderPublisher(project.published)}</td>
              <td>{project.year ? project.year : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
