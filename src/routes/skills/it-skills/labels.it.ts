import { IRouteContentOrganization } from "../../../types";

export const IT_SKILLS_LABELS: IRouteContentOrganization = {
  TITLE: "TITLE",
  SUBTITLE: "SUBTITLE",
  INTRO_CODE: `const itSkills = new Skills({
  programmingLanguages: ["JS", "HTML", "CSS", "Java", "SQL", "Kotlin", "Swift"],
  superSets: ["Typescript", "SCSS"],
  libraries: ["React", "ReactNative", "Redux"],
  frameworks: ["Cypress", "Jest", "Angular"],
  IDEs: ["Visual Studio Code", "Android Studio", "SQL Developer"],
  devOps: ["GIT", "GitLab", "GitHub"],
  others: ["NodeJS", "Swagger", "Postman"]
})`,
  SECTIONS: [
    {
      TITLE: "JS_HTML_CSS.TITLE",
      DETAILS: {
        LEVEL: 9
      },
      PARAGRAPHS: [
        "JS_HTML_CSS.INTRO",
        "JS_HTML_CSS.JS",
        "JS_HTML_CSS.HTML",
        "JS_HTML_CSS.CSS"
      ]
    },
    {
      TITLE: "REACT_REDUX.TITLE",
      DETAILS: {
        LEVEL: 9
      },
      PARAGRAPHS: [
        "REACT_REDUX.DESCRIPTION"
      ]
    },
    {
      TITLE: "TYPESCRIPT.TITLE",
      DETAILS: {
        LEVEL: 9
      },
      PARAGRAPHS: [
        "TYPESCRIPT.DESCRIPTION"
      ]
    },
    {
      TITLE: "JEST_CYPRESS.TITLE",
      DETAILS: {
        LEVEL: 8
      },
      PARAGRAPHS: [
        "JEST_CYPRESS.DESCRIPTION"
      ]
    },
    {
      TITLE: "MOBILE.TITLE",
      DETAILS: {
        LEVEL: 7
      },
      PARAGRAPHS: [
        "MOBILE.DESCRIPTION"
      ]
    },
    {
      TITLE: "DEV_OPS.TITLE",
      DETAILS: {
        LEVEL: 7,
      },
      PARAGRAPHS: [
        "DEV_OPS.DESCRIPTION"
      ]
    },
    {
      TITLE: "NODE.TITLE",
      DETAILS: {
        LEVEL: 7
      },
      PARAGRAPHS: [
        "NODE.DESCRIPTION"
      ]
    },
    {
      TITLE: "DATABASE.TITLE",
      DETAILS: {
        LEVEL: 6
      },
      PARAGRAPHS: [
        "DATABASE.DESCRIPTION"
      ]
    },
    {
      TITLE: "JAVA.TITLE",
      DETAILS: {
        LEVEL: 6
      },
      PARAGRAPHS: [
        "JAVA.DESCRIPTION"
      ]
    }
  ]
}