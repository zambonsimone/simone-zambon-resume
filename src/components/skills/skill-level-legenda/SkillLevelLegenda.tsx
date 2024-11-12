import React from "react";
import { Accordion } from "../../common/accordion/Accordion";
import { getLevelBgColor } from "../../route/content/text-content/level-indicator/utils";
import style from "./SkillLevelLegenda.module.scss";
import { LEVEL_LEGENDA_LABELS } from "./labels";


const SkillLevelLegenda: React.FC = () => {
    return (
        <Accordion
            header={LEVEL_LEGENDA_LABELS.HEADER}
            className={style.levelLegendaContainer}
            contentClassName={style.levelLegendaContent}
            content={(
                <div>
                    <ul>
                        { Object.entries(LEVEL_LEGENDA_LABELS.LEVELS).map(([level, description], index) => (
                            <li key={index}>
                                <span className={style.level} style={{ backgroundColor: getLevelBgColor(+level) }}>
                                    {level}
                                </span>
                                <span className={style.description}>{description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        />
    )
}

export default SkillLevelLegenda;