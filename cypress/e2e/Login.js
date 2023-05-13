
describe('Test Case for Login', () => {
  const user = {
    username: 'test1',
    password:'pastest1234'
  }
  beforeEach(() => {
    cy.visit('http://localhost:3000/Ivy')
  })

  it('Verify login works', () => {

    // Check if webpage is Ivy
    cy.get('[style="display: flex; flex-direction: row; width: 50%; justify-content: left; align-items: center; padding-left: 16px;"] > p')
    .should('have.text','Ivy')

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
    cy.get('[style="display: flex; flex-direction: row; width: 50%; justify-content: right; align-items: center;"] > p')
    .should('have.text',`Logged in as ${user.username}`)
  })
})