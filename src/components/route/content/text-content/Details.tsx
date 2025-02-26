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
    const { t, i18n } = useTranslation("global");
    return hasDetails(details) && (
        <Accordion
            className={style.details}
            header={t(DETAILS_ACCORDION_HEADER_TEXT)}
            content={(
                <div role="rowgroup">
                    {details?.WHERE?.map((where, index) => {
                        const at = t(DETAILS_WHERE_PLACE);
                        const place = where.PLACE;
                        const from = t(DETAILS_WHERE_DATE.FROM);
                        const to = t(DETAILS_WHERE_DATE.TO);
                        const dateFrom = new Date(where.DATES[0]).toLocaleDateString(i18n.resolvedLanguage);
                        const dateTo = new Date(where.DATES[1]).toLocaleDateString(i18n.resolvedLanguage)
                        return (
                            <div
                                role="row"
                                className={style.where}
                                key={index}
                                tabIndex={0}
                                aria-label={`
                                    ${at} ${place}, ${from} ${dateFrom} ${to} ${dateTo}
                                `}
                            >
                                <span className={style.wherePlace}>{at} <b>{place}</b></span>
                                <div className={style.whereDate}>
                                    <div><span>{from} </span>{dateFrom}</div>
                                    <div><span>{to} </span>{dateTo}</div>
                                </div>
                            </div>
                        )
                    })}
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