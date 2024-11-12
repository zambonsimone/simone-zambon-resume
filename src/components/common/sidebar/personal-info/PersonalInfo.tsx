import React from "react";
import style from "./PersonalInfo.module.scss";
import { PERSONAL_INFO_FULLNAME, PERSONAL_INFO_QUALIFICATION } from "./labels";

interface IPersonalInfoProps {
    onlyImg?: boolean;
}
export const PersonalInfo: React.FC<IPersonalInfoProps> = ({
    onlyImg
}) => {
    return (
        <div className={style.personalInfo}>
            <div className={style.picture}/>
            { !onlyImg && (
                <div className={style.info}>
                    <div>{ PERSONAL_INFO_FULLNAME }</div>
                    <div>{ PERSONAL_INFO_QUALIFICATION }</div>
                </div> 
            )} 
        </div>
    )
}