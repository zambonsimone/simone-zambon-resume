import { i18n } from "i18next";
import { SUPPORTED_LNGS } from "../../../i18next/i18next.contants";

export function isActive(i18nInstance: i18n, lng: typeof SUPPORTED_LNGS[number]) {
    return i18nInstance.resolvedLanguage === lng;
}