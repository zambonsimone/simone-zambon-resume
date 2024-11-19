const SYMBOLS_CODE = {
    PLUS: 43,
    ASTERISK: 42,
    HYPHEN: 45
}
interface ISymbolProps {
    className?: string;
}
export const Asterisk: React.FC<ISymbolProps> = ({ className }) => {
    return <span className={className}>{String.fromCharCode(SYMBOLS_CODE.ASTERISK)}</span>
}

export const Plus: React.FC<ISymbolProps> = ({ className}) => {
    return <span className={className}>{String.fromCharCode(SYMBOLS_CODE.PLUS)}</span>
}

export const Hyphen: React.FC<ISymbolProps> = ({ className }) => {
    return <span className={className}>{String.fromCharCode(SYMBOLS_CODE.HYPHEN)}</span>
}