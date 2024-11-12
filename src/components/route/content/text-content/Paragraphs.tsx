import { HtmlSanitizer } from "../../../common/html-sanitizer/HtmlSanitizer";
import style from "./TextContent.module.scss";

interface IParagraphsProps {
    paragraphs: string[] | undefined;
}

export const Paragraphs: React.FC<IParagraphsProps> = ({
    paragraphs
}) => {
    return paragraphs?.map((parag, index) => (
        <HtmlSanitizer 
            className={style.sectionParagraph} 
            key={index} 
            htmlString={parag}
        />   
    ))
}