import React, { useCallback, useRef } from "react";
import { CollapseButton } from "../button/collapse-button/CollapseButton";
import { Icon } from "../icons/Icon";
import { MatchResolution } from "../match-resolution/MatchResolution";
import { NavBar } from "../navigation/nav-bar/NavBar";
import { Searchbar } from "../navigation/searchbar/Searchbar";
import { PersonalInfo } from "../sidebar/personal-info/PersonalInfo";
import style from "./HeaderBar.module.scss";

export const HeaderBar: React.FC = () => {
    const headerRef = useRef<HTMLDialogElement>(null);
    const showModal = useCallback(() => {
        headerRef.current?.showModal();
    },[])
    const closeModal = useCallback(() => {
        headerRef.current?.close();
    },[]);
    return (
        <header className={style.headerbar}>
            <MatchResolution
                desktop={<>
                    <div className={style.searchbarContainer}>
                        <Searchbar className={style.headerSearchbar}/>
                    </div>
                </>}
                mobile={<>
                    <div className={style.enhancedHeaderbar} onClick={showModal}>
                        <PersonalInfo />
                        <CollapseButton 
                            collapsedTo="top" 
                            collapsed 
                            className={style.icon} 
                            onClick={showModal}
                        />
                        <Icon className={style.icon} icon={"routes"}/>
                        <Icon className={style.icon} icon="search" />
                    </div>
                    <dialog className={style.headerbarDialog} ref={headerRef}>
                        <CollapseButton 
                            collapsedTo="top"
                            collapsed={false}
                            className={[style.icon, style.closeHeaderbarDialogBtn].join(" ")}
                            onClick={closeModal}
                        />
                        <div className={style.headerbarDialogContent}>
                            <Searchbar onClickSearch={closeModal} className={style.dialogSearchbar}/>
                            <NavBar onLinkClick={closeModal}/>
                        </div>
                    </dialog>
                </>}
            />
        </header>
    )
}