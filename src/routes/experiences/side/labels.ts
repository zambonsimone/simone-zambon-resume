import { IRouteContentOrganization } from "../../../types";
import { toDateString } from "../../../utils/date";

export const SIDE_EXPERIENCES_LABELS: IRouteContentOrganization = {
    TITLE: "Side professional experiences",
    SUBTITLE: `I entered the world of work as a Bartender/Bar manager and waiter, job that I did several times even during my developer carreer. Apart of this, I experienced many different jobs and roles`,
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
            TITLE: "Bartender - Bar manager - Waiter",
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
                `Questa è stata la mia prima esperienza lavorativa dopo aver terminato gli studi.
                Ho conseguito un certificato di qualifica professionale come Bartender nel 2015 e ho subito iniziato a lavorare in pub e piccoli eventi
                privati. A settembre dello stesso anno sono stato assunto come barman e waiter nel pub "Taverna del Bucaniere" a Gallarate, Italia, dove ho acquisito sempre più esperienza ed autonomia fino
                a gestire autonomamente il pub, gli ordini dei prodotti serviti e gli eventi.
                Durante tutta la mia permanenza in questo pub ho continuato a lavorare come barman in locali, club e grandi eventi, sia in Italia che in Svizzera.`
            ]
        },
        {
            TITLE: "Receptionist - City guide - Cleaner",
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
                `In Ottobre 2018 ho intrapreso un viaggio di 6 mesi nel centro-sud america, dal Costa Rica alla Colombia passando per Panama e Cuba.
                Per aiutarmi con le spese ho lavorato per un mese come receptionist, cleaner e promoter nell'ostello "Bikini Hostel" di Puerto Viejo de Talamanca,
                Costa Rica: svolgevo le attività di check-in/check-out degli ospiti e pulizia/preparazione degli alloggi, delle aree
                comuni e dei servizi. 
                Ho svolto le stesse mansioni anche nell'ostello "InboXChange Hostel" di Medellin, Colombia.
                Essendo molto socievole ho potuto praticare molto sia la lingua spagnola che inglese, ed essendo molto curioso ho conosciuto particolarmente
                la città di Medellin e la sua storia, così dopo due settimane mi è stato affidato anche il compito di fare da guida turistica amatoriale
                ai nuovi ospiti dell'ostello.`
            ]
        },
        {
            TITLE: "CNC machines programmer and operator",
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
                per una piccola impresa vicino a casa mia, "Duchini & Sgarbozza" a Caronno Varesino, Varese.
                vista la mia scarsa esperienza nell'utilizzo di certi strumenti e materiali, limitata alle attività DIY svolte in autonomia,
                non è stato facile apprendere le nozioni necessarie.
                Vista la pericolosità, la delicatezza e il valore economico degli strumenti utilizzati, l'attenzione richiesta  
                per imparare a utilizzare queste macchine e a scrivere correttamente e in maniera molto precisa un programma di lavoro era enorme.
                Grazie a ciò ho imparato molto anche se l'attività è stata di appena 3 mesi.`
            ]
        },
        {
            TITLE: "Volounteer in daily center for Alzheimer's patients",
            DETAILS: {
                WHERE: [
                    {
                        PLACE: `"Fondazione Molina", Varese (Italy)`,
                        DATES: ["2011/08/22", "2012/06/07"],
                    }
                ]
            },
            PARAGRAPHS: [
                ` Nel 2011, vedendo diversi amici e compagni di classe svolgere attività di volontariato in vari settori tra cui ospedali, canili e 
                animazione per bambini, incoraggiato dalla scuola ho scelto di cimentarmi in un programma di volontariato presso il centro diurno
                per malati di alzheimer presso "Fondazione Molina" di Varese, Italia.
                il centro diurno ospitava persone malate di alzheimer, quasi tutte anziane, durante le loro attività ludiche pomeridiane.
                Affiancato ad una operatrice di Pet therapy e ad altri volontari, intrattenevamo gli ospiti con giochi e conversazioni con lo scopo 
                di rendere i loro pomeriggi più piacevoli ma anche allo scopo di rallentare la degenerazione della malattia.
                Non sono mancate le risate con gli ospiti e i bellissimi momenti, divertenti e toccanti: la mia empatia mi portava a dare molta importanza
                alla loro condizione, ma il piacere di intrattenermi con loro mi ha permesso di relazionarmici anche con semplicità e condividere molti sorrisi.`
            ]
        }
    ]
}