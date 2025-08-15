/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      createUserViaApi(): Chainable;
    }
  }
}

export {};
