import { IRouteContentOrganization } from "../../../types";

export const SOFT_SKILLS_LABELS: IRouteContentOrganization = {
    TITLE: "Soft Skills",
    SUBTITLE: "",
    INTRO_CODE: `const softSkills = new Skills({
  languages: ["Italian", "English", "Spanish", "French"],
  driverLicense: "B",
  strenghts: ["Determination", "Communication", "Proactiveness", "Reliability"]
})`,
    SECTIONS: [
      {
        TITLE: "Languages",
        SUB_SECTIONS: [
          {
            TITLE: "Italian",
            DETAILS: {
              LEVEL: 10,
              LEVEL_NAME: "C2"
            },
            PARAGRAPHS: [
              `Italian is of course my native language, but i have always been affascinated by foreign languages also because
              i love to chat with people and different languages allow you to interact with people from different cultures and with different
              mindsets as the language models your thoughts. 
              The love for human interactions is a very important boost for me to improve foreign languages knowledge.`
            ]
          },
          {
            TITLE: "English",
            DETAILS: {
              LEVEL: 7,
              LEVEL_NAME: "B2",
            },
            PARAGRAPHS: [
              `Ho un buon livello di inglese ed è la lingua straniera che conosco meglio poichè fa parte della mia vita da quando ho iniziato a studiarla
              alle scuole elementari e mi ha accompagnato negli anni guardando film o giocando a videogiochi in lingua originale.
              Ora, sebbene il tempo per film e videogiochi si sia decisamente ridotto,
              ogni giorno leggo testi e ascolto spiegazioni in inglese per apprendere nuove nozioni su strumenti e pratiche utili al mio lavoro.
              e quasi tutti gli strumenti di lavoro che utilizzo richiedono una conoscenza della lingua inglese.`,

              `inoltre, Adoro viaggiare e ho comunicato in inglese in tanti paesi che ho visitato, conoscendo persone con le quali ho tutt'ora conversazioni
              nel mio tempo libero.`
            ]
          },
          {
            TITLE: "Spagnolo",
            DETAILS: {
              LEVEL: 5
            },
            PARAGRAPHS: [
              `Per quanto riguarda lo spagnolo, non l'ho mai studiato a scuola ma l'ho imparato nel mio tempo libero usando applicazioni e testi online,
              l'ho perfezionato molto (specialmente il parlato) durante un viaggio di 6 mesi in america latina, e continuo ad utilizzarlo tutt'ora 
              guardando film in lingua originale o comunicando con amici.`
            ]
          },
          {
            TITLE: "Francese",
            DETAILS: {
              LEVEL: 3
            },
            PARAGRAPHS: [
              `Il francese invece, per quanto lo abbia studiato alle scuole medie, è la lingua che ho utilizzato meno nel corso della mia vita.
              Ho comunque avuto occasione di usarla durante alcuni viaggi e continuo a perfezionarla per un piacere personale facendo pratica con la mia ragazza
              che è madrelingua francese.`
            ]
          }
        ]
      },
      {
        TITLE: "Strenghts",
        SUB_SECTIONS: [
          {
            TITLE: "Determinazione",
            DETAILS: {
              LEVEL: 9
            },
            PARAGRAPHS: [
              `Altro aspetto di me di cui sono molto fiero è la determinazione. Se decido di voler fare od ottenere qualcosa, è molto difficile
              che io non faccia di tutto per avere successo. Forse a volte peccherò di ingenuità, ma ho capito che la maggior parte dei limiti
              che ci si può trovare davanti sono quasi sempre solo mentali, e se qualcosa non è ottenibile in quel momento, il mio impegno e dedizione
              farà sì che io la ottenga presto.
              La mia determinazione è ciò che mi ha permesso di diventare developer senza delle vere conoscenze in campo IT,
              e che tutt'ora mi permette di crescere nella mia figura professionale spesso molto velocemente.`
            ]
          },
          {
            TITLE: "Curiosità",
            DETAILS: {
              LEVEL: 9
            },
            PARAGRAPHS: [
              `Sono molto curioso`
            ]
          },
          {
            TITLE: "Affidabilità e precisione",
            DETAILS: {
              LEVEL: 8.5
            },
            PARAGRAPHS: [
              `Per me è importante portare a termine correttamente i task che mi vengono assegnati, soprattutto se chi me li assegna
              conta su di me per un buon risultato. Ci tengo molto perciò a essere affidabile e svolgere il mio lavoro in maniera precisa e 
              accurata. Difficilmente mi accontento di informazioni incomplete e imprecise se ciò impedisce l'ottenimento di un ottimo risultato,
              e mi organizzo il lavoro per non tralasciare nessuna attività avendo sempre chiare le priorità.`
            ]
          },
          {
            TITLE: "Comunicazione",
            DETAILS: {
              LEVEL: 8.5
            },
            PARAGRAPHS: [
              `Riconosco molto l'importanza di una comunicazione proattiva, tanto nel lavoro quanto nella vita privata,
              confermata anche da corsi sulla comunicazione a cui abbiamo partecipato in azienda
              Ho prova ogni giorno di come quasi tutti i concetti vengano accolti positivamente, o comunque apertamente, 
              se trasmessi nella maniera corretta. La comunicazione ha anche grandi responsabilità sull'umore delle persone che hanno intrattenuto
              quella conversazione.
              Cerco di usare correttamente la vasta gamma di parole che ogni linguaggio mette a disposizione per
              esprimere concetti in maniera chiara ed efficace.
              Per questi motivi, sul lavoro colleghi e manager hanno piacere a comunicare con me, con vantaggi sia direttamente legati alla collaborazione
              lavorativa, sia legati all'atmosfera positiva dovuta al team.
              Tendo a entrare subito in confidenza con le persone, ma sono anche molto rispettoso degli spazi personali, discreto e professionale.`
            ]
          },
          {
            TITLE: "Varietà",
            DETAILS: {
              LEVEL: 8
            },
            PARAGRAPHS: [
              `Infine, se da un lato non posso dire di essermi specializzato in qualcosa di molto mirato, ho anche la fortuna di appassionarmi
              e volermi dedicare a diverse attività e in diversi ruoli.
              Ciò mi rende più facile conoscermi, capire quali sono i miei punti di forza, avere approcci più eclettici e poliedrici e adattarmi facilmente a nuovi ambienti o mansioni.`
            ]
          }
        ]
      }
    ]
}