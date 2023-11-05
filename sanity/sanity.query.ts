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
