import { IRouteContentOrganization } from "../../../types";

export const SIDE_EXPERIENCES_LABELS: IRouteContentOrganization = {
    TITLE: "TITLE",
    SUBTITLE: "SUBTITLE",
    INTRO_CODE: `const sideProfessionalExps = new ProfessionalExperiences([
  { 
    what: "Bartender and bar manager", 
    where: [
      "Taverna del Bucaniere, Gallarate (Italy)",
      "Private parties and events (Italy)",
      "Blu Martini Club, Lugano (Switzerland - Italy)",
      "Village Summer Disco, Varese (Italy)"
    ] 
    when: { from: "2015-09-01", to: "current date" }
  },
  { 
    what: "Receptionist, city guide, cleaner", 
    where: [
      "Bikini Hostel, Puerto Viejo de Talamanca (Costa Rica)",
      "InboXchange Hostel, Medellin (Colombia)"
    ], 
    when: { from: "2018-11-01", to: "2019-28-02" }
  },
  {
    what: "CNC machines programmer and operator",
    where: "Duchini Srls, Caronno Varesino (Italy)",
    when: { from: "2017-03-08", to: "2017-05-02" }
  },
  {
    what: "Volounteer in daily center for Alzheimer's patients",
    where: "Fondazione Molina, Varese (Italy)",
    when: { from: "2011-08-22", to: "2012-06-07" }
  }    
])`,
    SECTIONS: [
        {
            TITLE: "BARTENDER.TITLE",
            DETAILS: {
                WHERE: [
                    {
                        PLACE: `"Taverna del Bucaniere", Gallarate, Varese (Italia)`,
                        DATES: ["2015/09/01", "2025/02/28"],
                    },
                    {
                        PLACE: `Feste ed eventi privati (Svizzera - Italia)`,
                        DATES: ["2017/01/10", "2025/02/28"],
                    },
                    {
                        PLACE: `"Blu Martini Club", Lugano (Svizzera)`,
                        DATES: ["2019/06/01", "2019/10/12"],
                    },
                    {
                        PLACE: `"Village Summer Disco", Varese (Italia)`,
                        DATES: ["2016/06/01", "2016/09/24"],
                    }
                ]
            },
            PARAGRAPHS: [
                "BARTENDER.DESCRIPTION"
            ]
        },
        {
            TITLE: "RECEPTION.TITLE",
            DETAILS: {
                WHERE: [
                    {
                        DATES: ["2019/02/01", "2019/02/28"],
                        PLACE: `"InboXChange Hostel", Medellin (Colombia)`,
                    },
                    {
                        DATES: ["2018/11/01", "2018/11/30"],
                        PLACE: `"Bikini Hostel", Limon (Costa Rica)`,
                    }
                ]
            },
            PARAGRAPHS: [
                "RECEPTION.MAIN_TASK",
                "RECEPTION.GUIDE"
            ]
        },
        {
            TITLE: "CNC.TITLE",
            DETAILS: {
                WHERE: [
                    {
                        DATES: ["2017/03/08", "2017/05/02"],
                        PLACE: `"Duchini & Sgarbozza", Caronno Varesino, Varese (Italia)`,
                    }
                ]
            },
            PARAGRAPHS: [
                "CNC.DESCRIPTION"
            ]
        },
        {
            TITLE: "VOLUNTEER.TITLE",
            DETAILS: {
                WHERE: [
                    {
                        PLACE: `"Fondazione Molina", Varese (Italy)`,
                        DATES: ["2011/08/22", "2012/06/07"],
                    }
                ]
            },
            PARAGRAPHS: [
                "VOLUNTEER.INTRO",
                "VOLUNTEER.MAIN_TASK"
            ]
        }
    ]
}