import { useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../../i18next/i18next.contants";
import { CollapseButton } from "../button/collapse-button/CollapseButton";
import { Icon } from "../icons/Icon";
import { LanguageSelector } from "../language-selector/LanguageSelector";
import { MatchResolution } from "../match-resolution/MatchResolution";
import { NavBar } from "../navigation/nav-bar/NavBar";
import { PersonalInfo } from "../sidebar/personal-info/PersonalInfo";
import style from "./HeaderBar.module.scss";

export const HeaderBar: React.FC = () => {
    const { i18n, t } = useTranslation("global");
    const headerRef = useRef<HTMLDialogElement>(null);
    const showModal = useCallback(() => {
        headerRef.current?.showModal();
    }, [])
    const closeModal = useCallback(() => {
        headerRef.current?.close();
    }, []);
    const currentLang = LANGUAGES.find(({ lang }) => i18n.resolvedLanguage === lang);
    return (
        <header className={style.headerbar}>
            <MatchResolution
                desktop={
                    <div className={style.headerbarContent} role="presentation">
                        <PersonalInfo />
                        <LanguageSelector popover />
                    </div>
                }
                mobile={
                    <>
                        <div className={style.headerbarContent} onClick={showModal} role="presentation">
                            <PersonalInfo />
                            {currentLang?.icon && (
                                <img
                                    className={style.headerLanguageFlag}
                                    src={currentLang.icon}
                                    aria-label={`${t("LANGUAGE_SELECTOR.CURRENT_LANG")}: ${currentLang.label}`}
                                    tabIndex={0}
                                />
                            )}
                            <Icon className={style.icon} icon={"menu"} />
                        </div>
                        <dialog className={style.headerbarDialog} ref={headerRef}>
                            <div className={style.closeHeaderbarDialogBtnWrapper} role="presentation">
                                <LanguageSelector className={style.headerLanguageSelector} />
                                <CollapseButton
                                    collapsedTo="top"
                                    collapsed={false}
                                    className={[style.icon, style.closeHeaderbarDialogBtn].join(" ")}
                                    onClick={closeModal}
                                />
                            </div>
                            <div className={style.headerbarDialogContent}>
                                <NavBar onLinkClick={closeModal} />
                            </div>
                        </dialog>
                    </>
                }
            />
        </header>
    )
}