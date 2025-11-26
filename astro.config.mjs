// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  output: 'static',
  site: 'https://events.dues-eckert.com',
  image: {
    responsiveStyles: true,
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.adobe({ id: 'egu1bvv' }),
        name: 'New Spirit',
        cssVariable: '--font-new-spirit',
        weights: [500, 700],
        styles: ['normal'],
        fallbacks: ['serif'],
      },
    ],
  },
});
