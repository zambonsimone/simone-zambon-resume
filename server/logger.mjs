import fs from "fs";

export const logRequest = (req) => {
    const logMessage = `
*****
    DATE:
    ${new Date().toISOString()}
    BODY:
    ${JSON.stringify(req)}\n
    `;
    fs.appendFile('server/log.txt', logMessage, (err) => {
        if (err) {
            console.error('Error on log updating:', err);
        }
    });
};