import { useState } from "react";
import { Icon } from "../icons/Icon";
import style from "./Accordion.module.scss";
import { HIDE_CONTENT, SHOW_CONTENT } from "./labels";

interface IAccordionProps {
    header: string | JSX.Element;
    content: JSX.Element;
    initCollapsed?: boolean;
    className?: string;
    contentClassName?: string;
}

export const Accordion: React.FC<IAccordionProps> = ({
    header,
    content,
    initCollapsed,
    className,
    contentClassName
}) => {
    const [collapsed, setCollapsed] = useState(initCollapsed ?? true);
    const accordionIcon = collapsed ? "chevronDown" : "chevronUp";
    const headerText = `${collapsed ? SHOW_CONTENT : HIDE_CONTENT} ${header}`;

    return (
        <div className={[style.accordion, collapsed ? style.collapsed : "", className].join(" ")}>
            <div 
                className={style.accordionHeader} 
                onClick={() => setCollapsed(old => !old)}
                tabIndex={0}
            >
                { headerText }<Icon className={style.accordionIcon} icon={accordionIcon} />
            </div>
            <div className={[style.accordionContent, contentClassName].join(" ")}>
                { content }
            </div>
        </div>
    )
}