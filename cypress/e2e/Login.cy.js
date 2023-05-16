import "cypress-localstorage-commands";
// Stuff needed for Logout test case
Cypress.Commands.add('login', () => { 
  cy.request({
      method: 'POST',
      url: 'https://keannu125.pythonanywhere.com/api/v1/accounts/token/login',
      body: {
          username: user.username,
          password: user.password
      }
      }
  )
  .its('body')
  .then(body => {
      user.token =  JSON.stringify(body.auth_token)
  })
  });


// Credentials
let user = {
  username: 'test1',
  password:'pastest1234',
}

// URLs
// URL with hash is needed since we use hashrouter
let baseurl = 'http://localhost:3000/Ivy'
let urlhashrouter = baseurl + '#'

describe('Test Scenario for Authentication', () => {
  before(function fetchUser () {
    cy.login()
    cy.saveLocalStorage()
  })
  
beforeEach(() => {
    cy.restoreLocalStorage()
    cy.visit(baseurl, {
        onBeforeLoad: function (window) {
            window.localStorage.setItem('token', user.token);
        }
    })
})
  
  it('Login Test Case', () => {
    cy.visit(baseurl, {
      onBeforeLoad: function (window) {
          window.localStorage.clear();
      }
  })
    
    // Check if webpage is Ivy
    cy.get('p').filter(':contains("Ivy")')

    // Check if login buttons exists and click
    cy.get('button').contains('Login').click() 

    // Verify if username is typed correctly
    cy.get(':nth-child(2) > input')
    .type(user.username)
    .should('have.value', user.username)

    // Verify if password is typed correctly
    cy.get(':nth-child(3) > input')
    .type(user.password)
    .should('have.value',user.password)

    // Click login button
    cy.get('[style="display: flex; align-items: center; flex-direction: column;"] > :nth-child(4)')
    .contains('Login').click()

    // Verify logged in user matches
    cy.get('p').filter(':contains("Logged in as '+user.username+'")')
  })
  it('Logout Test Case', () => {

    // Check if webpage is Ivy
    cy.get('p').filter(':contains("Ivy")')

    // Verify logged in user matches
    cy.get('p').filter(':contains("Logged in as '+user.username+'")')

    // Check if logout buttons exists and click
    cy.get(':nth-child(6) > .MuiButtonBase-root').click()

    cy.location('href').should('eq',urlhashrouter+'/Login')

  })
})