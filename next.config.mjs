import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import forms from '@tailwindcss/forms';

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  plugins: [
    forms
  ],
  images: {
    domains: [
      "assets.website-files.com", 
      "cdn.sanity.io",
      "source.unsplash.com",
      "i.ibb.co",
      "svgrepo.com",
      "tailwindui.com"
    ],
 
  },
};

export default nextConfig;
