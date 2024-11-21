import { IRouteContentOrganization } from "../../../types";
import { toDateString } from "../../../utils/date";

export const SIDE_EXPERIENCES_LABELS: IRouteContentOrganization = {
  TITLE: "Esperienze professionali secondarie",
  SUBTITLE: `La mia prima professione è stata Bartender/Bar manager e cameriere, mansioni che ho svolto diverse volte anche durante la mia
  carriera come sviluppatore. Oltre a questo, ho svolto diverse altre professioni.`,
  INTRO_CODE: `const sideProfessionalExps = new ProfessionalExperiences([
  { 
    what: "Bartender and bar manager", 
    where: [
      "Taverna del Bucaniere, Gallarate (Italy)",
      "Private parties and events (Italy)",
      "Blu Martini Club, Lugano (Switzerland - Italy)",
      "Village Summer Disco, Varese (Italy)"
    ] 
    when: { from: "2015-09-01", to: "current date" }
  },
  { 
    what: "Receptionist, city guide, cleaner", 
    where: [
      "Bikini Hostel, Puerto Viejo de Talamanca (Costa Rica)",
      "InboXchange Hostel, Medellin (Colombia)"
    ], 
    when: { from: "2018-11-01", to: "2019-28-02" }
  },
  {
    what: "CNC machines programmer and operator",
    where: "Duchini Srls, Caronno Varesino (Italy)",
    when: { from: "2017-03-08", to: "2017-05-02" }
  },
  {
    what: "Volounteer in daily center for Alzheimer's patients",
    where: "Fondazione Molina, Varese (Italy)",
    when: { from: "2011-08-22", to: "2012-06-07" }
  }    
])`,
    SECTIONS: [
        {
            TITLE: "Bartender - Bar manager - Cameriere",
            DETAILS: {
                WHERE: [
                    {
                        PLACE: `"Taverna del Bucaniere", Gallarate, Varese (Italy)`,
                        DATES: ["2015/09/01", toDateString(new Date())],
                    },
                    {
                        PLACE: `private parties and events (Switzerland - Italy)`,
                        DATES: ["2017/01/10", toDateString(new Date())],
                    },
                    {
                        PLACE: `"Blu Martini Club", Lugano (Switzerland)`,
                        DATES: ["2019/06/01", "2019/10/12"],
                    },
                    {
                        PLACE: `"Village Summer Disco", Varese (Italy)`,
                        DATES: ["2016/06/01", "2016/09/24"],
                    }
                ]
            },
            PARAGRAPHS: [
              `Dopo aver conseguito un certificato di qualifica professionale come Bartender nel 2015 ho subito iniziato a lavorare in pub e piccoli eventi
              privati. A settembre dello stesso anno sono stato assunto come barman e waiter nel pub "Taverna del Bucaniere" a Gallarate, Italia, dove ho acquisito sempre più esperienza ed autonomia fino
              a gestire autonomamente il pub, gli ordini dei prodotti serviti e gli eventi.
              Durante tutta la mia permanenza in questo pub ho continuato a lavorare come barman in locali, club e grandi eventi, sia in Italia che in Svizzera. Tutt'ora svolgo questa professione saltuariamente.`
            ]
        },
        {
            TITLE: "Reception - Guida turistica - Pulizie",
            DETAILS: {
                WHERE: [
                  {
                      DATES: ["2019/02/01","2019/02/28"],
                      PLACE: `"InboXChange Hostel", Medellin (Colombia)`,
                  },
                  {
                      DATES: ["2018/11/01", "2018/11/30"],
                      PLACE: `"Bikini Hostel", Limon (Costa Rica)`,
                  }
                ]
            },
            PARAGRAPHS: [
                `In Ottobre 2018 ho intrapreso un viaggio di 6 mesi in America Latina, dal Costa Rica a Cuba passando per Panama e Colombia.
                Per sostenere le mie spese ho lavorato per un mese come receptionist, nel servizio pulizie e come promoter presso l'ostello "Bikini Hostel" di Puerto Viejo de Talamanca,
                Costa Rica: svolgevo le attività di check-in/check-out degli ospiti e pulizia/preparazione degli alloggi, delle aree
                comuni e dei servizi. 
                Ho svolto le stesse mansioni anche nell'ostello "InboXChange Hostel" di Medellin, Colombia.
                Grazie anche alla mia socialità ho migliorato in fretta la mia lingua spagnola e inglese, mentre la mia curiosità mi ha portato a conoscere
                profondamente la città di Medellin e della sua storia, così mi è stato affidato anche il compito di fare da guida turistica amatoriale
                ai nuovi ospiti dell'ostello.`
            ]
        },
        {
            TITLE: "Programmatore e operatore di macchine CNC",
            DETAILS: {
                WHERE: [
                    {
                        DATES: ["2017/03/08", "2017/05/02"],
                        PLACE: `"Duchini & Sgarbozza", Caronno Varesino, Varese (Italy)`, 
                    }   
                ]
            },
            PARAGRAPHS: [
                `In autunno del 2016 ho lavorato come programmatore e operatore di torni e frese a controllo numerico 
                per una piccola impresa di metalmeccanica di precisione a Caronno Varesino, Varese.
                Non è stato facile apprendere le nozioni necessarie: vista la pericolosità, la delicatezza e il valore economico degli strumenti utilizzati 
                la mole di informazioni e e comportamenti necessari per programmare e operare correttamente con la macchina era molto grande.
                Ho imparato molto anche se l'attività è stata di appena 3 mesi.`
            ]
        },
        {
            TITLE: "Volontario in un centro per persone affette da Alzheimer",
            DETAILS: {
                WHERE: [
                    {
                        PLACE: `"Fondazione Molina", Varese (Italy)`,
                        DATES: ["2011/08/22", "2012/06/07"],
                    }
                ]
            },
            PARAGRAPHS: [
                `Ispirato da amici e compagni di classe e incoraggiato dalla scuola 
                ho scelto di cimentarmi in un programma di volontariato presso un centro diurno per malati di Alzheimer.
                Il centro ospitava quasi tutte persone anziane per attività ludiche pomeridiane.
                Affiancato ad una operatrice di Pet Therapy e ad altri volontari, intrattenevamo gli ospiti con giochi e conversazioni sia per
                rendere i loro pomeriggi più piacevoli, sia per rallentare la degenerazione della malattia.
                Non sono mancate risate e momenti toccanti con gli ospiti: la mia empatia mi portava a coinvolgermi molto emotivamente 
                ma il piacere di intrattenermi con loro mi ha permesso di relazionarmici anche con semplicità e condividere molti sorrisi.`
            ]
        }
    ]
}