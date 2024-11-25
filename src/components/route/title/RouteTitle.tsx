import style from "./RouteTitle.module.scss";

interface IRouteTitleProps {
    title: string;
    subtitle: string | JSX.Element
}
export const RouteTitle: React.FC<IRouteTitleProps> = ({
    title,
    subtitle,
}) => {
    return (
        <header className={style.routeTitle}>
            <h1 className={style.title}>{ title }</h1>
            <p className={style.subtitle}>{ subtitle }</p>
        </header>
    )
}