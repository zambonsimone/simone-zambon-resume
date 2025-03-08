import { Fragment } from "react";

export function withNewLines(text: string) {
    return <>
        { text.split("\n").map((line, index) => (
            <Fragment key={index}>
                {line}
                {index < text.length - 1 ? <br /> : null}
            </Fragment>
        ))}    
    </>
}