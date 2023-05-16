import "cypress-localstorage-commands";


// For logging in
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
    token: ''
  }

// URLs
// URL with hash is needed since we use hashrouter
let baseurl = 'http://localhost:3000/Ivy'
let urlhashrouter = baseurl + '#'
  
  describe('Test Scenario for Navigation', () => {
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
    it('Test Case: Homepage', () => {
        cy.get('p').filter(':contains("Ivy")')
        cy.location('href').should('eq',baseurl)
    })
    it('Test Case: Home to Products', () => {
        // To Products
        cy.get('button').filter(':contains("Products")').click()
        cy.location('href').should('eq',urlhashrouter+'/Products')
    })
    it('Test Case: Home to Inventory', () => {
        // To Inventory
        cy.get('button').filter(':contains("Inventory")').click()
        cy.location('href').should('eq',urlhashrouter+'/Inventory')
    })
    it('Test Case: Home to Summary', () => {
        // To Summary
        cy.get('button').filter(':contains("Summary")').click()
        cy.location('href').should('eq',urlhashrouter+'/ActivityToday')
    })
    it('Test Case: Home to Logs', () => {
        // To Logs
        cy.get('button').filter(':contains("Logs")').click()
        cy.location('href').should('eq',urlhashrouter+'/Logs')
    })

  })