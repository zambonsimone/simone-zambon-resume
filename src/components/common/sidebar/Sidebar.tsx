import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useResolution } from "../../../hooks/useResolution";
import { CollapseButton } from "../button/collapse-button/CollapseButton";
import { MatchResolution } from "../match-resolution/MatchResolution";
import { NavBar } from "../navigation/nav-bar/NavBar";
import { PersonalInfo } from "./personal-info/PersonalInfo";
import style from "./Sidebar.module.scss";

export const Sidebar: React.FC = () => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const [collapsed, setCollapsed] = useState(true);
    const {t} = useTranslation("global");
    const { isTablet } = useResolution();
    const expandSidebar = useCallback(() => {
        modalRef.current?.showModal();
        setCollapsed(false);
    }, []);
    const collapseSidebar = useCallback(() => {
        modalRef.current?.close();
        setCollapsed(true);
    }, []);
    useEffect(() => {
        if (!isTablet) collapseSidebar();
    }, [collapseSidebar, isTablet])

    return (
        <MatchResolution
            desktop={
                <aside className={style.sidebar}>
                    <NavBar />
                </aside>
            }
            tablet={<>
                {collapsed && (
                    <aside
                        className={[style.sidebar, style.collapsed].join(" ")}
                    >
                        <div className={style.sidebarCollapseBtnWrapper}>
                            <CollapseButton
                                collapsedTo="left"
                                collapsed
                                className={style.sidebarCollapseBtn}
                                onClick={expandSidebar}
                            />
                        </div>
                        <NavBar collapsed />
                    </aside>
                )}
                <dialog className={[style.sidebar, style.sidebarDialog].join(" ")} id={"sidebar-dialog"} ref={modalRef}>
                    <PersonalInfo />
                    <div className={style.sidebarCollapseBtnWrapper}>
                        <CollapseButton
                            collapsedTo="left"
                            collapsed={false}
                            className={style.sidebarCollapseBtn}
                            onClick={collapseSidebar}
                        />
                        <span>{t("CLOSE_MENU")}</span>
                    </div>
                    <NavBar onLinkClick={collapseSidebar} />
                </dialog>
            </>}
        />
    )
}