import React from "react";
import style from "./AppLoading.module.scss";

export const AppLoading: React.FC = () => {
    return (
        <div className={style.loadingContainer}>
            <div className={style.ellipsis}/>
            <div className={style.ellipsis}/>
            <div className={style.ellipsis}/>
        </div>
    )
}