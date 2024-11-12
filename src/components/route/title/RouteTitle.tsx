import React from "react";
import style from "./RouteTitle.module.scss";

interface ISectionTitleProps {
    title: string;
    subtitle: string | JSX.Element
}
export const SectionTitle: React.FC<ISectionTitleProps> = ({
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