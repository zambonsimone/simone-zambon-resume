import { IRouteContentOrganization } from "../../../types";
import { toDateString } from "../../../utils/date";

export const MAIN_EXPERIENCES_LABELS: IRouteContentOrganization = {
    TITLE: "Esperienze professionali principali",
    SUBTITLE: `Come consulente ho lavorato in diversi ruoli e parti di una applicazione, ma l'incarico più importante che mi è stato assegnato
    è lo svilippo front-end per una grande holding di ospedali privati situata in Milano, Italia.`,
    INTRO_CODE: `const mainProfessionalExps = new ProfessionalExperiences([
    { 
        what: "Front End Developer", 
        where: "Gruppo San Donato, Milan (Italy)" 
        when: { from: "2021-07-01", to: "current date" }
    },
    { 
        what: "Front End Developer", 
        where: "Syskoplan Reply Gmbh (Switzerland)",
        when: { from: "2020-12-10", to: "2021-03-10" },
    },
    { 
        what: "System Administrator", 
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
            TITLE: `Front End Developer - Web & Mobile`,
            DETAILS: {
                TEXT: `Typescript - React - Redux - ReactNative`,
                WHERE: [
                    {
                        DATES: ["2021/07/01", toDateString(new Date())],
                        PLACE: `"Gruppo San Donato", Milan (Italy)`
                    }
                ]
            },
            PARAGRAPHS: [
                `Da luglio 2021 il mio lavoro è focalizzato sullo sviluppo di nuove funzionalità, sulla risoluzione di bug e sulla
                scrittura di test per la software factory di Gruppo San Donato, una grande holding di ospedali privati situata in Milano
                (Italia), che crea, mantiene e migliora applicazioni destinate ai propri clienti o ai propri dipendenti.`,

                `Le principali applicazioni su cui ho lavorato sono quelle destinate ai clienti, che danno loro vari servizi 
                relativi alla loro attività presso le cliniche del gruppo, come la prenotazione di esami e visite e la gestione 
                dei propri documenti e referti medici.`,

                `Anche se la risoluzione di bug era una attività quotidiana, ho sviluppato molte importanti funzionalità che hanno aggiunto
                o modificato aspetti centrali.
                Al termine di ogni nuova implementazione, la fruibilità del codice e della UI veniva testata da unit test 
                e UI test scritti entrambi dal nostro team.
                <a>Vai alla pagina ITSkills per leggere nel dettagli quali tecnologie ho utilzzato durante questo incarico</a>`,

                `Abbiamo lavorato in cooperazione con un team specializzato di UX/UI che per l'applicazione hanno disegnato una UI
                che soddisfacesse sia i più recenti e alti standard qualitativi ma che fosse anche pienamente accessibile da utenti
                con disabilità.`,

                `Piccole attività di design però potevano essere assegnate a noi svilippatori front end, come ad esempio la modifica di file
                di grafica vettoriale che usavamo per generare icone come font.`,

                `Come uno dei membri più esperti del team ero anche incaricato di introdurre e formare i nuovi membri.`,

                `L'impegno del team nello scrivere codice ben organizzato e ispirato dalle buone norme era molto grande, 
                e ogni modifica al codice dei branch principali era attentamente controllata da altri membri del team.`,

                `Questo è stato l'incarico più importante a cui sono stato assegnato, mi ha ufficialmente reso un developer 
                dato che ho potuto svolgere tutte le attività principali su cui un developer front end è comunemente coinvolto,
                con notevoli autonomia e potere decisionale.`
            ]
        },
        {
            TITLE: `Front End Developer - Web`,
            DETAILS: {
                TEXT: "SAPUI5 - XML",
                WHERE: [
                    {
                        DATES: ["2020/12/10", "2021/03/10"],
                        PLACE: `"Syskoplan Reply Gmbh" (Switzerland)`
                    }     
                ]
            },
            PARAGRAPHS: [
                `Syskoplan è un ramo di Reply, una holding multinazionale localizzata in Svizzera e leader nel mercato IT.
                Durante la mia collaborazione col team Syskoplan eravamo assegnati ad attività di implementazione e manutenzione di funzionalità
                per una applicazione ERP di "Saipem S.p.A", una compagnia italiana operante nel settore dell'energia e delle infrastrutture.`,

                `E' stata la prima volta che ho lavorato ad una applicazione decisamente focalizzata sulle funzionalità e sull'accuratezza nella manipolazione dei dati
                piuttosto che una grafica e una esperienza utente attraenti e user-friendly.  
                L'applicazione era realizzata con SAPUI5, un framework comunemente utilizzato per costruire applicazioni ERP.
                Era composta da molteplici piccole applicazioni fornite dal sistema di progettazione SAP Fiori, che garantisce anche un design e un workflow brillanti:
                ogni applicazione forniva una funzionalità differente per gestire e monitorare diverse attività relative alle piattaforme petrolifere della compagnia,
                per esempio la logistica o la gestione delle risorse umane, ed era concepita per essere usata da utenti con un particolare ruolo e permessi.
                Ogni applicazione condivideva i dati con un database, anch'essi implementati e posseduti da Syskoplan.`,

                `La mia attività principale era risolvere bug e implementare nuove applicazioni quando il cliente Saipem ci richiedeva nuove funzionalità.
                Gli interventi riguardavano quasi sempre i form e i loro campi dato che l'applicazione si concentrava sullo scambio di dati.
                Javascript era essenzialmente l'unico linguaggio di programmazione utilizzato, in aggiunta a qualche basica view in XML per 
                il design della UI delle applicazioni.
                Come già menzionato, l'utilizzo di stili personalizzati era pressochè nullo, anche perchè la UI fornita da SAP Fiori 
                è già ottimizzata e responsiva per ogni dispositivo e risoluzione.`
            ]
        },
        {
            TITLE: `System Administrator`,
            DETAILS: {
                TEXT: "PL/SQL - T/SQL",
                WHERE: [
                    {
                        DATES: ["2020/09/04", "2020/12/10"],
                        PLACE: `"Unicredit S.p.A." (Italy)`
                    }
                ]
            },
            PARAGRAPHS: [
                `UniCredit è un gruppo bancario internazionel nonché il più grande in Italia, dove conta più di 2000 filiali.
                Ho lavorato qui in collaborazione con un team scelto, composto da sviluppatori di Dale Consulting, ed eravamo 
                incaricati di risolvere incidenti e bug sui database dell'ambiente di produzione, testare ETL, guidare il processo di migrazione
                di tutti gli utenti UniCredit raggruppati per Paese da un vecchio applicativo PFM ad uno più recente, e gestire il processo di lancio del nuovo.`,

                `Dato che il nostro compito consisteva nel gestire dati molto importanti e sensibili nei database di produzione per una compagnia
                così grande, abbiamo dovuto affrontare varie situazioni con un livello di stress difficile da gestire.
                Le operazioni dovevano spesso essere svolte durante la notte e ci venivano assegnate senza preavviso.
                Qualsiasi errore portava a problemi da gravi a molto critici.
                Dato che il tasso di abbandono del progetto da parte delle risorse allocate era notevole a causa delle condizioni stressanti
                citate prima, ero anche incaricato di introdurre e formare i nuovi membri del team.`,

                `In questo progetto ho potuto praticare molto la scrittura di query per i Database, scritte in PL/SQL o T/SQL (in base a quale applicazione PFM facevano
                riferimento i DB) con molti tipi di condizioni differenti, utilizzando anche Microsoft Excel per facilitarci la generazione
                di migliaia di righe di codice di query.`,
            ]
        },
        {
            TITLE: `Front End Developer  - Web`,
            DETAILS: {
                TEXT: "AngularJS - HTML - SCSS",
                WHERE: [
                    {
                        DATES: ["2019/12/02", "2020/08/01"],
                        PLACE: `"Sisal Group S.p.A." (Italy)`
                    }
                ]
            },
            PARAGRAPHS: [
                
            ]
        }
    ]
}
                