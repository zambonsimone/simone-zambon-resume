import { IRouteContentOrganization } from "../../../types";

export const OTHER_SOFTWARE_SKILLS_LABELS: IRouteContentOrganization = {
    TITLE: "Other Software Skills",
    SUBTITLE: "",
    INTRO_CODE: `const otherSoftwareSkills = ["InkScape", "GIMP", "MS Excel"];`,
    SECTIONS: [
        {
            TITLE: "InkScape - GIMP",
            DETAILS: {
                LEVEL: 6.5
            },
            PARAGRAPHS: [
                `Fin da giovanissimo ho avuto una forte passione per il disegno e la pittura, eseguiti con diverse tecniche (carboncino, pastelli, acrilico, acquerello),
                che negli anni si è espansa fino al mondo della manipolazione grafica e del disegno vettoriale.
                Così, per puro passatempo, ho iniziato a creare e modificare immagini utilizzando Adobe Photoshop ma soprattutto GIMP.
                Successivamente ho iniziato anche a familiarizzare con il mondo della grafica vettoriale, realizzando anche diversi loghi e grafiche
                per amici e piccole attività commerciali.
                Le competenze acquisite sul disegno vettoriale mi sono state utili anche per portare a termine piccoli task inerenti ad icone e font nei progetti a cui ho partecipato. `
            ],
        },
        {
            TITLE: "Microsoft Excel",
            DETAILS: {
                LEVEL: 6
            },
            PARAGRAPHS: [
                `Negli ultimi anni ho avuto modo di utilizzare Excel frequentemente, sia per creare fogli di calcolo utilizzando tabelle, regole e formule per la compilazione
                di dati importanti relativi alla piccola impresa familiare dei miei genitori, sia come supporto per la generazione di query 
                per effettuare diverse operazioni sui DB, durante la mia partecipazione ad un <a href="/main-experiences">incarico presso UniCredit</a>.`
            ],
        }
    ]
}