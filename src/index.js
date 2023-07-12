import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';

import App from './App';

const colorA = [
  '#e5fbff',
  '#b8ebfa',
  '#8adaf7',
  '#5ec6f6',
  '#3caef5',
  '#2d8ddc',
  '#2269ab',
  '#174779',
  '#0a2949',
  '#000d1a',
];

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MantineProvider
      theme={{
        colors: {
          brand: colorA,
        },
        primaryColor: 'brand',
        primaryShade: 8, // Disable if brand = colorB
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <App />
    </MantineProvider>
  </StrictMode>
);
