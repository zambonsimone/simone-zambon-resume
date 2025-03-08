import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "../icons/Icon";
import style from "./Accordion.module.scss";
import { HIDE_CONTENT, SHOW_CONTENT } from "./labels";

interface IAccordionProps {
    header: string;
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
    const contentRef = useRef<HTMLDivElement>();
    const headerRef = useRef<HTMLDivElement>();
    const [collapsed, setCollapsed] = useState(initCollapsed ?? true);
    const accordionIcon = collapsed ? "chevronDown" : "chevronUp";
    const { t } = useTranslation("global");
    const headerText = `${collapsed ? t(SHOW_CONTENT) : t(HIDE_CONTENT)} ${header}`;

    useEffect(() => {
        if (!collapsed) contentRef.current.focus();
    }, [collapsed, contentRef])

    const onKeyDown = useCallback((event: React.KeyboardEvent) => {
        if (event.key === "Escape") {
            headerRef.current.focus();
            return setCollapsed(true);
        }
        if (event.key === "Enter" && event.target === headerRef.current) {
            return setCollapsed(old => !old);
        }
    }, [headerRef])

    return (
        <div className={[style.accordion, collapsed ? style.collapsed : "", className].join(" ")} role="presentation">
            <div
                className={style.accordionHeader}
                onClick={() => setCollapsed(old => !old)}
                onKeyDown={onKeyDown}
                tabIndex={0}
                role="button"
                aria-expanded={!collapsed}
                aria-controls={"accordion-content"}
                ref={headerRef}
            >
                {headerText}<Icon className={style.accordionIcon} icon={accordionIcon} />
            </div>
            <div
                ref={contentRef}
                id={"accordion-content"}
                className={[style.accordionContent, contentClassName].join(" ")}
                tabIndex={0}
                aria-label={`${t("ACCORDION.CONTENT")} ${header}`}
                onKeyDown={onKeyDown}
            >
                {content}
            </div>
        </div>
    )
}