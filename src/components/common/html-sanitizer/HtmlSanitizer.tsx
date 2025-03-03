import { HTMLAttributes, useMemo } from "react";
import sanitizeHtml from "sanitize-html";

interface IHtmlSanitizerProps extends HTMLAttributes<HTMLElement> {
    htmlString: string;
    className?: string;
    element?: keyof HTMLElementTagNameMap;
}

export const HtmlSanitizer: React.FC<IHtmlSanitizerProps> = ({
    htmlString,
    className,
    element,
    ...elementAttributes
}) => {
    const sanitizedHTML = sanitizeHtml(htmlString, {
        allowedTags: ["a", "br", "code", "strong", "svg", "path"],
        allowedAttributes: {
            a: ["href", "target", "aria-label"],
            svg: ["xmlns","width","height","viewBox"],
            path: ["d","stroke","fill"]
        }
    })

    const props: HTMLAttributes<HTMLElement> = useMemo(() => ({
        ...elementAttributes,
        className,
        dangerouslySetInnerHTML: { __html: sanitizedHTML },
    }), [className, elementAttributes, sanitizedHTML]);

    switch (element) {
        case "p": return <p {...props} />
        case "span": return <span {...props} />
        default: return <div {...props} />
    }
}