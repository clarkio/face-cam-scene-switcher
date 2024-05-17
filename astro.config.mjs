import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://clarkio.com/',
  base: '/stream-tools/face-cam-scene-switcher',
  integrations: [svelte(), tailwind()]
});
