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
    creando un mio sito web? Contiene tutte le informazioni riportate nel mio curriculum raccontando qualche particolare in più e 
    il suo codice sorgente è interamente consultabile <a href="http://github">qui</a>.`,
    INSTRUCTIONS: {
        TITLE: "Istruzioni",
            LIST_ITEMS: [
                `Attraverso la barra di navigazione verticale sulla sinistra puoi accedere alle varie sezioni e sottosezioni del mio curriculum.`,
                `Clickando sulla mia foto profilo in alto verrai redirezionato alla pagina <a href="/bio">Chi sono</a> con la mia presentazione personale.`,
                `Attraverso la barra di ricerca in alto potrai filtrare comodamente le informazioni.`,
                `Compilando il modulo di contatto alla pagina <a href="contacts">Contattami</a> e inviando i dati, mi arriverà una mail con il tuo messaggio,
                altrimenti puoi utilizzare gli altri tipi di contatto.`, 
            ], 
    },
    SECTIONS: [
        {
            TITLE: "Implementazione",
            PARAGRAPHS: [
                "Ho scelto Typescript come linguaggio e ReactJS come libreria principale, e ogni scelta su come realizzarlo ha un motivo preciso."
            ]
        },
        {
            TITLE: "Design",
            PARAGRAPHS: [
                `sarà scontato, ma il design è stato scelto sulla base di una mia preferenza personale: il colore arancione è il mio preferito.
                I colori di questo sito sono coerenti con quelli del mio curriculum in formato PDF.  
                Ho scelto accuratamente un set di pantoni, basandomi su principi di design, che desse risalto all'arancione.`
            ],
        },
        {
            TITLE: "Organizzazione del codice",
            PARAGRAPHS: [
                `Ho creato e organizzato le cartelle che compongono il progetto del mio sito web seguendo le convenzioni 
                più comunemente utilizzate nell'ambito di appartenenza di questo progetto. 
                Per dare risalto alla mia esperienza acquisita totalmente in ambito di grandi progetti, ho deciso 
                di organizzare il codice creando ogni modulo con un valore semantico e con una precisa funzione. 
                Anche le costanti, dai testi allo stile, sono state isolate e centralizzate.
                Questo permette una facile manutenibilità del codice.`
            ],
        },
        {
            TITLE: "Linguaggio",
            PARAGRAPHS: [
                `Ho scelto Typescript come linguaggio in quanto nella mia esperienza lavorativa più lunga e formante 
                ho sempre utilizzato Typescript e lo ritengo un linguaggio con molti vantaggi in ambito di sviluppo FrontEnd
                di applicazioni soprattutto se complesse.
                Ho scelto ReactJS come libreria principale perchè ritengo di aver acquisito un'ottima conoscenza dei suoi principi, paradigmi e punti di forza.
                Nel contesto di questo sito web l'ho scelto anche per la semplicità di sviluppo.`
            ],
        },
        {
            TITLE: "Strategia di sviluppo",
            PARAGRAPHS: [
                `Il mio intento è principalmente quello di dimostrare le mie competenze.
                Questo sito è stato svilppato in versioni utilizzando GIT. 
                Ho tipizzato il codice utilizzando sia tipi di Typescript che tipi definiti da me.
                Ho rispettato quasi sempre i paradigmi di React e gli strumenti forniti dalla libreria come gli hook e
                i componenti di navigazione.
                Ho cercato di creare componenti atomici e con responsabilità ben precise, facendoli reagire solo se necessario anche utilizzando scelte
                consapevoli di memoizzazione.`,
                
                `Alcune tecniche di sviluppo potrebbero sembrare superflue o vittima di over-engineering. 
                Sebbene io eviti di fare scelte complicate se non necessario, ho esasperato alcune implementazioni per 
                mostrare comunque le mie capacità negli ambiti in cui ci fosse questa necessità.
                Ho anche deciso di non ricorrere a nessuna libreria di helper e utility se non veramente vantaggiosa.
                Se si da un'occhiata al codice di questo sito web su GitHub, in molti moduli ho scritto dei commenti per 
                spiegare le ragioni di determinate implementazioni.
                ho cercato di utilizzare i metodi principali che ho appreso e le librerie più utili che ho conosciuto in ambito di sviluppo FrontEnd.
                Per lo sviluppo ho utilizzato un dev server e un bundler per velocizzare lo sviluppo, Sass ed eslint per scrivere codice più leggibile
                e standardizzato. `
            ],
        }
    ]
}