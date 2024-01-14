export interface LandingPageProjects {
  projects: Project[];
}

export interface Project {
  _id: string;
  title: string;
  slug: { current: string; _type: string };
  landingPageWeight: number;
  sortedWeight: number;
  thumbnail: {
    desktopImage: {
      asset: {
        _id: string;
        url: string;
        alt: string;
        metadata: {
          lqip: string;
          dimensions: { width: number; height: number };
        };
      };
      alt: string;
    };
    mobileImage: {
      asset: {
        _id: string;
        url: string;
        alt: string;
        metadata: {
          lqip: string;
          dimensions: { width: number; height: number };
        };
      };
      alt: string;
    };
    video: null;
  };
}

export interface SingleProject {
  _id: string;
  title: string;
  introduction: IntroductionContent[];
  content: ProjectContent[];
  seoTitle: string;
  seoDescription: string;
  seoImage: {
    asset: {
      _id: string;
      url: string;
      metadata: {
        lqip: string;
        dimensions: { width: number; height: number };
      };
    };
  };
}

export interface ProjectContent {
  _type: string;
  _key: string;
  alt?: string;
  asset?: {
    _ref: string;
    _type: string;
  };
  dimensions?: {
    _type: string;
    width: number;
    aspectRatio: number;
    height: number;
  };
  lqip?: string;
  url?: string;
  markDefs?: any[];
  children?: any[];
  style?: string;
}

export interface IntroductionContent {
  _type: string;
  _key: string;
  style: string;
  markDefs: any[];
  children: any[];
}

export interface PreviousProject {
  _id: string;
  slug: { current: string; _type: string };
}

export interface NextProject {
  _id: string;
  slug: { current: string; _type: string };
}

export interface InformationPage {
  content: InformationPageContent[];
  seoTitle: string;
  seoDescription: string;
  seoImage: {
    asset: {
      _id: string;
      url: string;
      metadata: {
        lqip: string;
        dimensions: { width: number; height: number };
      };
    };
  };
}

export interface InformationPageContent {
  _type: string;
  _key: string;
  style: string;
  markDefs: any[];
  children: any[];
}

export interface ProjectListItem {
  _id: string;
  title: string;
  slug: { current: string; _type: string };
  type: string;
  published: {
    name: string;
    url: string;
  };
  year: string;
  url: string;
}

export interface PublishedProps {
  name: string;
  url: string;
}
