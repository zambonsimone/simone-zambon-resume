import { useCallback } from "react";
import { useHistory } from "react-router";
import { PATHS } from "../../../../routes/paths";
import style from "./PersonalInfo.module.scss";
import { PERSONAL_INFO_FULLNAME, PERSONAL_INFO_QUALIFICATION } from "./labels";

interface IPersonalInfoProps {
    onlyImg?: boolean;
}
export const PersonalInfo: React.FC<IPersonalInfoProps> = ({
    onlyImg
}) => {
    const history = useHistory();
    const onClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        history.push(PATHS.HOMEPAGE)
    },[history])

    return (
        <div className={style.personalInfo}>
            <div tabIndex={0} role="button" aria-label={"Vai alla homepage"} className={style.picture} onClick={onClick}/>
            { !onlyImg && (
                <div className={style.info}>
                    <div>{ PERSONAL_INFO_FULLNAME }</div>
                    <div>{ PERSONAL_INFO_QUALIFICATION }</div>
                </div> 
            )} 
        </div>
    )
}