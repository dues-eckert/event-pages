/**
 * Module declarations for UnicornStudio UMD library
 */

interface UnicornStudioAPI {
  init(): Promise<void>;
  isInitialized?: boolean;
}

declare module '../scripts/unicornStudio.umd.js' {
  const UnicornStudio: UnicornStudioAPI;
  export default UnicornStudio;
}

declare global {
  interface Window {
    UnicornStudio: UnicornStudioAPI;
  }
}

export {};
