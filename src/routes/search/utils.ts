import { ISection } from "../../types";
import { MAX_CHARS, PAGES } from "./constants";
import { ISearchResult } from "./search.page";

export function getShorterContent(content: string, searchTerms: string) {
    const index = content.indexOf(searchTerms);
    let [firstPart,lastPart] = content.split(searchTerms);
    const totalLength = firstPart.length + searchTerms.length + lastPart.length;
    const totalCharsToBeRemoved = totalLength - MAX_CHARS;

    //calculating the chars amount that can be removed from the first part
    //if the chars amount to be removed is higher than the first part length, I will remove further chars from last part 
    const remainderFromFirstPart = Math.abs(Math.min(0, firstPart.length - totalCharsToBeRemoved/2));
    let charsToRemoveFromFirstPart = totalCharsToBeRemoved/2 - remainderFromFirstPart;
    
    //calculating the max chars amount that can be removed from the last part
    //if the chars amount to be removed is higher than the last part length, I will remove further chars from first part 
    const remainderFromLastPart = Math.abs(Math.min(0, lastPart.length - totalCharsToBeRemoved/2));
    const charsToRemoveFromLastPart = totalCharsToBeRemoved/2 - remainderFromLastPart;
    if (remainderFromLastPart) charsToRemoveFromFirstPart += remainderFromLastPart; 

    firstPart =  firstPart.slice(charsToRemoveFromFirstPart, index);
    lastPart = lastPart.slice(0, lastPart.length - charsToRemoveFromLastPart);

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
        const isIncludedInSubtitle = page.SUBTITLE.match(searchTermRegex);
        const foundParagraph = page.PARAGRAPHS.find(parag => parag.match(searchTermRegex));
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