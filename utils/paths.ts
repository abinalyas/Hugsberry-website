/**
 * Get the base URL for assets (handles GitHub Pages subdirectory)
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present, we'll add the base URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Vite's BASE_URL includes trailing slash, so we don't need to add one
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

