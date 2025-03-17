import { IRouteContentOrganization } from "../../types";

interface IInstructions {
    INSTRUCTIONS: {
        TITLE: string;
        LIST_ITEMS: string[];
    }
}
export const HOMEPAGE_LABELS: IRouteContentOrganization & IInstructions = {
    TITLE: "TITLE",
    SUBTITLE: "SUBTITLE",
    INSTRUCTIONS: {
        TITLE: "INSTRUCTIONS.TITLE",
        LIST_ITEMS: [
            "INSTRUCTIONS.LIST_ITEMS.NAVBAR",
            "INSTRUCTIONS.LIST_ITEMS.PROFILE_PICTURE",
            "INSTRUCTIONS.LIST_ITEMS.CONTACT_FORM"
        ],
    },
    SECTIONS: [
        {
            TITLE: "IMPLEMENTATION.TITLE",
            PARAGRAPHS: [
                "IMPLEMENTATION.FRONTEND",
                "IMPLEMENTATION.BACKEND",
                "IMPLEMENTATION.PURPOSE"
            ]
        },
        {
            TITLE: "UX_UI.TITLE",
            PARAGRAPHS: [
                "UX_UI.DESCRIPTION"
            ],
        },
        {
            TITLE: "CODE_ORGANIZATION.TITLE",
            PARAGRAPHS: [
                "CODE_ORGANIZATION.DESCRIPTION"
            ],
        },
        {
            TITLE: "DEVELOPING_LANGUAGE.TITLE",
            PARAGRAPHS: [
                "DEVELOPING_LANGUAGE.DESCRIPTION"
            ],
        },
        {
            TITLE: "DEVELOPING_STRATEGY.TITLE",
            PARAGRAPHS: [
                "DEVELOPING_STRATEGY.DESCRIPTION"
            ],
        }
    ]
}