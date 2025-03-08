import { NAMESPACES } from "../../i18next/i18next.contants";
import { IRouteContentOrganization } from "../../types";
import { BIO_LABELS } from "../bio/labels";
import { MAIN_EXPERIENCES_LABELS } from "../experiences/main/labels";
import { SIDE_EXPERIENCES_LABELS } from "../experiences/side/labels";
import { HOBBIES_LABELS } from "../hobbies/labels";
import { HOMEPAGE_LABELS } from "../homepage/labels";
import { PATHS, RoutePath } from "../paths";
import { IT_SKILLS_LABELS } from "../skills/it-skills/labels.it";
import { OTHER_SOFTWARE_SKILLS_LABELS } from "../skills/other-software-skills/labels";
import { SOFT_SKILLS_LABELS } from "../skills/soft-skills/labels";

export const MAX_CHARS = 500;

interface IRouteData {
    path: RoutePath,
    labels: IRouteContentOrganization,
    namespace: typeof NAMESPACES[number];
}

export const ROUTES_DATA: IRouteData[] = [
    { path: PATHS.HOMEPAGE, labels: HOMEPAGE_LABELS, namespace: "homepage" },
    { path: PATHS.BIO, labels: BIO_LABELS, namespace: "bio" },
    { path: PATHS.MAIN_EXPERIENCES, labels: MAIN_EXPERIENCES_LABELS, namespace: "mainExperiences" },
    { path: PATHS.SIDE_EXPERIENCES, labels: SIDE_EXPERIENCES_LABELS, namespace: "sideExperiences" },
    { path: PATHS.IT_SKILLS, labels: IT_SKILLS_LABELS, namespace: "itSkills" },
    { path: PATHS.SOFT_SKILLS, labels: SOFT_SKILLS_LABELS, namespace: "softSkills" },
    { path: PATHS.OTHER_SOFTWARE_SKILLS, labels: OTHER_SOFTWARE_SKILLS_LABELS, namespace: "otherSkills" },
    { path: PATHS.HOBBIES, labels: HOBBIES_LABELS, namespace: "hobbies" }
];