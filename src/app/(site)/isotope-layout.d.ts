declare module 'isotope-layout' {
  interface IsotopeOptions {
    itemSelector: string;
    masonry: {
      columnWidth: number;
      gutter: number;
    };
  }

  export default class Isotope {
    constructor(selector: string | HTMLElement, options: IsotopeOptions);
    shuffle(): void;
    destroy(): void;
  }
}