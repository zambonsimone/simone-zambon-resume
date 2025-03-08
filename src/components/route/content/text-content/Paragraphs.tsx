import { TFunction } from "i18next";
import { HtmlSanitizer } from "../../../common/html-sanitizer/HtmlSanitizer";
import style from "./TextContent.module.scss";

interface IParagraphsProps {
    paragraphs: string[] | undefined;
    tFunction: TFunction
}

export const Paragraphs: React.FC<IParagraphsProps> = ({
    paragraphs,
    tFunction: t
}) => {
    return paragraphs?.map((parag, index) => (
        <HtmlSanitizer
            className={style.sectionParagraph}
            key={index}
            htmlString={t(parag)}
            element={"p"}
        />
    ))
}