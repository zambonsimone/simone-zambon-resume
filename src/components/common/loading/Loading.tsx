import style from "./Loading.module.scss";

interface ILoadingProps {
    className: string;
}

export const Loading: React.FC<ILoadingProps> = ({
    className
}) => {
    return (
        <div className={[style.loadingContainer, className].join(" ")}>
            <div className={style.ellipsis}/>
            <div className={style.ellipsis}/>
            <div className={style.ellipsis}/>
        </div>
    )
}