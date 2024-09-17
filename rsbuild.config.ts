import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    htmlFallback: 'index',
    publicDir: [
      {
        name: 'public',
      }
    ],
  },
  html: {
    template: 'index.html',
    meta: {
      charset: {
        charset: 'UTF-8',
      },
      title: 'Music widgets components-v2.1 - Frankuxui',
      description: 'Music widgets components-v2.1 - Frankuxui. A collection of music widgets components for React. This components are designed to be used in music applications.',
    }
  },
});
