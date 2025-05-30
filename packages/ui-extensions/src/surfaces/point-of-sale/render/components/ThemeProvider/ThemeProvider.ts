import {createRemoteComponent} from '@remote-ui/core';

export interface ThemeProviderProps {
  /**
   * The base theme to use for the extension.
   */
  baseTheme?: any;
  /**
   * The children of the theme provider.
   */
  children: React.ReactNode;
}

export const ThemeProvider = createRemoteComponent<
  'ThemeProvider',
  ThemeProviderProps
>('ThemeProvider');
