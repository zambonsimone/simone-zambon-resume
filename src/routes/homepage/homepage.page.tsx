import { useTranslation } from "react-i18next";
import { HtmlSanitizer } from "../../components/common/html-sanitizer/HtmlSanitizer";
import { TextContent } from "../../components/route/content/text-content/TextContent";
import { RouteTitle } from "../../components/route/title/RouteTitle";
import { HOMEPAGE_LABELS } from "./labels";

const {
    TITLE,
    SUBTITLE,
    SECTIONS,
    INSTRUCTIONS
} = HOMEPAGE_LABELS;

const Welcome: React.FC = () => {
    const { t } = useTranslation("homepage");
    return (
        <>
            <RouteTitle title={t(TITLE)} subtitle={<HtmlSanitizer htmlString={t(SUBTITLE)} />} />
            <h2>{t(INSTRUCTIONS.TITLE)}</h2>
            <ul role="list">
                {INSTRUCTIONS.LIST_ITEMS.map((item, index) => (
                    <li key={index} role="listitem">
                        <HtmlSanitizer htmlString={t(item)} />
                    </li>
                ))}
            </ul>
            <TextContent sections={SECTIONS} tFunction={t} />
        </>
    )
}
export default Welcome;