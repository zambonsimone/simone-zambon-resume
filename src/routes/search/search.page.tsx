import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { Button } from "../../components/common/button/generic/Button";
import { HtmlSanitizer } from "../../components/common/html-sanitizer/HtmlSanitizer";
import { Icon } from "../../components/common/icons/Icon";
import { PATHS, RoutePath } from "../paths";
import { BACK_TO_HOMEPAGE, NO_RESULTS_FOUND, SEARCH_SUGGESTION } from "./labels";
import style from "./search.page.module.scss";
import { findResults, getShorterContent } from "./utils";

export interface ISearchResult {
    title: string;
    content: string;
    path: RoutePath;
}

const Search: React.FC = () => {
    const history = useHistory();
    const [results, setResults] = useState<ISearchResult[]>(null);
    const { t } = useTranslation();
    const searchTerm = history.location.state as string;

    useEffect(() => {
        const found = findResults(searchTerm, t);
        setResults(found);
    }, [searchTerm, t])

    const showSearchSuggestion = !searchTerm;

    if (showSearchSuggestion) {
        return (
            <div>{SEARCH_SUGGESTION}</div>
        )
    }
    if (results?.length === 0) {
        return (
            <div className={style.noResults}>
                <Icon icon="noResults" className={style.noResultsIcon} />
                <HtmlSanitizer className={style.noResultsText} htmlString={NO_RESULTS_FOUND} />
                <Button onClick={() => history.push(PATHS.HOMEPAGE)} text={BACK_TO_HOMEPAGE} />
            </div>
        )
    }
    return (
        <>
            {results?.map(result => {
                const [firstPart, content, lastPart] = getShorterContent(result.content, searchTerm);
                return (
                    <div
                        role="button"
                        tabIndex={0}
                        className={style.resultContainer}
                        onClick={() => history.push(result.path)}
                        key={result.path}
                    >
                        <h2 className={style.resultTitle}>{result.title}</h2>
                        <p className={style.resultContent}>
                            <HtmlSanitizer htmlString={firstPart} element="span" />
                            <span className={style.highlightedSearchTerms}>
                                <HtmlSanitizer htmlString={content} element="span" />
                            </span>
                            <HtmlSanitizer htmlString={lastPart} element="span" />
                        </p>
                    </div>
                )
            })}
        </>
    )
}

export default Search