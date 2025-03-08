import { lazy, LazyExoticComponent } from "react";
import { RouteProps } from "react-router";
import { IconName } from "../components/common/icons/icons-paths";
import { ROUTES_NAMES } from "./labels";
import { PATHS, RouteName, RoutePath } from "./paths";

export interface IRoute {
    path: RoutePath;
    component: RouteProps["component"];
    name: RouteName;
    displayedName: string;
    subRoutes?: IRoute[];
    hideNavLink?: boolean;
    icon?: IconName;
    header?: LazyExoticComponent<React.ComponentType>
}

export const SKILLS_ROUTES: IRoute[] = [
    {
        path: PATHS.IT_SKILLS,
        component: lazy(() => import("../routes/skills/it-skills/it-skills.page")),
        displayedName: ROUTES_NAMES.IT_SKILLS,
        name: "IT_SKILLS",
        icon: "code"
    },
    {
        path: PATHS.SOFT_SKILLS,
        component: lazy(() => import("../routes/skills/soft-skills/soft-skills.page")),
        displayedName: ROUTES_NAMES.SOFT_SKILLS,
        name: "SOFT_SKILLS",
        icon: "bulb"
    },
    {
        path: PATHS.OTHER_SOFTWARE_SKILLS,
        component: lazy(() => import("../routes/skills/other-software-skills/other-software-skills.page")),
        displayedName: ROUTES_NAMES.OTHER_SOFTWARE_SKILLS,
        name: "OTHER_SOFTWARE_SKILLS",
        icon: "imageMultiple"
    }
];

export const EXPERIENCES_ROUTES: IRoute[] = [
    {
        path: PATHS.MAIN_EXPERIENCES,
        component: lazy(() => import("../routes/experiences/main/main.page")),
        displayedName: ROUTES_NAMES.MAIN_EXPERIENCES,
        name: "MAIN_EXPERIENCES",
        icon: "keyboard",
    },
    {
        path: PATHS.SIDE_EXPERIENCES,
        component: lazy(() => import("../routes/experiences/side/side.page")),
        displayedName: ROUTES_NAMES.SIDE_EXPERIENCES,
        name: "SIDE_EXPERIENCES",
        icon: "cocktail"
    },
]

export const ROUTES: IRoute[] = [
    {

        path: PATHS.HOMEPAGE,
        component: lazy(() => import("../routes/homepage/homepage.page")),
        displayedName: ROUTES_NAMES.HOMEPAGE,
        name: "HOMEPAGE",
        icon: "home"
    },
    {
        path: PATHS.BIO,
        component: lazy(() => import("../routes/bio/bio.page")),
        displayedName: ROUTES_NAMES.BIO,
        name: "BIO",
        icon: "me"
    },
    {
        path: PATHS.SKILLS,
        component: lazy(() => import("../routes/skills/skills.page")),
        displayedName: ROUTES_NAMES.SKILLS,
        name: "SKILLS",
        subRoutes: SKILLS_ROUTES,
        icon: "skills",
        header: lazy(() => import("../components/skills/skill-level-legenda/SkillLevelLegenda"))
    },
    {   path: PATHS.EXPERIENCES,
        component: lazy(() => import("../routes/experiences/experiences.page")),
        displayedName: ROUTES_NAMES.EXPERIENCES,
        name: "EXPERIENCES",
        subRoutes: EXPERIENCES_ROUTES,
        icon: "briefCase",
    },
    {
        path: PATHS.HOBBIES,
        component: lazy(() => import("../routes/hobbies/hobbies.page")),
        name: "HOBBIES",
        displayedName: ROUTES_NAMES.HOBBIES,
        icon: "music"
    },
    {
        path: PATHS.CONTACTS,
        component: lazy(() => import("../routes/contact-me/contact-me.page")),
        name: "CONTACTS",
        displayedName: ROUTES_NAMES.CONTACT_ME,
        icon: "phone"
    },
    {
        path: PATHS.SEARCH,
        component: lazy(() => import("../routes/search/search.page")),
        name: "SEARCH",
        displayedName: ROUTES_NAMES.SEARCH,
        hideNavLink: true,
    },
    {
        path: PATHS.FILES,
        component: lazy(() => import("../routes/files/files.page")),
        name: "FILES",
        displayedName: ROUTES_NAMES.FILES,
        icon: "fileDownload"
    }
]