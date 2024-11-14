import style from "./LinesCounter.module.scss";

export const LinesCounter: React.FC<{ count: number }> = ({ count }) => {
    if (!count) return null;
    
    //to memoize `lines` would be more expensive in terms of performance than run this loop
    const lines: JSX.Element[] = [];
    for (let i = 1; i <= count; i++) {
        lines.push(<div key={i}>{i}</div>);
    }

    return (
        <div className={style.linesCounter}>
            { lines }
        </div>
    )
}