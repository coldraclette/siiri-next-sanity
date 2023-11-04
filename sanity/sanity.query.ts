import { client } from './lib/client';

export async function getSingleProjectData(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
      title,
      "year": year,
      "type": type->{
        _id,
        title
      },
      hasProjectPage,
      landingPageWeight,
      projectListWeight,
      content,
      introduction,
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
        // If there is an alt field for the video, you can query it like the images.
      }
    },
  }`;

  const projects = await client.fetch(query);
  return projects;
}
