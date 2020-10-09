import * as React from 'react';
import * as ReactDOM from 'react-dom';

import '@shopify/polaris/dist/styles.css';

import {App} from './foundation';

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
