import React from 'react';
import {render} from 'react-dom';

import {Host} from './Host';
import '@shopify/polaris/dist/styles.css';

const root = document.getElementById('App');
render(<Host />, root);
