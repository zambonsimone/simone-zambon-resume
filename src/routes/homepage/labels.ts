import { IRouteContentOrganization } from "../../types";

interface IInstructions { 
    INSTRUCTIONS: {
        TITLE: string;
        LIST_ITEMS: string[];
    }
}
export const HOMEPAGE_LABELS: IRouteContentOrganization & IInstructions = {
    TITLE: "Il mio curriculum",
    SUBTITLE: `Quale miglior modo di dare una dimostrazione del mio livello nell'ambito dello sviluppo di siti e applicazioni web, se non
    creando un mio personale sito web? Contiene tutte le informazioni riportate nel mio curriculum raccontando qualche particolare in più. 
    Il codice sorgente è consultabile <a href="https://github.com/zambonsimone/simone-zambon-resume" target="_blank">qui</a>.`,
    INSTRUCTIONS: {
        TITLE: "Istruzioni",
            LIST_ITEMS: [
                `Attraverso la barra di navigazione verticale sulla sinistra puoi accedere alle varie sezioni e sottosezioni del mio curriculum`,
                `Clickando sulla mia foto profilo in alto verrai redirezionato alla pagina <a href="/bio">Bio</a> con la mia presentazione personale`,
                `Attraverso la barra di ricerca in alto potrai filtrare comodamente le informazioni`,
                `Compilando il modulo di contatto alla pagina <a href="/contacts">Contatti</a> e inviando i dati mi arriverà una mail con il tuo messaggio.
                Altrimenti, puoi utilizzare gli altri tipi di contatto`, 
            ], 
    },
    SECTIONS: [
        {
            TITLE: "Implementazione",
            PARAGRAPHS: [
                `Ho realizzato questo sito web con metodi e funzionalità comuni per una webapp sviluppata con React e Typescript.
                Ho differenziato variabili, script e configurazioni per ogni ambiente in moduli dedicati.
                Il deploy del sito viene fatto su una nota piattaforma di host che esegue una build dedicata per l'ambiente di produzione utilizzando direttamente
                il mio repository su GitHub.`,
                
                `Per le funzionalità di BackEnd, questo sito utilizza due approcci in base all'ambiente:
                il sito distribuito utilizza funzioni serverless fornite dalla piattaforma di host,
                mentre in locale chiama api esposte da un mio piccolo server eseguito con Node.`,

                `Il mio intento è principalmente quello di dimostrare le mie competenze. Alcune funzionalità come l'invio di email
                tramite form, il download di file e la costruzione di un server sono ovviamente superflue, ma volevo dare una dimostrazione
                delle mie conoscenze e capacità di sviluppo anche lato BackEnd.`
            ]
        },
        {
            TITLE: "UX/UI",
            PARAGRAPHS: [
                `Ho scelto il design e il set di pantoni di questo sito seguendo i principi di UX/UI.
                Ho dato importanza all'accessibilità rendendo il sito facilmente navigabile da tastiera, con testi chiaramente leggibili anche da uno screen reader 
                e colori sufficientemente contrastanti.    
                Ho prestato particolare attenzione anche a ottimizzare le performance per fornire una UX fluida.`
            ],
        },
        {
            TITLE: "Organizzazione del codice",
            PARAGRAPHS: [
                `Ho creato e organizzato le cartelle che compongono il progetto del mio sito web seguendo le convenzioni 
                più comunemente utilizzate in piccole webapp. 
                Per dare risalto alla mia esperienza acquisita totalmente in ambito di grandi progetti, ho deciso 
                di organizzare il codice creando ogni modulo con un valore semantico e con una precisa funzione e centralizzando i vari dati
                per permettere una facile manutenibilità del codice.`
            ],
        },
        {
            TITLE: "Linguaggio",
            PARAGRAPHS: [
                `Ho scelto Typescript come linguaggio e ReactJS come libreria principale rispettivamente per la solidità e la semplicità di sviluppo.
                Inoltre, sono il linguaggio e la libreria che ho utilizzato e approfondito maggiormente.`
            ],
        },
        {
            TITLE: "Strategia di sviluppo",
            PARAGRAPHS: [
                `Ho utilizzato molte funzionalità di Typescript per ottenere una solida tipizzazione del codice.
                Ho rispettato i paradigmi di React e ho utilizzato gli strumenti forniti dalla libreria come gli hook e
                i componenti di navigazione rispettando i loro scopi di utilizzo e, più in generale, i paradigmi di React.
                Ho implementato Eslint per un rigido controllo della sintassi e ho utilizzato Webpack 5 per configurare un dev server e fornire configurazioni comode per il debug.
                Sempre a scopo dimostrativo, ho scelto di non installare librerie per helper e utility se non veramente vantaggiose.`,
            ],
        }
    ]
}