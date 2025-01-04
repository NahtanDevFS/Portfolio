declare module 'particles.js' {
    export {};
  }
  
  interface Window {
    particlesJS: {
      (tagId: string, params: any): void;
      (params: any): void;
      load(tagId: string, pathConfigJson: string, callback: () => void): void;
    };
  }