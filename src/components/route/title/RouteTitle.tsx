import { useTranslation } from "react-i18next";
import style from "./RouteTitle.module.scss";

interface IRouteTitleProps {
    title: string | JSX.Element;
    subtitle: string | JSX.Element
}
export const RouteTitle: React.FC<IRouteTitleProps> = ({
    title,
    subtitle,
}) => {
    const {i18n} = useTranslation();
    return (
        <header className={style.routeTitle}>
            <h1 lang={i18n.resolvedLanguage} className={style.title}>{title}</h1>
            <p className={style.subtitle}>{subtitle}</p>
        </header>
    )
}