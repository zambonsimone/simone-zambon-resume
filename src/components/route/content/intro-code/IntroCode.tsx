import { useTranslation } from "react-i18next";
import { useResolution } from "../../../../hooks/useResolution";
import { Accordion } from "../../../common/accordion/Accordion";
import { getLinesCount, indentCode } from "../utils";
import { CodeSnippet } from "./code-snippet/CodeSnippet";
import style from "./IntroCode.module.scss";
import { INTRO_CODE_HEADER_TEXT } from "./labels";
import { LinesCounter } from "./lines-counter/LinesCounter";

export const IntroCode: React.FC<{ content: string }> = ({ content }) => {
    const { isTablet } = useResolution();
    const code = isTablet ? indentCode(content) : content;
    const { t } = useTranslation("global");

    return (
        <Accordion
            className={style.introCode}
            header={t(INTRO_CODE_HEADER_TEXT)}
            content={(
                <>
                    <div className={style.content}>
                        <LinesCounter count={getLinesCount(code)} />
                        <CodeSnippet content={code} className={style.code} />
                    </div>
                </>
            )}
        />
    )
}