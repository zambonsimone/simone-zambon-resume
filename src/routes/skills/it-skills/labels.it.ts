import { IRouteContentOrganization } from "../../../types";

export const IT_SKILLS_LABELS: IRouteContentOrganization = {
    TITLE: "Abilità e competenze IT",
    SUBTITLE: "Anche se la mia formazione come developer si è basata su Java ed SQL, ho un' esperienza pluriennale in FrontEnd, scrivendo principalmente codice Typescript e React",
    INTRO_CODE: `const itSkills = new Skills({
  programmingLanguages: ["JS", "HTML", "CSS", "Java", "SQL", "Kotlin", "Swift"],
  superSets: ["Typescript", "SCSS"],
  libraries: ["React", "ReactNative", "Redux"],
  frameworks: ["Cypress", "Jest", "Angular"],
  IDEs: ["Visual Studio Code", "Android Studio", "SQL Developer"],
  devOps: ["GIT", "GitLab", "GitHub"],
  others: ["NodeJS", "Swagger", "Postman"]
})`,
    SECTIONS: [
      {
        PARAGRAPHS: [
        `Come consulente ho lavorato in vari ruoli e progetti, che mi hanno permesso
        di usare molte tecnologie e di occuparmi di diversi layer di una applicazione.
        L'esperienza lavorativa principale come developer riguarda lo sviluppo FrontEnd per una holding di ospedali
        privati situata in Milano, Italia.`,

        `Da luglio 2021 il mio lavoro è focalizzato sullo sviluppo di nuove funzionalità, risoluzione di bug e scrittura di test
        per l'applicazione principale di questa holding, che dà ai clienti vari servizi relativi alle cliniche come 
        la prenotazione di esami e gestione dei propri referti e documenti medici.
        Come uno dei più esperti membri del team sono stato anche coinvolto in attività di onboarding e formazione di nuovi membri.
        `
        ]
      },
      {
        TITLE: "Javascript ES13 - SCSS/CSS3 - HTML5",
        DETAILS: {
          LEVEL: 8.5
        },
        PARAGRAPHS: [
          `Javascript, CSS e HTML sono il mio pane quotidiano ed è stato così per ogni progetto di FrontEnd al quale ho lavorato.`,

          `Anche se c'è molto e molto altro da imparare e da conoscere, ho potuto utilizzare quasi la totalità delle caratteristiche principali di Javascript,
          e ho potuto acquisire una conoscenza profonda di come opera e perchè.
          Ho lavorato molto spesso con chiamate REST ad API e con la programmazione asincrona, 
          ho manipolato eventi, DOM, molti tipi di oggetti e dati e conosco la differenza tra valore e riferimento.
          Ho familiarità con lo scoping dei dati, so cosa sono i Lexical Environment e come
          siano legati alle Closure. So capire e utilizzare correttamente il reference this.`,

          `Con HTML ho creato DOM con alberature chiare e semanticamente corrette, utilizzando molti attributi e funzionalità
          degli elementi nativi.`,

          `Con CSS ho definito stili e regole complessi con animazioni, media queries, variabili, pseudo elementi e i layout più recenti.
          So utilizzare correttamente anche la sintassi SCSS utilizzando nidificazioni, mixins e calcoli e so 
          configurare un loader CSS per utilizzare i moduli SCSS come oggetti Javascript.`
        ]
      },
      {
        TITLE: "Typescript",
        DETAILS: {
          LEVEL: 8.5
        },
        PARAGRAPHS: [
          `Programmando principalmente con Typescript so sfruttare molti tipi predefiniti e tipi custom anche complessi e utilizzarli per una forte tipizzazione e typeguard.`,
        ]
      },
      {
        TITLE: "React - Redux",
        DETAILS: {
          LEVEL: 8.5
        },
        PARAGRAPHS: [
            `React mi è piaciuto fin dall'inizio e questa è una delle ragioni per cui ho scelto di utilizzarlo per sviluppare questo sito.
            Ho una profonda conoscenza delle funzionalità e dei principi di React:
            so creare componenti classe e funzione complessi ma performanti, utilizzando hook nativi e custom per estrarre le logiche non relative al rendering;
            so gestire grandi strutture di dati con Context o utilizzando redux-store e azioni asincrone;
            ho familiarità con la gestione di effetti, eventi, re-rendering/re-mount e so ottimizzare le performance
            usando lazy loading e memoizzazioni.`
        ]
      },
      {
        TITLE: "Jest - Cypress",
        DETAILS: {
          LEVEL: 8
        },
        PARAGRAPHS: [
          `Lavorando in contesti di grandi applicazioni ho scritto molti test unitari e di UI. Con Jest so testare
          componenti, hook e utility utilizzando anche librerie di test fornite da React, simulando e gestendo correttamente eventi utente e cambi di stato.
          So definire un ambiente necessario e sufficiente per ciò che voglio testare ricorrendo a mock e spyOn.
          Con Cypress so testare interi flussi di UI, utilizzando fixture e interceptor. Utilizzo efficacemente
          quasi tutti gli attuali comandi di default di Cypress e so definirne di nuovi custom.`
        ]
      },
      {
        TITLE: "ReactNative - Android Studio",
        DETAILS: {
          LEVEL: 7
        },
        PARAGRAPHS: [
          `Ho avuto modo di fare interventi relativamente piccoli ad applicazioni mobile utilizzando ReactNative e Android Studio.
          Oltre alla conoscenza dei principi di ReactNative acquisita con l'utilizzo di React, so utilizzare componenti e API nativi, configurare
          dispositivi reali o virtuali con Android Studio e utilizzare gli strumenti di debug.
          Ho anche qualche nozione sui linguaggi Swift e Kotlin e sullo sviluppo dei layout con l'IDE di Android Studio.`
        ] 
      },
      {
        TITLE: "GIT - GitLab - DevOps",
        DETAILS: {
          LEVEL: 7,
        },
        PARAGRAPHS: [
          `So versionare un repository utilizzando GIT da UI o da terminale. Conosco la semantica dei branch principali, so utilizzare
          tutti i comandi più importanti di GIT per modificare correttamente lo storico, i commit e i branch, e
          so creare e utilizzare submodule. 
          Ho familiarità con i concetti di merge request e review del codice, con le operazioni di tag e rilascio e con i processi automatizzati di build e test soprattutto di GitLab attraverso il file gitlab-ci.yaml.`
        ]
      },
      {
        TITLE: "NodeJS",
        DETAILS: {
          LEVEL: 6.5
        },
        PARAGRAPHS: [
          `Ho familiarità con NodeJS essendo uno strumento importante per tutti i progetti a cui ho lavorato:
          dall'installazione e gestione delle librerie come dipendenze fino alla definizione di script e file di configurazione per linter e bundler.
          So configurare un server di Webpack e implementarne uno in locale con Express, so gestire variabili d'ambiente e scrivere sul file system.`
        ]
      },
      {
        TITLE: "PL/SQL - T/SQL",
        DETAILS: {
          LEVEL: 6
        },
        PARAGRAPHS: [
          `So scrivere query per la più comuni operazioni CRUD su database relazionali usando anche condizioni, variabili, raggruppamenti e ordinamenti.
          Conosco i principi fondamentali dei database relazionali e come si collegano i record di diverse tabelle utilizzando chiavi esterne e unioni.`
        ]
      },
      {
        TITLE: "Java",
        DETAILS: {
          LEVEL: 5.5
        },
        PARAGRAPHS: [
          `Non ho mai lavorato su progetti come sviluppatore BackEnd, ma durante la mia formazione in Java ho studiato e 
          applicato nel pratico le caratteristiche e le funzionalità principali di Java EE. Conosco Maven, Spring con Spring Boot per creare applicazioni
          con configurazioni semplificate. Conosco il design pattern MVC e come si separano i vari layer di responsabilità del codice, ho utilizzato Hibernate
          per astrarre la relazione con i database attraverso il pattern DAO. Ho imparato a gestire i pacchetti buildati e installarli su un server come Tomcat 
          e a scrivere test con JUnit.`
        ]
      }
    ]
}