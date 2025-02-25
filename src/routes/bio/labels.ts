import { IRouteContentOrganization } from "../../types";

export const BIO_LABELS: IRouteContentOrganization = {
    TITLE: "TITLE",
    SUBTITLE: "SUBTITLE",
    INTRO_CODE: `const simone = new PersonalData({
  name: "Simone",
  surname: "Zambon",
  birthDay: "1995/01/16",
  nationality: "Italian",
  country: "Italy",
  address: "Via Roma 21, Castronno (VA)"
});`,
    SECTIONS: [
        {
            TITLE: "INTRO.TITLE",
            PARAGRAPHS: [
                "INTRO.DESCRIPTION"
            ],
        },
        {
            TITLE: "EDUCATION.TITLE",
            PARAGRAPHS: [
                "EDUCATION.SCIENCE",
                "EDUCATION.ARTS"
            ],
        },
        {
            TITLE: "PROFESSIONAL_EDUCATION.TITLE",
            PARAGRAPHS: [
                "PROFESSIONAL_EDUCATION.DEVELOPER",
                "PROFESSIONAL_EDUCATION.BARTENDER"
            ],
        },
        {
            TITLE: "ATTITUDE.TITLE",
            PARAGRAPHS: [
                "ATTITUDE.MULTIPOTENTIALITY",
                "ATTITUDE.CURIOSITY",
                "ATTITUDE.SOCIALITY",
                "ATTITUDE.MORE_INFO"
            ],
        }
    ]
}