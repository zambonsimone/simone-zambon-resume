import style from "./ContactMe.module.scss";

interface ICharsCounterProps {
    charsCount: number;
    maxCharsCount: number;
}

export const CharsCounter: React.FC<ICharsCounterProps> = ({
    charsCount,
    maxCharsCount
}) => {
    const label = `${charsCount}/${maxCharsCount}`;
    return (
        <span className={[style.charsCounter, charsCount > maxCharsCount ? style.error : ""].join(" ")}>
            {label}
        </span>
    )
}