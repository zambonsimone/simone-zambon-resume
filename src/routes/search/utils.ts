import { TFunction } from "i18next";
import { IRouteContentOrganization } from "../../types";
import { HTML_TAG_REGEX } from "../../utils/regexes";
import { MAX_CHARS, ROUTES_DATA } from "./constants";
import { ISearchResult } from "./search.page";

export function getShorterContent(content: string, searchTerms: string) {
    const formattedContent = content.replace(/\n/g, " ").replace(/ {2,}/g, " ");
    let [firstPart, lastPart] = formattedContent.split(new RegExp(searchTerms, "i"));
    const firstPartLength = firstPart?.length ?? 0;
    const lastPartLength = lastPart?.length ?? 0;
    const totalLength = firstPartLength + searchTerms.length + lastPartLength;
    const maxCharsExcludingSearchTerms = MAX_CHARS - searchTerms.length;

    if (totalLength < MAX_CHARS) return [firstPart, searchTerms, lastPart];

    //if first part length is lower than max chars, the remainder value should be used to consider last part length
    const remainderFromFirstPart = Math.abs(Math.min(0, firstPartLength - maxCharsExcludingSearchTerms / 2));
    let charsToConsiderFromFirstPart = remainderFromFirstPart ? firstPartLength : maxCharsExcludingSearchTerms / 2;

    //if last part length is lower than max chars, the remainder value should be used to consider first part length
    const remainderFromLastPart = Math.abs(Math.min(0, lastPartLength - maxCharsExcludingSearchTerms / 2));
    let charsToConsiderFromLastPart = remainderFromLastPart ? lastPartLength : maxCharsExcludingSearchTerms / 2;

    if (remainderFromLastPart) charsToConsiderFromFirstPart += remainderFromLastPart;
    if (remainderFromFirstPart) charsToConsiderFromLastPart += remainderFromFirstPart;

    const indexOfFirstIncludedChar = Math.max(0, firstPartLength - charsToConsiderFromFirstPart - 1);
    firstPart = firstPart?.slice(indexOfFirstIncludedChar, firstPartLength - 1) ?? "";
    lastPart = lastPart?.slice(0, charsToConsiderFromLastPart) ?? "";

    return [
        !remainderFromFirstPart ? `...${firstPart}` : firstPart,
        searchTerms,
        !remainderFromLastPart ? `${lastPart}...` : lastPart
    ]
}

export function findResults(searchTerm: string, t: TFunction): ISearchResult[] {
    const results = [] as ISearchResult[];
    ROUTES_DATA.forEach(({ path, labels, namespace: ns }) => {
        const { TITLE, SUBTITLE, SECTIONS } = labels;
        const tTitle = t(TITLE, { ns });
        const tSubtitle = t(SUBTITLE, { ns });
        const PARAGRAPHS = getParagraphsForSearch(SECTIONS).map(parag => t(parag, { ns }));
        const searchTermRegex = new RegExp(searchTerm, "i");
        const isIncludedInSubtitle = searchTermRegex.test(tSubtitle);
        const foundParagraph = PARAGRAPHS
            .find(parag => searchTermRegex.test(parag))
            ?.replace(HTML_TAG_REGEX, "");
        if (isIncludedInSubtitle || !!foundParagraph) {
            results.push({
                title: tTitle,
                content: isIncludedInSubtitle ? tSubtitle.replace(HTML_TAG_REGEX, "") : foundParagraph,
                path
            })
        }
    })
    return results;
}

export function getParagraphsForSearch(sections: IRouteContentOrganization["SECTIONS"]): string[] {
    return sections.reduce((paragraphs, currSection) => {
        if (currSection.SUB_SECTIONS)
            return [...paragraphs, ...getParagraphsForSearch(currSection.SUB_SECTIONS)]
        return paragraphs = [...paragraphs, ...currSection.PARAGRAPHS]
    }, []);
}