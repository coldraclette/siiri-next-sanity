import {
  getAllProjects,
  getInformationPageData,
} from '../../../../sanity/sanity.query';
import TextContent from '../components/project/textContent';
import ProjectTable from '../components/projectTable';
import { InformationPage, ProjectListItem } from '../types';

export const revalidate = 120;

export default async function Page() {
  const data: InformationPage = await getInformationPageData();

  const projects: ProjectListItem[] = await getAllProjects();

  if (!data) {
    return null;
  }

  if (!projects) {
    return null;
  }

  return (
    <div>
      <TextContent content={data.content} textSpacing={true} />
      <ProjectTable projects={projects} />
    </div>
  );
}
