import React, { useCallback, useRef } from "react";
import { CollapseButton } from "../button/collapse-button/CollapseButton";
import { MatchResolution } from "../match-resolution/MatchResolution";
import { NavBar } from "../navigation/nav-bar/NavBar";
import { PersonalInfo } from "./personal-info/PersonalInfo";
import style from "./Sidebar.module.scss";

export const Sidebar: React.FC = () => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const expandSidebar = useCallback(() => {
        modalRef.current?.showModal();
    },[]);
    const collapseSidebar = useCallback(() => {
        modalRef.current?.close();
    },[]);

    return (
        <MatchResolution 
            desktop={
                <div className={style.sidebar}>
                    <PersonalInfo />
                    <NavBar />           
                </div>
            }
            tablet={<>
                <div className={[style.sidebar, style.collapsed].join(" ")} onClick={expandSidebar}>
                    <PersonalInfo onlyImg/>
                    <CollapseButton 
                        collapsedTo="left" 
                        collapsed 
                        className={style.sidebarCollapseBtn}
                        onClick={expandSidebar}
                    />
                    <NavBar collapsed/>            
                </div>
                <dialog className={[style.sidebar, style.sidebarDialog].join(" ")} id={"sidebar-dialog"} ref={modalRef}>
                    <PersonalInfo />
                    <CollapseButton 
                        collapsedTo="left" 
                        collapsed={false}
                        className={style.sidebarCollapseBtn}
                        onClick={collapseSidebar}
                    />
                    <NavBar onLinkClick={collapseSidebar}/>
                </dialog> 
            </>}
        />
    )
}