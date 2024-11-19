import { IRouteContentOrganization } from "../../../types";

export const IT_SKILLS_LABELS: IRouteContentOrganization = {
    TITLE: "Abilità e competenze IT",
    SUBTITLE: "Anche se la mia formazione come developer si è basata su Java ed SQL, ho un'esperienza pluriennale in FrontEnd, scrivendo principalmente codice Typescript e React",
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
        `Come consulente ho lavorato in vari ruoli e progetti, che mi hanno dato la possibilità
        di usare molte tecnologie e di occuparmi di diversi layer di una applicazione.
        L'esperienza lavorativa principale come developer è lo sviluppo front-end per una holding di ospedali
        privati situata in Milano, Italia.`,

        `Da luglio 2021 il mio lavoro è focalizzato sullo sviluppo di nuove funzionalità, risoluzione di bug e scrittura di tests
        per l'applicazione principale della holding, che da ai clienti vari servizi relativi alle cliniche, come 
        la prenotazione di esami e gestione dei propri referti e documenti medici.
        Come uno dei più esperti membri del team sono stato anche coinvolto in attività di onboarding e formazione di nuovi membri.
        `
        ]
      },
      {
        TITLE: "Javascript - CSS - HTML",
        DETAILS: {
          LEVEL: 8
        },
        PARAGRAPHS: [
            `Javascript, CSS e HTML sono il mio pane quotidiano ed è stato così per ogni progetto di front-end al quale ho lavorato.
            Anche se c'è molto e molto altro da imparare e da conoscere, ho potuto utilizzare quasi la totalità delle caratteristiche principali di javascript,
            e ho potuto acquisire una conoscenza profonda di come lavora e perchè`,
          ,

          `Con javascript ho lavorato molto spesso con chiamate REST ad API e programmazione asincrona, ho usato molti tipi di oggetti e dati, gestito eventi e manipolato il DOM.

            
          `,
          `Working on web applications I often modified REST calls logics and I implemented new ones. Because nearly
          all of them was aiming to a private final user, the importance of UX/UI aspects was very high:
          handling events of any type caused by user interactions is a very common activity, and the need of a complex style
          enhanced me in the writing of CSS code through SCSS, usually defined by a UX/UI designers team 
          I worked linked with.`
        ]
      },
      {
        TITLE: "Typescript - React - Redux",
        DETAILS: {
          LEVEL: 8
        },
        PARAGRAPHS: [
          `The application I worked the most on is the Web application for the previously mentioned services.
          Here I got the earl and in-depth knowledge of Typescript, React and Redux.`,

          `My training as a developer began with Java so I was already pretty familiar
          with typed languages as Typescript.
          I reached a good level in typings, reading the official documentation, forcing myself to type data as much strong as I can and to push
          myself to find and try a new complex syntax.`,

          `I liked React from the beginning and that's one of the reason I chosed it to develop this website. 
          I learned to know React core principles and functionalities in-depth, using the latter in the right scenarios
          to get the right results. 
          All of that in order to develop a big web application that should be both attractive and functional, 
          with performance optimizations granted by a conscious use of React features in addition of memoizations and 
          lazy loadings.`,

          `Both the applications utilized Redux and shared store, actions and middlewares including
          async ones implemented with Redux Thunk and middlewares to manipulate HTTP responses.
          Anyway, after time the store has been replaced by a React Context.`,

          `The effort of the team to make the code well organized and inspired by the best practices was very high, 
          and every change in the main branches was closely reviewed by other team members. 
          My strong curiosity made every interaction with senior collegues as an improvement of my knowledge.
          We can also add that in this project I also achieved more cleverness and autonomy.`
        ]
      },
      {
        TITLE: "NodeJS",
        DETAILS: {
          LEVEL: 6.5
        },
      },
      {
        TITLE: "Java",
        DETAILS: {
          LEVEL: 5.5
        }
      }
    ]
}