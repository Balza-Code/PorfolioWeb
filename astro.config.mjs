import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  base: '/PorfolioWeb' // Reemplaza 'nombre-del-repositorio' con el nombre de tu repositorio en GitHub
});