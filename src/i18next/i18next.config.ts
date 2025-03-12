import i18next from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { NAMESPACES, SUPPORTED_LNGS } from "./i18next.contants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isCypress = !!(window as any).Cypress;
const cypressConfig = isCypress ? {
  backend: { loadPath: "" },
  debug: true
} : {};

export async function initI18next() {
  await i18next
    .use(initReactI18next)
    .use(I18NextHttpBackend)
    .init({
      ns: NAMESPACES,
      fallbackLng: "en",
      supportedLngs: SUPPORTED_LNGS,
      backend: {
        loadPath: `${location.origin}/i18next/{{lng}}/{{ns}}.json`,
      },
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: true
      },
      ...cypressConfig
    });
}

