// tailwind.config.js
import flowbite from 'flowbite/plugin';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  plugins: [
    flowbite,
    forms,
    typography
  ],
  darkMode: 'class'
};