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
        <main>
            <RouteTitle
                title={t(TITLE)}
                subtitle={
                    <HtmlSanitizer htmlString={t(SUBTITLE)} role="presentation" />
                }
            />
            <h2>{t(INSTRUCTIONS.TITLE)}</h2>
            <ul>
                {INSTRUCTIONS.LIST_ITEMS.map((item, index) => (
                    <li key={index}>
                        <HtmlSanitizer htmlString={t(item)} />
                    </li>
                ))}
            </ul>
            <TextContent sections={SECTIONS} tFunction={t} />
        </main>
    )
}
export default Welcome;