import React from "react";
import { Prism } from "react-syntax-highlighter";
import * as styles from "react-syntax-highlighter/dist/esm/styles/prism";

const codeStyle: React.CSSProperties = { 
    background: "none",
    padding: "0",
    margin: "0",
    lineHeight: "2.2rem" 
}

interface ICodeSnippetProps {
    content: string;
    className?: string;
}

export const CodeSnippet: React.FC<ICodeSnippetProps> = ({ 
    content, 
    className = "",
}) => {    
    return (
        <div className={className}>
            <Prism 
                language="js" 
                style={styles.a11yDark} 
                customStyle={codeStyle} 
                //I don't use "showLineNumbers" property because I want to horizontally scroll only the right side with code
            >
                { content }
            </Prism>
        </div>
    )
};