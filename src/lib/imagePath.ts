// Helper to get correct image path for both dev and production (GitHub Pages)
export function getImagePath(path: string): string {
    const basePath = process.env.NODE_ENV === 'production' ? '/Dr.-Mohamed-Osama-Sharkawi' : '';
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${basePath}${cleanPath}`;
}
