export function getDelayAmount(level: number, loopIndex: number) {
    const delta = level - loopIndex;
    let delay = (100/delta)*2;
    if (delta === 0 || loopIndex === 0) delay = 500;
    return delay;
}

export const MAX_LEVEL = 10; 

export function getLevelBgColor(level: number) {
    return `hsl(${level ? (level*10)+20 : 0}, 90%, 61%)`
}