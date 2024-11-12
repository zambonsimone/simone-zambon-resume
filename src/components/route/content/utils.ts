
export function getLinesCount(code: string): number {
    return (code.match(new RegExp("\n","g"))?.length ?? 0) + 1
} 

export function indentCode(code: string) {
    const lines = code.split("\n");
    let newLines: string[] = [];
    lines.forEach(line => {
        const singleSpace = "  ";
        const doubleSpace = singleSpace+singleSpace;
        if (line.includes("[") && line.includes("]")) {
            const splitted = line.split(/(?<=\[)|(?=\])/);
            newLines = [...newLines, splitted[0], `${doubleSpace}${splitted[1]}`,`${singleSpace}${splitted[2]}`];
        } else {
            newLines = [...newLines, line];
        }
    })
    return newLines.join("\n");
}

