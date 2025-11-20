/**
 * Get the correct image path with base URL for GitHub Pages
 */
export const getImagePath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Get base URL from Vite (includes trailing slash)
  const base = import.meta.env.BASE_URL || '/';
  // Ensure base has trailing slash
  const baseWithSlash = base.endsWith('/') ? base : `${base}/`;
  return `${baseWithSlash}${cleanPath}`;
};

