import style from "./TextContent.module.scss";

interface ISubsectionTitleProps {
    title: string | undefined;
}

export const SubsectionTitle: React.FC<ISubsectionTitleProps> = ({ title }) => {
    return title && (
        <h3 className={style.subsectionTitle}>
            { title }
        </h3> 
    )
}