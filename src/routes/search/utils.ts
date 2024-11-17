import { ISection } from "../../types";
import { MAX_CHARS, PAGES } from "./constants";
import { ISearchResult } from "./search.page";

export function getShorterContent(content: string, searchTerms: string) {
    const formattedContent = content.toLocaleLowerCase().replace(/\n/g," ").replace(/ {2,}/g, " ");
    let [firstPart,lastPart] = formattedContent.split(searchTerms.toLowerCase());
    const firstPartLength = firstPart?.length ?? 0;
    const lastPartLength = lastPart?.length ?? 0;
    const totalLength = firstPartLength + searchTerms.length + lastPartLength;
    const maxCharsExcludingSearchTerms = MAX_CHARS - searchTerms.length;

    if (totalLength < MAX_CHARS) return [firstPart, searchTerms, lastPart];

    //calculating the chars amount that can be removed from the first part
    //if the chars amount to be removed is higher than the first part length, I will remove further chars from last part 
    const remainderFromFirstPart = Math.abs(Math.min(0, firstPartLength - maxCharsExcludingSearchTerms/2));
    //let charsToRemoveFromFirstPart = remainderFromFirstPart ? 0 : (firstPartLength - maxCharsExcludingSearchTerms/2);
    let charsToConsiderFromFirstPart = remainderFromFirstPart ? firstPartLength : maxCharsExcludingSearchTerms/2;

    //calculating the max chars amount that can be removed from the last part
    //if the chars amount to be removed is higher than the last part length, I will remove further chars from first part 
    const remainderFromLastPart = Math.abs(Math.min(0, lastPartLength - maxCharsExcludingSearchTerms/2));
    //let charsToRemoveFromLastPart = remainderFromLastPart ? 0 : (lastPartLength - maxCharsExcludingSearchTerms/2);
    let charsToConsiderFromLastPart = remainderFromLastPart ? lastPartLength : maxCharsExcludingSearchTerms/2;

    /*if (remainderFromLastPart) charsToRemoveFromFirstPart -= remainderFromLastPart; 
    if (remainderFromFirstPart) charsToRemoveFromLastPart -= remainderFromFirstPart;*/
    if (remainderFromLastPart) charsToConsiderFromFirstPart += remainderFromLastPart; 
    if (remainderFromFirstPart) charsToConsiderFromLastPart += remainderFromFirstPart;

    /*firstPart =  firstPart?.slice(charsToRemoveFromFirstPart, index) ?? "";
    lastPart = lastPart?.slice(0, lastPart.length - charsToRemoveFromLastPart) ?? "";*/
    const indexOfFirstIncludedChar = Math.max(0, firstPartLength - charsToConsiderFromFirstPart - 1);
    firstPart =  firstPart?.slice(indexOfFirstIncludedChar, firstPartLength - 1) ?? "";
    lastPart = lastPart?.slice(0, charsToConsiderFromLastPart) ?? "";

    return [
        !remainderFromFirstPart ? `...${firstPart}` : firstPart,
        searchTerms,
        !remainderFromLastPart ? `${lastPart}...` : lastPart
    ]
}

export function findResults(searchTerm: string): ISearchResult[] {
    const results = [] as ISearchResult[];
    PAGES.forEach(page => {
        const searchTermRegex = new RegExp(searchTerm,"i");
        const isIncludedInSubtitle = searchTermRegex.test(page.SUBTITLE);
        const foundParagraph = page.PARAGRAPHS.find(parag => searchTermRegex.test(parag));
        if (isIncludedInSubtitle || !!foundParagraph) {
            results.push({ 
                title: page.TITLE, 
                content: isIncludedInSubtitle ? page.SUBTITLE : foundParagraph,
                path: page.PATH
            })
        }
    })
    return results;
}

export function getParagraphsForSearch(sections: ISection[]) {
    return sections.reduce((paragraphs, currSection) => {
        return paragraphs = [...paragraphs, ...currSection.PARAGRAPHS]
    }, []);
}