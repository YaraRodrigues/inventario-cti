/// <reference types="cypress" />
import inventarioPages from "../support/pages/inventarioPages";
import atribuicaoPages from "../support/pages/atribuicaoPages";

describe('Gerar Termos', () => {

    beforeEach('Acessando Página de Atribuições', () => {
        inventarioPages.realizarLogin()
        cy.visit('/portal_service/bonds')
    })

    it('Gerar Termo do tipo Resposabilidade', () => {
        atribuicaoPages.solicitarTermoAtribuicao()
        cy.get('#term_type_liability').click()
        atribuicaoPages.gerarTermo()
    })

    it('Gerar Termo do tipo Emprestimo', () => {
        atribuicaoPages.solicitarTermoAtribuicao()
        cy.get('#term_type_loan').click()
        atribuicaoPages.gerarTermo()
    })

    it('Clicar em Gerar Termo sem uma atribuicao selecionada', () => {
        cy.get('div.card-header.py-3 > div:nth-child(1) > button')
            .click()
        
        atribuicaoPages.gerarTermo()

        cy.on('window:alert', (text) => {
            expect(text).to.equal('Selecione um tipo de Termo e uma ou mais Atribuiçôes');
        });
    })

    it('Gerar Termo sem um tipo selecionado', () => {
        atribuicaoPages.solicitarTermoAtribuicao()
        atribuicaoPages.gerarTermo()

        cy.on('window:alert', (text) => {
            expect(text).to.equal('Selecione um tipo de Termo e uma ou mais Atribuiçôes');
        });
    })

    it('Garantir seleção exclusiva do tipo de termo', () => {
        atribuicaoPages.solicitarTermoAtribuicao()

        cy.get('#term_type_loan').check()
        cy.get('#term_type_loan').should('be.checked')
        cy.get('#term_type_liability').should('not.be.checked')

        cy.get('#term_type_liability').check()
        cy.get('#term_type_liability').should('be.checked')
        cy.get('#term_type_loan').should('not.be.checked')
    })

    it('Fechar Modal de Gerar Termo', () => {
        atribuicaoPages.solicitarTermoAtribuicao()
        cy.get('.btn-light')
            .should('be.visible')
            .wait(300)
            .click({force : true})

        cy.get('.btn-light')
            .should('not.be.visible')

        cy.url().should('include', '/portal_service/bonds')
        cy.get('h1')
            .should('be.visible')
            .should('have.text', 'Atribuições')
    })

    it('Exibir modal de geração de termos', () => {
        atribuicaoPages.solicitarTermoAtribuicao()
        cy.get('#generate_termTitle')
            .should('be.visible')
    })
  

})