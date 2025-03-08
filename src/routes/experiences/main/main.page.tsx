import { useTranslation } from "react-i18next";
import { IntroCode } from "../../../components/route/content/intro-code/IntroCode";
import { TextContent } from "../../../components/route/content/text-content/TextContent";
import { RouteTitle } from "../../../components/route/title/RouteTitle";
import { MAIN_EXPERIENCES_LABELS as MAIN_EXP_LABELS_IT } from "./labels";

const { TITLE, SUBTITLE, INTRO_CODE, SECTIONS } = MAIN_EXP_LABELS_IT;

const MainExperiences: React.FC = () => {
    const { t } = useTranslation("mainExperiences");
    return (
        <main>
            <RouteTitle title={t(TITLE)} subtitle={t(SUBTITLE)} />
            <IntroCode content={INTRO_CODE} />
            <TextContent sections={SECTIONS} tFunction={t} />
        </main>
    )
}

export default MainExperiences;