import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import { IRouteContentOrganization } from "../../../../types";
import { Accordion } from "../../../common/accordion/Accordion";
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
    tFunction: TFunction
}
export const Details: React.FC<IDetailsProps> = ({
    details,
    tFunction: extTFunction
}) => {
    const { t } = useTranslation("global");
    return hasDetails(details) && (
        <Accordion
            className={style.details}
            header={t(DETAILS_ACCORDION_HEADER_TEXT)}
            content={(
                <div role="rowgroup">
                    {details?.WHERE?.map((where, index) => (
                        <div
                            role="row"
                            className={style.where}
                            key={index}
                            tabIndex={0}
                            aria-label={`
                                ${t(DETAILS_WHERE_PLACE)} ${where.PLACE}, ${t(DETAILS_WHERE_DATE.FROM)} ${where.DATES[0]} ${t(DETAILS_WHERE_DATE.TO)} ${where.DATES[1]}
                            `}
                        >
                            <span className={style.wherePlace}>{t(DETAILS_WHERE_PLACE)} <b>{where.PLACE}</b></span>
                            <div className={style.whereDate}>
                                <div><span>{t(DETAILS_WHERE_DATE.FROM)} </span>{where.DATES[0]}</div>
                                <div><span>{t(DETAILS_WHERE_DATE.TO)} </span>{where.DATES[1]}</div>
                            </div>
                        </div>
                    ))}
                    <LevelIndicator
                        level={details?.LEVEL}
                        levelName={details.LEVEL_NAME}
                        className={style.levelIndicator}

                    />
                    {details?.TEXT && (
                        <span className={style.sectionDetails}>
                            {extTFunction(details?.TEXT)}
                        </span>
                    )}
                </div>
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