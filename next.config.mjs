/** @type {import('next').NextConfig} */
// Trigger build for GitHub Pages configuration
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = 'NDC';

const basePath = isGithubActions ? `/${repo}` : '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  images: {
    unoptimized: true, // Required for static export
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
