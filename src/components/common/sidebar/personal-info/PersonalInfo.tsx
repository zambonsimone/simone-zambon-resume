import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ROUTES_NAMES } from "../../../../routes/labels";
import { PATHS } from "../../../../routes/paths";
import style from "./PersonalInfo.module.scss";
import { PERSONAL_INFO_FULLNAME, PERSONAL_INFO_QUALIFICATION } from "./labels";

interface IPersonalInfoProps {
    onlyImg?: boolean;
}
export const PersonalInfo: React.FC<IPersonalInfoProps> = ({
    onlyImg
}) => {
    const { t } = useTranslation("global");
    const onClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
        event.stopPropagation();
    }, [])

    return (
        <a
            className={style.personalInfo}
            aria-label={t(ROUTES_NAMES.HOMEPAGE)}
            href={PATHS.HOMEPAGE}
            onClick={onClick}
        >
            <img src="/profile_pic.png" className={style.picture} />
            {!onlyImg && (
                <div className={style.info}>
                    <div>{PERSONAL_INFO_FULLNAME}</div>
                    <div>{PERSONAL_INFO_QUALIFICATION}</div>
                </div>
            )}
        </a>
    )
}