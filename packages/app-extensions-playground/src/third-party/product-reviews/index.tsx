import React from 'react';
import {render, ExtensionPoint} from '@shopify/app-extensions-renderer';

import App from './App';

render(ExtensionPoint.AppLink, () => <App />);
