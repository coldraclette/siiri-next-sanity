export interface LandingPageProjects {
  projects: Project[];
}

export interface Project {
  _id: string;
  title: string;
  slug: { current: string; _type: string };
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
