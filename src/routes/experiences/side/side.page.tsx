import { IntroCode } from "../../../components/route/content/intro-code/IntroCode";
import { TextContent } from "../../../components/route/content/text-content/TextContent";
import { RouteTitle } from "../../../components/route/title/RouteTitle";
import { SIDE_EXPERIENCES_LABELS } from "./labels";

const { TITLE, SUBTITLE, INTRO_CODE, SECTIONS } = SIDE_EXPERIENCES_LABELS;

const SideExperiences: React.FC = () => {
    return (
        <>
            <RouteTitle title={TITLE} subtitle={SUBTITLE}/>
            <IntroCode content={INTRO_CODE}/>
            <TextContent sections={SECTIONS}/>
        </>
    )
}

export default SideExperiences;