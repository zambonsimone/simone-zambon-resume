import { IRouteContentOrganization } from "../../../types";

export const IT_SKILLS_LABELS: IRouteContentOrganization = {
    TITLE: "Abilità e competenze IT",
    SUBTITLE: "Anche se la mia formazione come developer si è basata su <code>Java</code> ed <code>SQL</code>, ho un' esperienza pluriennale in FrontEnd, scrivendo principalmente codice <code>Typescript</code> e <code>React</code>",
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
        TITLE: "Javascript ES13 - SCSS/CSS3 - HTML5",
        DETAILS: {
          LEVEL: 9
        },
        PARAGRAPHS: [
          `<code>Javascript</code>, <code>CSS</code> e <code>HTML</code> sono il mio pane quotidiano ed è stato così per ogni progetto al quale ho lavorato come sviluppatore FrontEnd.`,

          `Anche se c'è molto e molto altro da imparare e da conoscere, ho potuto utilizzare quasi la totalità delle caratteristiche principali di <code>Javascript</code>,
          e ho potuto acquisire una conoscenza profonda di come opera e perchè.
          Ho lavorato molto spesso con chiamate REST ad API e con la programmazione asincrona, 
          ho manipolato eventi, <code>DOM</code>, molti tipi di oggetti e dati e conosco la differenza tra valore e riferimento.
          Ho familiarità con lo scoping dei dati, so cosa sono i <code>Lexical Environment</code> e come
          siano legati alle <code>Closure</code>. So capire e utilizzare correttamente il reference <code>this</code>.`,

          `Con <code>HTML</code> ho creato <code>DOM</code> con alberature chiare e semanticamente corrette, utilizzando molti attributi e funzionalità
          degli elementi nativi.`,

          `Con <code>CSS</code> ho definito stili e regole complessi con animazioni, media queries, variabili, pseudo elementi e i layout più recenti.
          So utilizzare correttamente anche la sintassi <code>SCSS</code> con nidificazioni, <code>mixins</code> e calcoli e so 
          configurare un <code>loader CSS</code> per utilizzare i moduli <code>SCSS</code> come oggetti <code>Javascript</code>.`
        ]
      },
      {
        TITLE: "React - Redux",
        DETAILS: {
          LEVEL: 9
        },
        PARAGRAPHS: [
            `<code>React</code> mi è piaciuto fin dall'inizio e questa è una delle ragioni per cui ho scelto di utilizzarlo per sviluppare questo sito.
            Ho una profonda conoscenza delle funzionalità e dei principi di <code>React</code>:
            so creare componenti classe e funzione complessi ma performanti, utilizzando hook nativi e custom per estrarre le logiche non relative al rendering;
            so gestire grandi strutture di dati con <code>Context</code> o utilizzando <code>redux-store</code> e azioni asincrone;
            ho familiarità con la gestione di effetti, eventi, re-rendering/re-mount e so ottimizzare le performance
            usando <code>lazy loading</code> e memoizzazioni.`
        ]
      },
      {
        TITLE: "Typescript",
        DETAILS: {
          LEVEL: 9
        },
        PARAGRAPHS: [
          `Programmando principalmente con <code>Typescript</code> so sfruttare molti tipi predefiniti e tipi custom anche complessi e utilizzarli per una forte tipizzazione e <code>typeguard</code>.`,
        ]
      },
      {
        TITLE: "Jest - Cypress",
        DETAILS: {
          LEVEL: 8
        },
        PARAGRAPHS: [
          `Lavorando in contesti di grandi applicazioni ho scritto molti test unitari e di UI. Con <code>Jest</code> so testare
          componenti, hook e utility utilizzando anche librerie di test fornite da <code>React</code>, simulando e gestendo correttamente eventi utente e cambi di stato.
          So definire un ambiente necessario e sufficiente per ciò che voglio testare ricorrendo a mock e <code>spyOn</code>.
          Con <code>Cypress</code> so testare interi flussi di UI, utilizzando <code>fixture</code> e <code>interceptor</code>. Utilizzo efficacemente
          quasi tutti gli attuali comandi di default di <code>Cypress</code> e so definirne di nuovi custom.`
        ]
      },
      {
        TITLE: "ReactNative - Android Studio",
        DETAILS: {
          LEVEL: 7
        },
        PARAGRAPHS: [
          `Ho avuto modo di fare interventi relativamente piccoli ad applicazioni mobile utilizzando <code>ReactNative</code> e <code>Android Studio</code>.
          Oltre alla conoscenza dei principi di <code>ReactNative</code> acquisita con l'utilizzo di <code>React</code>, so utilizzare componenti e API nativi, configurare
          dispositivi reali o virtuali con <code>Android Studio</code> e utilizzare gli strumenti di debug.
          Ho anche qualche nozione sui linguaggi <code>Swift</code> e <code>Kotlin</code> e sullo sviluppo dei layout con l'IDE di <code>Android Studio</code>.`
        ] 
      },
      {
        TITLE: "GIT - GitLab - DevOps",
        DETAILS: {
          LEVEL: 7,
        },
        PARAGRAPHS: [
          `So versionare un repository utilizzando <code>GIT</code> da UI o da terminale. Conosco la semantica dei branch principali, so utilizzare
          tutti i comandi più importanti di <code>GIT</code> per modificare correttamente lo storico, i commit e i branch, e
          so etichettare commit con tag.
          So creare <code>submodule</code> e inizializzarli/aggiornare il loro riferimento sui progetti che li utilizzano.
          Ho confidenza con i processi automatizzati di build, deploy e di test, che so configurare per la piattaforma <code>GitLab</code>.`
        ]
      },
      {
        TITLE: "NodeJS",
        DETAILS: {
          LEVEL: 7
        },
        PARAGRAPHS: [
          `Ho familiarità con <code>NodeJS</code> essendo uno strumento importante per tutti i progetti a cui ho lavorato:
          dall'installazione e gestione delle librerie come dipendenze fino alla definizione di script e file di configurazione per linter e bundler.
          So configurare un server di <code>Webpack</code> e implementarne uno in locale con <code>Express</code>, so gestire variabili d'ambiente e scrivere sul <code>file system</code>.`
        ]
      },
      {
        TITLE: "PL/SQL - T/SQL",
        DETAILS: {
          LEVEL: 6
        },
        PARAGRAPHS: [
          `So scrivere query per la più comuni operazioni <code>CRUD</code> su database relazionali usando anche condizioni, variabili, raggruppamenti e ordinamenti.
          Conosco i principi fondamentali dei database relazionali e come si collegano i record di diverse tabelle utilizzando chiavi esterne e unioni.`
        ]
      },
      {
        TITLE: "Java",
        DETAILS: {
          LEVEL: 5.5
        },
        PARAGRAPHS: [
          `Non ho mai lavorato su progetti come sviluppatore BackEnd, ma durante la mia formazione in <code>Java</code> ho studiato e 
          applicato nel pratico le caratteristiche e le funzionalità principali di <code>Java EE</code>. Conosco <code>Maven</code>, <code>Spring</code> con <code>Spring Boot</code> per creare applicazioni
          con configurazioni semplificate. Conosco il design pattern <code>MVC</code> e come si separano i vari layer di responsabilità del codice, ho utilizzato <code>Hibernate</code>
          per astrarre la relazione con i database attraverso il pattern <code>DAO</code>. Ho imparato a gestire i pacchetti buildati e installarli su un server come <code>Tomcat</code>
          e a scrivere test con <code>JUnit</code>.`
        ]
      }
    ]
}