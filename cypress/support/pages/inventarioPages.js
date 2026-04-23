
export default{

    realizarLogin(){
        cy.visit('/')
            .get('.new_admin')
            .should('be.visible')

        cy.get('#admin_email')
            .type('qa.teste@teste.pge.ce.gov.br')
        
        cy.get('#admin_password')
            .type('3Fh$8Dx@mNv6#bKj1Zp%')

        cy.get('.btn-success')
            .click()

        cy.get('#userDropdown')
            .should('be.visible')
            .should('contain', 'qa Teste')
    }
}