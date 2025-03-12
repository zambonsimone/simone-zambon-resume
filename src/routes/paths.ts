export const PATHS = {
    HOMEPAGE: "/welcome",
    BIO: "/bio",
    SKILLS: "/skills",
    IT_SKILLS: "/skills/it-skills",
    SOFT_SKILLS: "/skills/soft-skills",
    OTHER_SOFTWARE_SKILLS: "/skills/other-software-skills",
    EXPERIENCES: "/experiences",
    MAIN_EXPERIENCES: "/experiences/main-experiences",
    SIDE_EXPERIENCES: "/experiences/secondary-experiences",
    HOBBIES: "/hobbies",
    CONTACTS: "/contacts",
    FILES: "/files",
} as const;

export type RoutePath = typeof PATHS[keyof typeof PATHS];
export type RouteName = keyof typeof PATHS;