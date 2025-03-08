import { TFunction } from "i18next";
import { IRouteContentOrganization } from "../../../../types";
import { Details } from "./Details";
import { Paragraphs } from "./Paragraphs";
import { SubsectionTitle } from "./SubsectionTitle";
import style from "./TextContent.module.scss";
import { Title } from "./Title";

interface ITextContentProps {
    sections: IRouteContentOrganization["SECTIONS"];
    tFunction: TFunction
}

export const TextContent: React.FC<ITextContentProps> = ({
    sections,
    tFunction: t
}) => {
    return sections.map((section, index) => (
        <div key={index} className={style.sectionContainer}>
            <div className={style.header}>
                <Title title={t(section.TITLE)} />
                <Details details={section.DETAILS} tFunction={t} />
            </div>
            <Paragraphs paragraphs={section.PARAGRAPHS} tFunction={t} />
            {section.SUB_SECTIONS?.map((subs, index) => (
                <div key={index} className={style.subSectionContainer}>
                    <div className={style.header}>
                        <SubsectionTitle title={t(subs.TITLE)} />
                        <Details details={subs.DETAILS} tFunction={t} />
                    </div>
                    <Paragraphs paragraphs={subs.PARAGRAPHS} tFunction={t} />
                </div>
            ))}
        </div>
    ))
}