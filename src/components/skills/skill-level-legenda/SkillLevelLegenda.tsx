import { useTranslation } from "react-i18next";
import { Accordion } from "../../common/accordion/Accordion";
import { LEVEL_INDICATOR_LABEL } from "../../route/content/text-content/level-indicator/labels";
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
                    <dl role="list">
                        {Object.entries(LEVEL_LEGENDA_LABELS.LEVELS).map(([level, description], index) => (
                            <div
                                role="listitem"
                                key={index}
                                aria-label={`${t(LEVEL_INDICATOR_LABEL)} ${level}: ${t(description)}`}
                            >
                                <dt className={style.level} style={{ backgroundColor: getLevelBgColor(+level) }}>
                                    {level}
                                </dt>
                                <dd className={style.description}>{t(description)}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            )}
        />
    )
}

export default SkillLevelLegenda;