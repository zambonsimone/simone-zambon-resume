import React from "react";
import { IntroCode } from "../../components/route/content/intro-code/IntroCode";
import { TextContent } from "../../components/route/content/text-content/TextContent";
import { SectionTitle } from "../../components/route/title/RouteTitle";
import { HOBBIES_LABELS } from "./labels";

const { TITLE, SUBTITLE, INTRO_CODE, SECTIONS } = HOBBIES_LABELS;

const Hobbies: React.FC = () => {
    return (
        <>
            <SectionTitle title={TITLE} subtitle={SUBTITLE}/>
            <IntroCode content={INTRO_CODE} />
            <TextContent sections={SECTIONS}/>
        </>
    )
}
export default Hobbies;
