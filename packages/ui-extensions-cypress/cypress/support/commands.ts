// / <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// Cypress.Commands.add('injectWorker', () => {
//       cy.log('Cypress-Unfetch: Polyfill Fetch >>> XHR Fallback')
//     // Load the standalone polyfill w/ a closure, prevents race
//     let unfetch
//     cy.readFile('node_modules/unfetch/dist/unfetch.umd.js')
//       .then(file => unfetch = file) // eslint-disable-line no-return-assign
//     // Then initialize it before the page loads
//     Cypress.on('window:before:load', (win) => {
//       delete win.fetch
//       win.eval(unfetch)
//       // win.fetch = win.unfetch
//     })
// })

// Cypress.Commands.add('startWorker', () => {
//   return cy
//     .log('Injecting Worker for Extension Testing')
//     .reload({ log: false })
//     .then(() => {
//       // include React and ReactDOM to force DOM to register all DOM event listeners
//       // otherwise the component will NOT be able to dispatch any events
//       // when it runs the second time
//       // https://github.com/bahmutov/cypress-react-unit-test/issues/3
//       var html = `<body>
//           <div id="cypress-jsdom"></div>
//           <script>${}</script>
//         </body>`
//       const document = cy.state('document' as any)
//       document.write(html)
//       document.close()
//     })
// })
