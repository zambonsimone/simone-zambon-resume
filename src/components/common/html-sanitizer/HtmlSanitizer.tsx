import sanitizeHtml from "sanitize-html";

interface IHtmlSanitizerProps {
    htmlString: string;
    className?: string;
}

export const HtmlSanitizer: React.FC<IHtmlSanitizerProps> = ({ 
    htmlString,
    className,
}) => {
    const sanitizedHTML = sanitizeHtml(htmlString, {
        allowedTags: ["a","br"],
        allowedAttributes: { 
            a: ["href"] 
        }
    })
    return (
        <span className={className} dangerouslySetInnerHTML={{ __html: sanitizedHTML }}/>
    )
}