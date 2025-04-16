import { IRouteContentOrganization } from "../../../types";

export const MAIN_EXPERIENCES_LABELS: IRouteContentOrganization = {
    TITLE: "TITLE",
    SUBTITLE: "SUBTITLE",
    INTRO_CODE: `const mainProfessionalExps = new ProfessionalExperiences([
  { 
      what: "Front End Developer", 
      where: "Gruppo San Donato, Milan (Italy)" 
      when: { from: "2021-07-01", to: "2021-02-14" }
  },
  { 
      what: "Front End Developer", 
      where: "Syskoplan Reply Gmbh (Switzerland)",
      when: { from: "2020-12-10", to: "2021-03-10" },
  },
  { 
      what: "Database Administrator", 
      where: "Unicredit S.p.A. (Italy)",
      when: { from: "2020-09-04", to: "2020-12-10" } 
  },
  { 
      what: "Front End Developer", 
      where: "Sisal Group S.p.A. (Italy)",
      when: { from: "2019-12-02", to: "2020-08-01" },
  }
])`,
    SECTIONS: [
        {
            TITLE: `GSD.TITLE`,
            DETAILS: {
                TEXT: `GSD.TEXT`,
                WHERE: [
                    {
                        DATES: ["2021/07/01", "2025/02/14"],
                        PLACE: `"Gruppo San Donato", Milano (Italia)`
                    }
                ]
            },
            PARAGRAPHS: [
                "GSD.INTRO",
                "GSD.MAIN_TASK",
                "GSD.DESIGN",
                "GSD.COOPERATION",
                "GSD.CONCLUSION"
            ]
        },
        {
            TITLE: `SYSKOPLAN.TITLE`,
            DETAILS: {
                TEXT: "SYSKOPLAN.TEXT",
                WHERE: [
                    {
                        DATES: ["2020/12/10", "2021/03/10"],
                        PLACE: `"Syskoplan Reply Gmbh" (Svizzera)`
                    }
                ]
            },
            PARAGRAPHS: [
                "SYSKOPLAN.INTRO",
                "SYSKOPLAN.MAIN_TASK"
            ]
        },
        {
            TITLE: `UNICREDIT.TITLE`,
            DETAILS: {
                TEXT: "UNICREDIT.TEXT",
                WHERE: [
                    {
                        DATES: ["2020/09/04", "2020/12/10"],
                        PLACE: `"Unicredit S.p.A." (Italia)`
                    }
                ]
            },
            PARAGRAPHS: [
                "UNICREDIT.INTRO",
                "UNICREDIT.MAIN_TASK",
                "UNICREDIT.ONBOARDING",
                "UNICREDIT.CONCLUSION"
            ]
        },
        {
            TITLE: `SISAL.TITLE`,
            DETAILS: {
                TEXT: "SISAL.TEXT",
                WHERE: [
                    {
                        DATES: ["2019/12/02", "2020/08/01"],
                        PLACE: `"Sisal Group S.p.A." (Italia)`
                    }
                ]
            },
            PARAGRAPHS: [
                "SISAL.INTRO",
                "SISAL.MAIN_TASK"
            ]
        },
        {
            TITLE: `DALE.TITLE`,
            DETAILS: {
                TEXT: "DALE.TEXT",
                WHERE: [
                    {
                        DATES: ["2019/11/29", "2020/01/13"],
                        PLACE: `"Dale Consulting S.r.l." (Italia)`
                    }
                ]
            },
            PARAGRAPHS: [
                "DALE.INTRO",
                "DALE.MAIN_TASK"
            ]
        }
    ]
}
