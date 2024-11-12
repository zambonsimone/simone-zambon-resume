import React from "react";
import { HtmlSanitizer } from "../../components/common/html-sanitizer/HtmlSanitizer";
import { TextContent } from "../../components/route/content/text-content/TextContent";
import { SectionTitle } from "../../components/route/title/RouteTitle";
import { HOMEPAGE_LABELS } from "./labels";

const { 
    TITLE, 
    SUBTITLE, 
    SECTIONS,
    INSTRUCTIONS
} = HOMEPAGE_LABELS;

const Welcome: React.FC = () => {
    return (
        <>
            <SectionTitle title={TITLE} subtitle={<HtmlSanitizer htmlString={SUBTITLE}/>}/>
            <h2>{INSTRUCTIONS.TITLE}</h2>
            <ul>
                { INSTRUCTIONS.LIST_ITEMS.map((item, index) => (
                    <li key={index}>
                        <HtmlSanitizer htmlString={item}/>
                    </li>
                ))}
            </ul>
            <TextContent sections={SECTIONS}/>
        </>
    )
}
export default Welcome;