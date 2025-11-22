/**
 * TypeScript declarations for UnicornStudio library
 * https://www.unicorn.studio/
 */

export interface UnicornStudioAPI {
  /**
   * Initialize the UnicornStudio runtime
   * @returns Promise that resolves when initialization is complete
   */
  init(): Promise<void>;

  /**
   * Flag to track if UnicornStudio has been initialized
   */
  isInitialized?: boolean;

  /**
   * Default export from the UMD module
   */
  default?: UnicornStudioAPI;
}

declare global {
  interface Window {
    /**
     * UnicornStudio global API
     */
    UnicornStudio: UnicornStudioAPI;
  }
}

export {};
