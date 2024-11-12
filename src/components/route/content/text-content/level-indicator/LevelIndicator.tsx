import React, { useState } from "react";
import { LEVEL_INDICATOR_LABEL } from "./labels";
import style from "./LevelIndicator.module.scss";
import { getLevelBgColor } from "./utils";

interface ILevelIndicatorProps {
    level: number;
    levelName?: string;
    className?: string;
}
export const LevelIndicator: React.FC<ILevelIndicatorProps> = ({ 
    level,
    levelName,
    className,
}) => {   
    const [indicator, setIndicator] = useState<JSX.Element[] | null>(null);

    if (indicator === null) {
        const indicator: JSX.Element[] = [];
        for (let i=0; i<level; i++) {
            const bgStyle = { backgroundColor: getLevelBgColor(i) };
            indicator.push(<div key={i} className={style.point} style={bgStyle}/>)
        }
        setIndicator(indicator)
    }
    
    if (!level) return;    
    return (
        <div className={[style.levelIndicatorContainer, className].join(" ")}>
            <span>{ LEVEL_INDICATOR_LABEL}</span> 
            <span>{ levelName ?? level }</span>
            <div className={style.indicator}>{ indicator }</div>
        </div>
    ) 
}
