import { IRouteContentOrganization } from "../../../types";

export const OTHER_SOFTWARE_SKILLS_LABELS: IRouteContentOrganization = {
    TITLE: "Altre abilità e competenze software",
    SUBTITLE: `So utilizzare anche software non direttamente correlati al mio ruolo di developer, ma che mi sono tornati
    utili nella mia carriera lavorativa`,
    INTRO_CODE: `const otherSoftwareSkills = ["InkScape", "GIMP", "MS Excel"];`,
    SECTIONS: [
        {
            TITLE: "InkScape - GIMP",
            DETAILS: {
                LEVEL: 6.5
            },
            PARAGRAPHS: [
                `Ho sempre avuto una grande passione per il disegno e la pittura, eseguiti con diverse tecniche (carboncino, pastelli, acrilico, acquerello),
                che negli anni si è espansa fino al mondo della manipolazione grafica e del disegno vettoriale.
                So creare e modificare immagini utilizzando Adobe Photoshop ma soprattutto <code>GIMP</code>.
                So realizzare loghi e grafiche per amici e piccole attività commerciali in grafica vettoriale utilizzando <code>InkScape</code>,
                ma anche portare a termine piccoli task inerenti ad icone e font nei progetti a cui ho partecipato`                
            ],
        },
        {
            TITLE: "Microsoft Excel",
            DETAILS: {
                LEVEL: 6
            },
            PARAGRAPHS: [
                `Negli ultimi anni ho avuto modo di utilizzare <code>MS Excel</code> abbastanza frequentemente. 
                So creare fogli di calcolo utilizzando tabelle, regole e formule per la compilazione di dati importanti
                che ho utilizzato sia per la piccola impresa familiare dei miei genitori, sia come supporto per la generazione di query 
                per effettuare diverse <a href="/experiences/main-experiences">operazioni sui database</a>.`
            ],
        }
    ]
}