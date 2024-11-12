import style from "./TextContent.module.scss";

interface ITitleProps {
    title: string | undefined;
}

export const Title: React.FC<ITitleProps> = ({ title }) => {
    return title && (
        <h2 className={style.sectionTitle}>
            { title }
        </h2> 
    )
}