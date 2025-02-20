import i18next from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const NAMESPACES = ["test","homepage","bio","itSkills","softSkills","otherSkills","mainExperiences","sideExperiences"];

export async function initI18next() {
  await i18next
    .use(initReactI18next)
    .use(I18NextHttpBackend)
    .init({
      ns: NAMESPACES,
      fallbackLng: "en",
      supportedLngs: ["it","en","nb"],
      debug: process.env.NODE_ENV === "development",
      backend:{
        loadPath: `${location.origin}/i18next/{{lng}}/{{ns}}.json`,
      },
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: true
      }
    });
}

