import { IRouteContentOrganization } from "../../../../types";
import { Accordion } from "../../../common/accordion/Accordion";
import { MatchResolution } from "../../../common/match-resolution/MatchResolution";
import { DETAILS_ACCORDION_HEADER_TEXT, DETAILS_WHERE_DATE, DETAILS_WHERE_PLACE } from "./labels";
import { LevelIndicator } from "./level-indicator/LevelIndicator";
import style from "./TextContent.module.scss";

function hasDetails(details: IRouteContentOrganization["SECTIONS"][number]["DETAILS"]) {
    if (!details) return false;
    const { LEVEL, TEXT, WHERE } = details;
    return LEVEL || TEXT || WHERE;
}

interface IDetailsProps {
    details: IRouteContentOrganization["SECTIONS"][number]["DETAILS"] | undefined;
}
export const Details: React.FC<IDetailsProps> = ({
    details
}) => {
    return hasDetails(details) && (
        <Accordion
            className={style.details}
            header={DETAILS_ACCORDION_HEADER_TEXT}
            content={(
                <>
                    { details?.WHERE?.map((where, index) => (
                        <div className={style.where} key={index}>
                            <span className={style.wherePlace}>{DETAILS_WHERE_PLACE} <b>{where.PLACE}</b></span>
                            <MatchResolution 
                                desktop={(
                                    <span className={style.whereDate}>
                                        {where.DATES.join(" - ")}
                                    </span>
                                )}
                                tablet={(
                                    <div className={style.whereDate}>
                                        <div><span>{DETAILS_WHERE_DATE.FROM} </span>{where.DATES[0]}</div>
                                        <div><span>{DETAILS_WHERE_DATE.TO} </span>{where.DATES[1]}</div>
                                    </div>
                                )}
                            />
                        </div> 
                    ))}
                    <LevelIndicator 
                        level={details?.LEVEL} 
                        levelName={details.LEVEL_NAME}
                        className={style.levelIndicator}
                    />
                    { details?.TEXT && (
                        <span className={style.sectionDetails}>
                            {details?.TEXT}
                        </span>
                    )}
                </>
            )}
        />
    )
}

/*
return hasDetails(details) && (
        <div className={style.details}>
            { details?.WHERE?.map((where, index) => (
                <div className={style.where} key={index}>
                    <span className={style.wherePlace}>{DETAILS_WHERE_PLACE} <b>{where.PLACE}</b></span>
                    <MatchResolution 
                        desktop={(
                            <span className={style.whereDate}>
                                {where.DATES.join(" - ")}
                            </span>
                        )}
                        tablet={(
                            <div className={style.whereDate}>
                                <div><span>{DETAILS_WHERE_DATE.FROM} </span>{where.DATES[0]}</div>
                                <div><span>{DETAILS_WHERE_DATE.TO} </span>{where.DATES[1]}</div>
                            </div>
                        )}
                    />
                </div> 
            ))}
            <LevelIndicator 
                level={details?.LEVEL} 
                levelName={details.LEVEL_NAME}
                className={style.levelIndicator}
            />
            { details?.TEXT && (
                <span className={style.sectionDetails}>
                    {details?.TEXT}
                </span>
            )}
        </div>
    )
*/