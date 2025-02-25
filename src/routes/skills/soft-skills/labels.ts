import { IRouteContentOrganization } from "../../../types";

export const SOFT_SKILLS_LABELS: IRouteContentOrganization = {
  TITLE: "TITLE",
  INTRO_CODE: `const softSkills = new Skills({
  languages: ["Italian", "English", "Spanish", "French"],
  driverLicense: "B",
  strengths: ["Determination", "Communication", "Proactiveness", "Reliability"]
})`,
  SECTIONS: [
    {
      TITLE: "LANGUAGE.TITLE",
      SUB_SECTIONS: [
        {
          TITLE: "LANGUAGE.ITALIAN.TITLE",
          DETAILS: {
            LEVEL: 10,
            LEVEL_NAME: "C2"
          },
          PARAGRAPHS: [
            "LANGUAGE.ITALIAN.DESCRIPTION"
          ]
        },
        {
          TITLE: "LANGUAGE.ENGLISH.TITLE",
          DETAILS: {
            LEVEL: 7.5,
            LEVEL_NAME: "B2",
          },
          PARAGRAPHS: [
            "LANGUAGE.ENGLISH.DESCRIPTION"
          ]
        },
        {
          TITLE: "LANGUAGE.SPANISH.TITLE",
          DETAILS: {
            LEVEL: 6,
            LEVEL_NAME: "B1"
          },
          PARAGRAPHS: [
            "LANGUAGE.SPANISH.DESCRIPTION"
          ]
        },
        {
          TITLE: "LANGUAGE.NORWEGIAN.TITLE",
          DETAILS: {
            LEVEL: 4,
            LEVEL_NAME: "A1"
          },
          PARAGRAPHS: [
            "LANGUAGE.NORWEGIAN.DESCRIPTION"
          ]
        },
        {
          TITLE: "LANGUAGE.FRENCH.TITLE",
          DETAILS: {
            LEVEL: 4,
            LEVEL_NAME: "A1"
          },
          PARAGRAPHS: [
            "LANGUAGE.FRENCH.DESCRIPTION"
          ]
        }
      ]
    },
    {
      TITLE: "STRENGTHS.TITLE",
      SUB_SECTIONS: [
        {
          TITLE: "STRENGTHS.DETERMINATION.TITLE",
          DETAILS: {
            LEVEL: 9
          },
          PARAGRAPHS: [
            "STRENGTHS.DETERMINATION.DESCRIPTION"
          ]
        },
        {
          TITLE: "STRENGTHS.CURIOSITY.TITLE",
          DETAILS: {
            LEVEL: 9
          },
          PARAGRAPHS: [
            "STRENGTHS.CURIOSITY.DESCRIPTION"
          ]
        },
        {
          TITLE: "STRENGTHS.RELIABILITY.TITLE",
          DETAILS: {
            LEVEL: 8.5
          },
          PARAGRAPHS: [
            "STRENGTHS.RELIABILITY.DESCRIPTION"
          ]
        },
        {
          TITLE: "STRENGTHS.EMPATHY.TITLE",
          DETAILS: {
            LEVEL: 8.5
          },
          PARAGRAPHS: [
            "STRENGTHS.EMPATHY.DESCRIPTION"
          ]
        },
        {
          TITLE: "STRENGTHS.ECLECTICISM.TITLE",
          DETAILS: {
            LEVEL: 8
          },
          PARAGRAPHS: [
            "STRENGTHS.ECLECTICISM.DESCRIPTION"
          ]
        }
      ]
    }
  ]
}