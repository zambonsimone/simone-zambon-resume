import { MEDIA_QUERIES } from "./constants";

export type Size = "normal" | "small";
export type Resolution = keyof typeof MEDIA_QUERIES;
export type MediaQuery = typeof MEDIA_QUERIES[keyof typeof MEDIA_QUERIES];
interface IPlace {
    NAME: string;
    LOCATION: string[];
}
interface IWhere {
    PLACE: IPlace;
    DATES: [string, string];
}
export interface ISection {
    TITLE?: string;
    DETAILS?: {
        LEVEL?: number;
        LEVEL_NAME?: string;
        TEXT?: string;
        WHERE?: IWhere[]
    };
    PARAGRAPHS?: string[];
}
export interface IRouteContentOrganization {
    TITLE: string;
    SUBTITLE?: string;
    INTRO_CODE?: string;
    SECTIONS: Array<ISection & {
        SUB_SECTIONS?: ISection[]
    }>
}