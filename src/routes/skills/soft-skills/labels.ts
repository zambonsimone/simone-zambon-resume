import { IRouteContentOrganization } from "../../../types";

export const SOFT_SKILLS_LABELS: IRouteContentOrganization = {
    TITLE: "Abilità e competenze personali",
    SUBTITLE: `La mia figura professionale non si limita a competenze IT, 
    ma è caratterizzata e trae vantaggio anche da diverse abilità e competenze trasversali`,
    INTRO_CODE: `const softSkills = new Skills({
  languages: ["Italian", "English", "Spanish", "French"],
  driverLicense: "B",
  strenghts: ["Determination", "Communication", "Proactiveness", "Reliability"]
})`,
    SECTIONS: [
      {
        TITLE: "Lingue",
        SUB_SECTIONS: [
          {
            TITLE: "Italiano",
            DETAILS: {
              LEVEL: 10,
              LEVEL_NAME: "C2"
            },
            PARAGRAPHS: [
              `La lingua italiana è ovviamente la mia lingua madre, con una solida preparazione grammaticale e lessicale 
              che si arricchisce con la lettura di molti racconti e articoli di ogni tipo.`
            ]
          },
          {
            TITLE: "Inglese",
            DETAILS: {
              LEVEL: 7.5,
              LEVEL_NAME: "B2",
            },
            PARAGRAPHS: [
              `Ho un discreto livello di conoscenza della lingua inglese: è la lingua straniera che conosco meglio poichè materia di studio
              fin dalle prime classi scolastiche ma soprattutto perchè ho potuto praticarla molto sia attraverso l'ascolto e la lettura di testi
              inglesi in film, articoli e videogiochi, sia attraverso il suo utilizzo nei tanti paesi che ho visitato, anche con persone con cui sono tutt'ora in contatto.`
            ]
          },
          {
            TITLE: "Spagnolo",
            DETAILS: {
              LEVEL: 6,
              LEVEL_NAME: "B1"
            },
            PARAGRAPHS: [
              `Non ho mai studiato la lingua spagnola in veri e propri percorsi di formazione ma l'ho imparata nel mio tempo libero usando applicazioni e testi online,
              perfezionandone molto l'utilizzo (specialmente la lingua parlata) durante una <a href="/experiences/secondary-experiences">esperienza di 6 mesi in Centro America</a>.`
            ]
          },
          {
            TITLE: "Norvegese",
            DETAILS: {
              LEVEL: 4,
              LEVEL_NAME: "A1"
            },
            PARAGRAPHS: [
              ``
            ]
          },
          {
            TITLE: "Francese",
            DETAILS: {
              LEVEL: 4,
              LEVEL_NAME: "A1"
            },
            PARAGRAPHS: [
              `Ho studiato la lingua francese nei 3 anni di scuola secondaria di primo grado, ma non avendola utilizzata molto se non per una esperienza
              di breve durata a Mbour, Senegal, ho potuto solo migliorarla in autonomia con amici francesi.`
            ]
          }
        ]
      },
      {
        TITLE: "Punti di forza",
        SUB_SECTIONS: [
          {
            TITLE: "Determinazione",
            DETAILS: {
              LEVEL: 9
            },
            PARAGRAPHS: [
              `Vado fiero della mia determinazione: se decido di voler fare od ottenere qualcosa 
              faccio di tutto per avere successo e so che il mio impegno e dedizione, presto o tardi, mi faranno conseguire il mio obbiettivo.
              Le sfide sono un grande incentivo e non mi arrendo facilmente: ciò mi ha permesso 
              di diventare developer senza delle vere conoscenze in campo IT e  
              mi sprona a portare a termine compiti anche di livelli superiori al mio.`
            ]
          },
          {
            TITLE: "Curiosità",
            DETAILS: {
              LEVEL: 9
            },
            PARAGRAPHS: [
              `Sono molto curioso, non c'è dubbio. La curiosità mi porta a farmi molte domande e, cercando e trovando risposte le risposte,
              ho potuto imparare moltissime nozioni e analizzare situazioni e concetti in maniera profonda.
              Sebbene io sia molto curioso, so anche farmi gli affari miei.`
            ]
          },
          {
            TITLE: "Affidabilità e precisione",
            DETAILS: {
              LEVEL: 8.5
            },
            PARAGRAPHS: [
              `Per me è importante portare a termine correttamente i compiti che mi vengono assegnati. 
              Mi impegno molto a essere affidabile e svolgere il mio lavoro in maniera precisa e 
              accurata, organizzando le mie attività per non tralasciarne nessuna e avendo sempre chiare priorità e scadenze.`
            ]
          },
          {
            TITLE: "Empatia e Comunicazione",
            DETAILS: {
              LEVEL: 8.5
            },
            PARAGRAPHS: [
              `Ho approfondito il tema della comunicazione proattiva con corsi aziendali sulla comunicazione.
              Ho prova ogni giorno di come renda le persone più aperte al dialogo, per questo cerco sempre di esprimere concetti 
              in maniera chiara ed efficace.
              Sono anche empatico e questo mi porta a immedesimarmi molto negli altri.
              Per questi motivi, colleghi e manager hanno piacere a comunicare con me favorendo così una buona collaborazione. 
              Tendo a entrare velocemente in confidenza con le persone ma sono anche rispettoso degli spazi personali altrui.`
            ]
          },
          {
            TITLE: "Ecletticismo",
            DETAILS: {
              LEVEL: 8
            },
            PARAGRAPHS: [
              `Ho la fortuna di appassionarmi e volermi dedicare a diverse attività e in diversi ruoli.
              Ciò mi rende più facile conoscere i miei punti di forza, avere approcci più eclettici e adattarmi facilmente a nuovi ambienti o mansioni.`
            ]
          }
        ]
      }
    ]
}