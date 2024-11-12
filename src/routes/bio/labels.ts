import { IRouteContentOrganization } from "../../types";

export const BIO_LABELS: IRouteContentOrganization = {
    TITLE: "About Me",
    SUBTITLE: `A multipotentiality person who discovered a great passion for coding and software developing. 
        Focused on Front-End with basic Back-End 
        proficiency, my daily personal task is to 
        develop testable, maintenable and usable 
        code. 
        The love for human and proactive interactions 
        is my key for a great teamwork.`,
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
            TITLE: "Intro",
            PARAGRAPHS: [
                `Ciao! Sono Simone Zambon, sono italiano e ho sempre vissuto vicino alla città di Varese.
                Ho 30 anni e da più di 5 anni lavoro come sviluppatore FrontEnd, ma possiedo anche conoscenze di sviluppo BackEnd e 
                nozioni di UX/UI.
                In questa sezione introdurrò brevemente la mia persona e riassumerò le mie esperienze (lavorative e non).
                Per maggiori dettagli potete consultare ogni sezione di questo sito web.`
            ],
        },
        {
            TITLE: "Formazione scolastica",
            PARAGRAPHS: [
                `Ho sempre amato la matematica, le scienze in generale e smanettare con il PC, perciò scelsi di frequentare il Liceo Scientifico, presso il quale conseguii
                il diploma di maturità, con l'intenzione di intraprendere un percorso di formazione universitaria in ambito IT. 
                Amo però molto anche l'arte, soprattutto il disegno, e questo mi portò invece a lanciarmi in 
                un percorso di formazione artistica presso l'Accademia di Belle Arti.
                Mi resi però conto che non mi sentivo del tutto adatto a questo mondo, quindi decisi di formarmi in una
                professione che mi piacesse e mi desse un'indipendenza economica sufficiente a potermi permettere nuove esperienze di vita in generale.`
            ],
        },
        {
            TITLE: "Formazione professionale",
            PARAGRAPHS: [
                `Scelsi un corso professionale intensivo per diventare "Bartender", che considero una professione in grado
                di unire scienza e logica.
                Dopo aver conseguito un attestato di qualifica professionale al termine del corso, iniziai subito a lavorare 
                in pub e discoteche fino a svolgere questa professione (che saltuariamente svolgo tutt'ora) anche come freelance ad eventi privati.`,

                `Sebbene amassi questo lavoro nonostante i ritmi spesso stressanti e l'intensa mole di lavoro, 
                mi continuò a stuzzicare l'idea di una professione dove avrei potuto ricorrere maggiormente alla logica e alla matematica.
                Dopo essermi cimentato in qualche nuova professione anche per acquisire nuove competenze, 
                ho trovato un corso intensivo di programmazione in Java a scopo assunzione, al quale potei accedere solo passando con successo un test attitudinale 
                poichè non avevo competenze comprovate di IT.
                Al termine del corso venni valutato e poi assunto come Junior Developer dall'azienda Dale Consulting a novembre del 2019 fino a gennaio 2025.`
            ],
        },
        {
            TITLE: "Attitudine",
            PARAGRAPHS: [
                `Sono una persona che non ha una passione in particolare su cui investe la maggior parte delle energie:
                amo tante attività e cose diverse, ognuna soddisfacente a suo modo. Questa consapevolezza mi ha portato 
                a dedicare tempo ed energie per capire in che direzione voglio migliorarmi in ogni fase della mia vita.
                Le mie passioni che le mie competenze possono sembrare poco coerenti tra loro,
                ma spesso mi sono tornate utili in diversi contesti anche non correlati.`,

                `Mi ritengo anche una persona molto curiosa. Lo considero prevlentemente un pregio perchè mi porta a farmi molte domande, 
                scoprire ed approfondire molti temi e imparare in fretta, sia nel mondo del lavoro che nella vita privata.`,

                `Un altro aspetto della mia personalità è il mio amore verso le interazioni umane:
                ho sincero piacere a interagire con un altro essere umano, soprattutto ovviamente
                quando l'interazione termina con un feedback positivo da parte dei vari interlocutori.
                Adoro viaggiare proprio perchè soddisfa la mia curiosità e mi permette di conoscere nuove culture soprattutto attraverso l'interazione.
                Ho esperito anche la potenza delle interazioni umane specialmente se proattive, e mi impegno ad applicarla al lavoro in team.`,
            ],
        }
    ]
}