export const NAMESPACES = [
    "homepage",
    "bio",
    "itSkills",
    "softSkills",
    "otherSkills",
    "mainExperiences",
    "sideExperiences",
    "hobbies",
    "contacts",
    "files",
    "global"
] as const;

export type LanguageItem = { lang: string, icon: string, label: string };
export const LANGUAGES = [
    { lang: "it", icon: "/flags/italy.svg", label: "Italiano" },
    { lang: "en", icon: "/flags/uk.svg", label: "English" },
    { lang: "no", icon: "/flags/norway.svg", label: "Norsk" },
] as const;

export const SUPPORTED_LNGS = ["it", "en", "no"] satisfies Array<typeof LANGUAGES[number]["lang"]>;