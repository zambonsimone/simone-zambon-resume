import { IntroCode } from "../../../components/route/content/intro-code/IntroCode";
import { TextContent } from "../../../components/route/content/text-content/TextContent";
import { SectionTitle } from "../../../components/route/title/RouteTitle";
import { IT_SKILLS_LABELS } from "./labels";

const { TITLE, SUBTITLE, INTRO_CODE, SECTIONS } = IT_SKILLS_LABELS;

const ITSkills: React.FC = () => {
    return (
        <>
            <SectionTitle title={TITLE} subtitle={SUBTITLE}/>
            <IntroCode content={INTRO_CODE} />
            <TextContent sections={SECTIONS}/>
        </>
    )
}

export default ITSkills;