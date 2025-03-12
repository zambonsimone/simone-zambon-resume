import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Popover } from "react-tiny-popover";
import { useEnterToClick } from "../../../hooks/useEnterToClick/useEnterToClick";
import { useResolution } from "../../../hooks/useResolution";
import { LanguageItem, LANGUAGES } from "../../../i18next/i18next.contants";
import { LanguageList } from "./LanguageList";
import style from "./LanguageSelector.module.scss";

interface ILanguageSelectorProps {
    popover?: boolean;
    className?: string;
}

export const LanguageSelector: React.FC<ILanguageSelectorProps> = ({
    popover,
    className
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { i18n, t } = useTranslation("global");
    const currentLang: LanguageItem = LANGUAGES.find(({ lang }) => lang === i18n.resolvedLanguage);
    const { isDesktop } = useResolution();
    const listRef = useRef<HTMLUListElement>();
    const triggerClick = useEnterToClick({ onClick: () => setIsOpen(!isOpen) })

    useEffect(() => {
        if (!isOpen || !listRef.current) return;
        listRef.current.focus();
    }, [isOpen])

    if (currentLang == null) return null;

    return popover ? (
        <Popover
            isOpen={isOpen}
            onClickOutside={() => setIsOpen(false)}
            positions={["bottom", "left"]}
            content={(
                <LanguageList
                    className={style.popoverLanguageList}
                    onClickLanguage={() => setIsOpen(false)}
                    ref={listRef}
                />
            )}
            containerClassName={[style.popoverContainer, className].join(" ")}
        >
            <div
                className={style.currentLanguageContainer}
                onClick={() => setIsOpen(!isOpen)}
                role="button"
                aria-label={`${t("LANGUAGE_SELECTOR.CURRENT_LANG")}: ${currentLang.label}`}
                tabIndex={0}
                onKeyDown={triggerClick}
            >
                <img src={currentLang.icon} className={style.langImg} aria-hidden />
                <label aria-hidden>{!isDesktop ? currentLang.lang : currentLang.label}</label>
            </div>
        </Popover>
    ) : (
        <LanguageList
            className={className}
            onClickLanguage={() => setIsOpen(false)}
        />
    )
}