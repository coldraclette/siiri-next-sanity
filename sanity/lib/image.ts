import { buildFileUrl, parseAssetId } from '@sanity/asset-utils';
import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max').url();
};

export const urlForVideo = (video: any) => {
  const id = video.asset._ref;
  return buildFileUrl(parseAssetId(id), {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
  });
};
