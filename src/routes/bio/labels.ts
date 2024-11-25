import { IRouteContentOrganization } from "../../types";

export const BIO_LABELS: IRouteContentOrganization = {
    TITLE: "Presentazione personale",
    SUBTITLE: `Sono una persona multipotenziale che ha scoperto una grande passione per il coding e per lo sviluppo software.
    Focalizzato sulla parte FrontEnd con competenze basilari di sviluppo BackEnd, la mia attività quotidiana consiste
    in scrivere codice testabile, manutenibile e funzionante. L' amore per le interazioni umane e proattive è la mia chiave per 
    una collaborazione efficace in team`,
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
                nozioni di UX/UI.`
            ],
        },
        {
            TITLE: "Formazione scolastica",
            PARAGRAPHS: [
                `Ho sempre amato la matematica, le scienze in generale e smanettare con il PC, perciò scelsi di frequentare il Liceo Scientifico, presso il quale conseguii
                il diploma di maturità con l'intenzione di intraprendere un percorso di formazione universitaria in ambito IT.`, 
                `Amo però molto anche l'arte, soprattutto il disegno, e questo mi portò invece a lanciarmi in 
                un percorso di formazione artistica presso l'Accademia di Belle Arti.
                Mi resi però conto che non mi sentivo del tutto adatto a questo mondo, quindi decisi di formarmi in una
                professione che mi piacesse e che allo stesso tempo mi garantisse una sufficiente indipendenza economica.`
            ],
        },
        {
            TITLE: "Formazione professionale",
            PARAGRAPHS: [
                `Ho partecipato ad un corso intensivo di programmazione in Java a scopo assunzione, al quale potei accedere solo
                passando con successo un test attitudinale poichè non avevo competenze comprovate di IT.
                Terminato il corso a novembre 2019, venni valutato e poi assunto come Junior Developer dall'azienda Dale Consulting.`,
                
                `Prima di iniziare a lavorare come sviluppatore, conseguì un attestato di qualifica professionale come Bartender e lavorai 
                in pub, discoteche e come freelance ad eventi privati. Saltuariamente, svolgo questa professione tutt'ora`,
            ],
        },
        {
            TITLE: "Attitudine",
            PARAGRAPHS: [
                `Sono una persona che non ha una passione in particolare:
                amo tante attività e cose diverse, ognuna soddisfacente a suo modo. Questa consapevolezza mi ha portato 
                a dedicare tempo ed energie per capire verso che direzione voglio migliorarmi in ogni fase della mia vita.`,

                `La mia curiosità mi porta a farmi molte domande e quindi a scoprire ed approfondire molti temi imparando in fretta, 
                sia nel lavoro che nella vita privata.`,

                `Amo le interazioni umane:
                ho sincero piacere a interagire con gli altri, soprattutto ovviamente se con esito positivo.
                Adoro viaggiare perchè soddisfa e alimenta la mia curiosità e mi permette di conoscere nuove culture attraverso l'interazione.
                Ho esperito anche la potenza delle interazioni umane e mi impegno ad applicarla al lavoro in team.`,

                `Per maggiori informazioni sulle mie abilità personali, <a href="/skills/soft-skills">vai alla sezione dedicata</a>`
            ],
        }
    ]
}