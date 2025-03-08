import { useTranslation } from "react-i18next";
import { IntroCode } from "../../components/route/content/intro-code/IntroCode";
import { TextContent } from "../../components/route/content/text-content/TextContent";
import { RouteTitle } from "../../components/route/title/RouteTitle";
import { HOBBIES_LABELS } from "./labels";

const { TITLE, SUBTITLE, INTRO_CODE, SECTIONS } = HOBBIES_LABELS;

const Hobbies: React.FC = () => {
    const { t } = useTranslation("hobbies");
    return (
        <main>
            <RouteTitle title={t(TITLE)} subtitle={t(SUBTITLE)} />
            <IntroCode content={INTRO_CODE} />
            <TextContent sections={SECTIONS} tFunction={t} />
        </main>
    )
}
export default Hobbies;
