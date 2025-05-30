import {ThemeProvider as BaseThemeProvider} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export const ThemeProvider = createRemoteReactComponent(BaseThemeProvider);
