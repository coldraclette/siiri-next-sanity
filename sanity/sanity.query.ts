import { Project } from '@/app/(site)/types';

import { client } from './lib/client';

export async function getSingleProjectData(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
      title,
      introduction,
      "content": content[]{
        ...,
        _type == 'projectImage' => {
          alt,
          "lqip": asset->metadata.lqip,
          "url": asset->url,
          "dimensions": asset->metadata.dimensions
        }, 
      },
      seoTitle,
      seoDescription,
      "seoImage": seoImage.asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions
        }
      }
    }`;

  const project = await client.fetch(query, { slug });
  return project;
}

export async function getAllProjectWithPage() {
  const query = `*[_type == "project" && hasProjectPage == true] | order(landingPageWeight desc) {
    _id,
    title,
    slug,
    hasProjectPage,
    "thumbnail": {
      "desktopImage": {
        "asset": thumbnail.image.asset->{
          _id,
          url,
          metadata {
            lqip,
            dimensions
          }
        },
        "alt": thumbnail.image.alt
      },
      "mobileImage": {
        "asset": thumbnail.mobileImage.asset->{
          _id,
          url,
          metadata {
            lqip,
            dimensions
          }
        },
        "alt": thumbnail.mobileImage.alt
      },
      "video": thumbnail.video.asset->{
        _id,
        url
      }
    },
  }`;

  const projects = await client.fetch(query);
  return projects;
}

export async function getAllProjects() {
  const query = `*[_type == "project"] | order(year desc, projectListWeight desc) {
    _id,
    title,
    slug,
    "type": type->title,
    published,
    year,
    url
  }`;

  const projects = await client.fetch(query);
  return projects;
}

export async function getProjectNavgation(slug: string) {
  const query = `*[_type == "project" && hasProjectPage == true] | order(landingPageWeight desc) {
    _id,
    slug,
  }`;

  const projects: Project[] = await client.fetch(query);

  const currentIndex = projects.findIndex(
    (project: any) => project.slug?.current === slug
  );

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  const prevIndex =
    currentIndex - 1 >= 0 ? currentIndex - 1 : projects.length - 1;
  const nextIndex = currentIndex + 1 < projects.length ? currentIndex + 1 : 0;

  return {
    prev: projects[prevIndex],
    next: projects[nextIndex],
  };
}

export async function getInformationPageData() {
  const query = `*[_type == "informationPage"][0] {
    content,
    seoTitle,
    seoDescription,
    "seoImage": seoImage.asset->{
      _id,
      url,
      metadata {
        lqip,
        dimensions
      }
    }
  }`;

  const informationPage = await client.fetch(query);
  return informationPage;
}
