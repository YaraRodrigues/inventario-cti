/// <reference types="cypress" />
import inventarioPages from "../support/pages/inventarioPages";
import atribuicaoPages from "../support/pages/atribuicaoPages";

describe('Editar Atribuição', () => {

    beforeEach('Acessando Pagina de Atribuição a ser editada', () => {
        inventarioPages.realizarLogin()
        cy.visit('/portal_service/bonds/36/edit')
    })

    it('Editar Atribuição com sucesso', () => {
        cy.get('#attended').select('Atendente')
        atribuicaoPages.preencherObservacao('Atribuição editada com sucesso via Automação')
        atribuicaoPages.salvarAtribuicao()
        
        cy.url().should('include', '/portal_service/bonds')

        cy.get('.alert-success') 
            .should('be.visible')
            .and('contain', 'atualizado com sucesso!');
    })

    it('Excluir item obrigatório e tentar editar.', () => {
        //Teste para 2 cernarios
        atribuicaoPages.preenchendoAtendente() //função de ajuste.
        cy.get('#add_status > div.control.col-md-1 > a.dynamic')
            .click()
        cy.get('#add_status > div.control.col-md-1 > a.existing')
            .click()
        atribuicaoPages.salvarAtribuicao()

        cy.get('.alert-danger') 
            .should('be.visible')
            .and('contain', 'Ativo não informado!');
    })

    it('Cancelar Cadastro de Atribuição', () => {
        atribuicaoPages.preenchendoAtendente() //função de ajuste.
        atribuicaoPages.preencherObservacao('Atribuição editada com sucesso via Automação')
        atribuicaoPages.cancelarAtribuicao()

        cy.url().should('include', '/portal_service/bonds')
    })


})