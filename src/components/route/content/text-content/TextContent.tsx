import { IRouteContentOrganization } from "../../../../types";
import { Details } from "./Details";
import { Paragraphs } from "./Paragraphs";
import style from "./TextContent.module.scss";
import { Title } from "./Title";

interface ITextContentProps {
    sections: IRouteContentOrganization["SECTIONS"];
}

export const TextContent: React.FC<ITextContentProps> = ({ sections }) => {
    return sections.map((section, index) => (
        <div key={index} className={style.sectionContainer}>
            <div className={style.header}>
                <Title title={section.TITLE}/>
                <Details details={section.DETAILS}/>
            </div>
            <Paragraphs paragraphs={section.PARAGRAPHS}/>
            { section.SUB_SECTIONS?.map((subs, index) => (
                <div key={index} className={style.subSectionContainer}>
                    <div className={style.header}>
                        <Title title={subs.TITLE}/>
                        <Details details={subs.DETAILS}/>
                    </div>
                    <Paragraphs paragraphs={subs.PARAGRAPHS}/>
                </div>
            ))}
        </div>  
    ))
}