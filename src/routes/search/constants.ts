import { BIO_LABELS } from "../bio/labels";
import { MAIN_EXPERIENCES_LABELS } from "../experiences/main/labels";
import { PATHS, RoutePath } from "../paths";
import { getParagraphsForSearch } from "./utils";

export const MAX_CHARS = 500;

interface SectionData {
    PATH: RoutePath,
    TITLE: string,
    SUBTITLE: string,
    PARAGRAPHS: string[]
}

const BIO: SectionData = { 
    PATH: PATHS.BIO,
    TITLE: BIO_LABELS.TITLE, 
    SUBTITLE: BIO_LABELS.SUBTITLE, 
    PARAGRAPHS: getParagraphsForSearch(BIO_LABELS.SECTIONS)
};
const MAIN_EXPERIENCES: SectionData = {
    PATH: PATHS.MAIN_EXPERIENCES,
    TITLE: MAIN_EXPERIENCES_LABELS.TITLE,
    SUBTITLE: MAIN_EXPERIENCES_LABELS.SUBTITLE,
    PARAGRAPHS: []
}
export const PAGES = [BIO, MAIN_EXPERIENCES];