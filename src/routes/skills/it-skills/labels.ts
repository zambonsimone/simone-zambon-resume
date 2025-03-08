import { IRouteContentOrganization } from "../../../types";

export const IT_SKILLS_LABELS: IRouteContentOrganization = {
    TITLE: "Information Technology Skills",
    SUBTITLE: "Even if my training as a developer has been based on Java and SQL, I have a multi-year experience in FrontEnd, mainly coding in Typescript and React.",
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
          `As a consultant I worked in various roles and projects, that gave me the possibility
          to use many technologies and deal with different layers of an application. 
          The main job experience as a developer is front-end developing for a private hospitals holding 
          located in Milan, Italy.`,

          `Since July 2021 my job is focused on developing new features, fixing bug and writing tests for the 
          main applications of the holding which gives the customers various services related to the clinics,
          like reservation of exams and management of their own medical documents/reports.
          As one of the most expert team member I was also involved in new members onboarding and training.`
        ]
      },
      {
        TITLE: "Javascript - CSS - HTML",
        DETAILS: {
          LEVEL: 8
        },
        PARAGRAPHS: [
          `Javascript, CSS and HTML are my daily bread and it has been that for every front-end project i worked on,
          but even if there is a lot more for me to know and learn, I could utilize nearly all Javascript coding features and I could
          reach a deep knowledge of how it works and why.`,

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