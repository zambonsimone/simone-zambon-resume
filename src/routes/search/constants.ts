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
    PATH: RoutePath,
    LABELS: IRouteContentOrganization
}

export const ROUTES_DATA: IRouteData[] = [
    { PATH: PATHS.HOMEPAGE, LABELS: HOMEPAGE_LABELS },
    { PATH: PATHS.BIO, LABELS: BIO_LABELS },
    { PATH: PATHS.MAIN_EXPERIENCES, LABELS: MAIN_EXPERIENCES_LABELS },
    { PATH: PATHS.SIDE_EXPERIENCES, LABELS: SIDE_EXPERIENCES_LABELS },
    { PATH: PATHS.IT_SKILLS, LABELS: IT_SKILLS_LABELS },
    { PATH: PATHS.SOFT_SKILLS, LABELS: SOFT_SKILLS_LABELS },
    { PATH: PATHS.OTHER_SOFTWARE_SKILLS, LABELS: OTHER_SOFTWARE_SKILLS_LABELS },
    { PATH: PATHS.HOBBIES, LABELS: HOBBIES_LABELS }
];