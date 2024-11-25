import { IntroCode } from "../../components/route/content/intro-code/IntroCode";
import { TextContent } from "../../components/route/content/text-content/TextContent";
import { RouteTitle } from "../../components/route/title/RouteTitle";
import "./bio.page.scss";
import { BIO_LABELS } from "./labels";

const { TITLE, SUBTITLE, INTRO_CODE, SECTIONS } = BIO_LABELS;

const Bio: React.FC = () => {
    return (
        <div>
            <RouteTitle title={TITLE} subtitle={SUBTITLE}/>
            <IntroCode content={INTRO_CODE}/>
            <TextContent sections={SECTIONS}/>
        </div>
    )
}

export default Bio;