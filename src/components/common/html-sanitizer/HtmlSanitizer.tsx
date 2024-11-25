import { HTMLAttributes, useMemo } from "react";
import sanitizeHtml from "sanitize-html";

interface IHtmlSanitizerProps {
    htmlString: string;
    className?: string;
    element?: keyof HTMLElementTagNameMap;
}

export const HtmlSanitizer: React.FC<IHtmlSanitizerProps> = ({ 
    htmlString,
    className,
    element
}) => {
    const sanitizedHTML = sanitizeHtml(htmlString, {
        allowedTags: ["a","br","code"],
        allowedAttributes: { 
            a: ["href","target"] 
        }
    })
    
    const props: HTMLAttributes<HTMLElement> = useMemo(() => ({
        className, 
        dangerouslySetInnerHTML: { __html: sanitizedHTML }
    }),[className, sanitizedHTML]);
    
    switch (element) {
        case "p": return <p {...props}/>
        case "span": return <span {...props}/>
        default: return <div {...props}/>
    }
}