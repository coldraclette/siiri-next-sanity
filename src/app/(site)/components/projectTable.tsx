'use client';

import { useState } from 'react';
import Link from 'next/link';

import { ProjectListItem, PublishedProps } from '../types';
import Modal from './modal';

interface ProjectsTableProps {
  projects: ProjectListItem[];
}

export default function ProjectTable({ projects }: ProjectsTableProps) {
  const [modal, setModal] = useState({ active: false, index: 0 });
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
        <thead className="hidden md:block">
          <tr className="mb-2 grid grid-cols-4 gap-8 md:grid-cols-[200px_1fr_1fr_1fr]">
            <th className="text-left font-normal">Type</th>
            <th className="text-left font-normal">Title</th>
            <th className="text-left font-normal">Published by</th>
            <th className="text-left font-normal">Year</th>
          </tr>
        </thead>
        <tbody className="flex flex-col gap-4 md:gap-[3px]">
          {projects.map((project, index) => (
            <tr
              key={project._id}
              className="grid md:grid-cols-[200px_1fr_1fr_1fr] md:gap-8"
              onMouseEnter={() => {
                setModal({ active: true, index });
              }}
              onMouseLeave={() => {
                setModal({ active: false, index });
              }}
            >
              <td className="leading-4">{project.type ? project.type : ''}</td>
              <td className="leading-4">{renderProjectTitle(project)}</td>
              <td className="leading-4">
                {renderPublisher(project.published)}
              </td>
              <td className="leading-4">{project.year ? project.year : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal projects={projects} modal={modal} />
    </div>
  );
}
