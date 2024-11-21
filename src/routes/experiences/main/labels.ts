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
            TITLE: `FrontEnd Developer - Web & Mobile`,
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
                Italia, che crea, mantiene e migliora applicazioni destinate ai propri clienti o ai propri dipendenti.
                Il team e lo sviluppo erano organizzati secondo la metodologia Agile, 
                e le principali applicazioni su cui ho lavorato sono quelle destinate ai clienti, che danno loro vari servizi 
                relativi alle cliniche del gruppo, come la prenotazione di esami e visite e la gestione dei propri documenti e referti medici.
                Inizialmente, le applicazioni su cui sviluppavo usavano redux-store per la persistenza dei dati durante l'utilizzo e per le chiamate REST,
                poi rimpiazzato con vari Context.`,

                `Le mie attività principali consistevano in risoluzione di bug e sviluppo di funzionalità core o meno importanti.
                Al termine di ogni nuova implementazione, la fruibilità del codice e della UI veniva testata da <a href="/skills/it-skills">test unitari e di UI</a> scritti dal nostro team.
                Oltre a queste attività, ho partecipato attivamente allo sviluppo del supporto al multilingua, all'accessibilità delle applicazioni
                e alla configurazione degli strumenti di sviluppo e di CI.`,

                `Abbiamo lavorato in cooperazione con un team specializzato di UX/UI che ha disegnato una UI
                con i più recenti e alti standard sia qualitativi che di accessibilità per utenti con disabilità.
                Agli sviluppatori FrontEnd venivano comunque assegnate piccole attività di design come la modifica di file .svg per generare icone come font`,

                `Come uno dei membri più esperti del team ero anche incaricato di introdurre e formare i nuovi membri.
                Veniva data molta importanza alla collaborazione: il codice di uno sviluppatore subiva un controllo da parte di altri membri
                del team prima di essere applicato, si raccomandava il supporto ai colleghi in difficoltà e le nuove conoscenze venivano
                condivise tra i membri tramite una riunione periodica`,

                `Questo è stato l'incarico più importante a cui sono stato assegnato, dove ho potuto svolgere tutte le attività principali 
                su cui un developer FrontEnd è comunemente coinvolto, con notevoli autonomia e potere decisionale.`
            ]
        },
        {
            TITLE: `FrontEnd Developer - Web`,
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

                `L'applicazione era focalizzata sulle funzionalità e sull'accuratezza nella manipolazione dei dati
                piuttosto che sugli aspetti UX/UI. 
                Era realizzata con SAPUI5 e composta da molteplici piccole applicazioni seguendo il sistema di progettazione SAP Fiori:
                ogni applicazione forniva una funzionalità differente per gestire e monitorare diverse attività relative alle piattaforme petrolifere della compagnia,
                per esempio la logistica o la gestione delle risorse umane, ed era concepita per essere usata da utenti con un particolare ruolo e permessi.`,

                `La mia attività principale era risolvere bug e implementare nuove applicazioni su richietsa del cliente.
                Gli interventi riguardavano principalmente i form e il submit dei dati.
                Javascript era essenzialmente l'unico linguaggio di programmazione utilizzato, in aggiunta a qualche basica view in XML per 
                il design delle UI.`
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
                Ho lavorato in collaborazione con un team scelto di sviluppatori di Dale Consulting, ed eravamo 
                incaricati di risolvere incidenti e bug sui database dell'ambiente di produzione, testare ETL, guidare il processo di migrazione
                di tutti gli utenti UniCredit raggruppati per Paese da un vecchio applicativo PFM ad uno più recente, e gestire il processo di lancio del nuovo applicativo.`,

                `Data l'importanza e la sensibilità dei dati per una compagnia così rilevante, 
                abbiamo dovuto affrontare situazioni con un livello di stress difficile da gestire, spesso in orari notturni e senza preavviso.
                Questo rendeva alto il tasso di abbandono del progetto da parte delle risorse allocate, perciò ero anche incaricato 
                di introdurre e formare i nuovi membri del team.`,

                `In questo progetto ho potuto praticare molto la scrittura di query per i Database, scritte in PL/SQL o T/SQL (in base a quale applicazione PFM facevano
                riferimento i DB), utilizzando anche Microsoft Excel per facilitare la generazione di numerose query.`,
            ]
        },
        {
            TITLE: `FrontEnd Developer - Web`,
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
                `Sisal è una società italiana di scommesse che gestisce attività di gioco anche in altri paesi.
                Come primissimo incarico come sviluppatore FrontEnd e consulente IT, le mie attività erano semplici e limitate.
                Oltre allo sviluppo di un nuovo banner e delle sue logiche di visibilità,
                ho lavorato su attività di fix di design di diversi tipi, ho risolto problemi su messaggi di errore 
                e sull'interazione utente con elementi checkbox. Ho anche partecipato al supporto multilingua con angular-translate.`
            ]
        },
        {
          TITLE: `FrontEnd Developer - Web & Mobile`,
          DETAILS: {
              TEXT: "Angular8 - NativeScript - AJAX",
              WHERE: [
                  {
                      DATES: ["2019/11/29", "2020/01/13"],
                      PLACE: `"Dale Consulting S.r.l." (Italy)`
                  }
              ]
          },
          PARAGRAPHS: [
            `Durante le prime settimane dopo essere stato assunto come consulente, 
            sono stato assegnato ad un progetto interno dell'azienda per lo sviluppo di un applicazione PFM (Personal Financial Management).
            Era una applicazione multi-piattaforma in sviluppo con NativeScript e Angular8.
            Ho lavorato prevalentemente allo sviluppo della parte design di alcune pagine 
            e all'integrazione di servizi di BackEnd con AJAX.`
          ]
      }
    ]
}
                