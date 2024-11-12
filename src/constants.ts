export const MEDIA_QUERIES = {
    MOBILE: `(max-width: 480px)`,
    TABLET: `(min-width: 480px) and (max-width: 1024px)`,
    DESKTOP: `(min-width: 1024px)`,
} as const;
export const RESOLUTIONS = ["desktop","tablet","mobile"] as const; 
