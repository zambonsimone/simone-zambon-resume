import { useTranslation } from "react-i18next";
import { HtmlSanitizer } from "../../../components/common/html-sanitizer/HtmlSanitizer";
import { IntroCode } from "../../../components/route/content/intro-code/IntroCode";
import { TextContent } from "../../../components/route/content/text-content/TextContent";
import { RouteTitle } from "../../../components/route/title/RouteTitle";
import { IT_SKILLS_LABELS } from "./labels.it";

const { TITLE, SUBTITLE, INTRO_CODE, SECTIONS } = IT_SKILLS_LABELS;

const ITSkills: React.FC = () => {
    const { t } = useTranslation("itSkills");
    return (
        <main>
            <RouteTitle title={t(TITLE)} subtitle={<HtmlSanitizer htmlString={t(SUBTITLE)} />} />
            <IntroCode content={INTRO_CODE} />
            <TextContent sections={SECTIONS} tFunction={t} />
        </main>
    )
}

export default ITSkills;