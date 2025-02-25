import { i18n } from "i18next";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Popover } from "react-tiny-popover";
import { useResolution } from "../../../hooks/useResolution";
import { LanguageItem, LANGUAGES, SUPPORTED_LNGS } from "../../../i18next/i18next.contants";
import style from "./LanguageSelector.module.scss";

function isActive(i18nInstance: i18n, lng: typeof SUPPORTED_LNGS[number]) {
    return i18nInstance.resolvedLanguage === lng;
}

interface ILanguageListProps {
    onClickLanguage?: () => void;
    className?: string
}
export const LanguageList: React.FC<ILanguageListProps> = ({
    onClickLanguage,
    className
}) => {
    const { isDesktop } = useResolution();
    const { i18n } = useTranslation();
    const onSelectLanguage = useCallback((newLang: typeof SUPPORTED_LNGS[number]) => {
        i18n.changeLanguage(newLang)
        onClickLanguage?.();
    }, [onClickLanguage, i18n])

    return (
        <ul className={[style.languageList, className].join(" ")}>
            {LANGUAGES.map(lng => (
                <li
                    className={[style.languageListItem, isActive(i18n, lng.lang) ? style.active : ""].join(" ")}
                    key={lng.lang}
                    onClick={() => onSelectLanguage(lng.lang)}
                >
                    <div className={style.itemContent}>
                        <img src={lng.icon} id={`languageListItem-${lng.lang}`} />
                        <label htmlFor={`languageListItem-${lng.lang}`}>
                            {!isDesktop ? lng.lang : lng.label}
                        </label>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export const LanguageSelector: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { i18n } = useTranslation();
    const currentLang: LanguageItem = LANGUAGES.find(({ lang }) => lang === i18n.resolvedLanguage);
    const { isDesktop } = useResolution();
    return (
        <Popover
            isOpen={isOpen}
            onClickOutside={() => setIsOpen(false)}
            positions={["bottom", "left"]}
            content={(
                <LanguageList
                    className={style.popoverLanguageList}
                    onClickLanguage={() => setIsOpen(false)}
                />
            )}
            containerClassName={style.popoverContainer}
        >
            <div className={style.currentLanguageContainer} onClick={() => setIsOpen(true)}>
                <img src={currentLang.icon} id="currentLanguage" />
                <label htmlFor={"currentLanguage"}>{!isDesktop ? currentLang.lang : currentLang.label}</label>
            </div>
        </Popover>
    )
}