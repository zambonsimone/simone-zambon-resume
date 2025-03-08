import { forwardRef, MutableRefObject, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useResolution } from "../../../hooks/useResolution";
import { LANGUAGES, SUPPORTED_LNGS } from "../../../i18next/i18next.contants";
import style from "./LanguageSelector.module.scss";
import { isActive } from "./utils";

interface ILanguageListProps {
    onClickLanguage?: () => void;
    className?: string
}
export const LanguageListComponent = ({
    onClickLanguage,
    className
}: ILanguageListProps, ref: MutableRefObject<HTMLUListElement>) => {
    const { isDesktop } = useResolution();
    const { i18n, t } = useTranslation("global");
    const onSelectLanguage = useCallback((newLang: typeof SUPPORTED_LNGS[number]) => {
        i18n.changeLanguage(newLang);
        document.documentElement.lang = newLang;
        onClickLanguage?.();
    }, [onClickLanguage, i18n])
    const triggerClick = useCallback((
        event: React.KeyboardEvent<HTMLLIElement>,
        lang: typeof SUPPORTED_LNGS[number]
    ) => {
        if (event.key === "Enter") onSelectLanguage(lang)
    }, [onSelectLanguage])

    return (
        <ul
            className={[style.languageList, className].join(" ")}
            ref={ref}
            role="listbox"
            tabIndex={0}
            aria-label={t("LANGUAGE_SELECTOR.CHOOSE_LANGUAGE")}
        >
            {LANGUAGES.map(lng => (
                <li
                    className={[style.languageListItem, isActive(i18n, lng.lang) ? style.active : ""].join(" ")}
                    key={lng.lang}
                    onClick={() => onSelectLanguage(lng.lang)}
                    tabIndex={0}
                    role="option"
                    aria-label={lng.label}
                    aria-selected={isActive(i18n, lng.lang)}
                    onKeyDown={(evt: React.KeyboardEvent<HTMLLIElement>) => triggerClick(evt, lng.lang)}
                >
                    <div className={style.itemContent} >
                        <img src={lng.icon} className={style.langImg} aria-hidden />
                        <label aria-hidden>
                            {!isDesktop ? lng.lang : lng.label}
                        </label>
                    </div>
                </li>
            ))}
        </ul>
    )
};

LanguageListComponent.displayName = "LanguageList";
export const LanguageList = forwardRef(LanguageListComponent)