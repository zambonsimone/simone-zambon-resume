import { useTranslation } from "react-i18next";
import { Accordion } from "../../common/accordion/Accordion";
import { getLevelBgColor } from "../../route/content/text-content/level-indicator/utils";
import style from "./SkillLevelLegenda.module.scss";
import { LEVEL_LEGENDA_LABELS } from "./labels";


const SkillLevelLegenda: React.FC = () => {
    const { t } = useTranslation("global");
    return (
        <Accordion
            header={t(LEVEL_LEGENDA_LABELS.HEADER)}
            className={style.levelLegendaContainer}
            contentClassName={style.levelLegendaContent}
            content={(
                <div>
                    <ul role="list">
                        {Object.entries(LEVEL_LEGENDA_LABELS.LEVELS).map(([level, description], index) => (
                            <li
                                role="listitem"
                                key={index}
                                aria-label={`Livello ${level}: ${description}`}
                            >
                                <span className={style.level} style={{ backgroundColor: getLevelBgColor(+level) }}>
                                    {level}
                                </span>
                                <span className={style.description}>{t(description)}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        />
    )
}

export default SkillLevelLegenda;