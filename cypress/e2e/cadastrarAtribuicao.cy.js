/// <reference types="cypress" />
import inventarioPages from "../support/pages/inventarioPages";
import atribuicaoPages from "../support/pages/atribuicaoPages";

describe('Cadastro de Atribuição', () => {

    beforeEach('Acessando pagina de Nova Atribuição', () => {
        inventarioPages.realizarLogin()
        cy.visit('/portal_service/bonds/new')
    })

    it('Cadastrar atribuição com sucesso preenchendo campos obrigatórios', () => {
        atribuicaoPages.preencherCamposObrigatórios()
        atribuicaoPages.atribuirAtivo()
        atribuicaoPages.salvarAtribuicao()
        
        cy.url().should('include', '/portal_service/bonds')

        cy.get('.alert-success') 
            .should('be.visible')
            .and('contain', 'Ativos vinculados a');
    })

    it('Cadastrar atribuição completa com sucesso', () => {
        atribuicaoPages.preencherCamposObrigatórios()
        atribuicaoPages.preencherObservacao('Atribuição Teste Criada com sucesso via automação!')
        atribuicaoPages.atribuirAtivo()
        atribuicaoPages.salvarAtribuicao()
        
        cy.url().should('include', '/portal_service/bonds')

        cy.get('.alert-success') 
            .should('be.visible')
            .and('contain', 'Ativos vinculados a');
    })

    it('Cancelar Cadastro de Atribuicao', () => {
        atribuicaoPages.preencherCamposObrigatórios()
        atribuicaoPages.cancelarAtribuicao()

        cy.url().should('include', '/portal_service/bonds')
    })

    it('Cadastrar atribuição sem adicionar ativo', () => {
        //Melhoria 02
        atribuicaoPages.preencherCamposObrigatórios()
        atribuicaoPages.salvarAtribuicao()
        
        cy.get('.alert-danger') 
            .should('be.visible')
            .and('contain', 'Ativo não informado!');
    })
    

    it('Validar comportamento do campo "Utilizará Pacote Office?"', () => {
        cy.get('#key').should('be.disabled')
        // Marca
        cy.get('#check_office').check()
        cy.get('#key').should('not.be.disabled')

        // Desmarca
        cy.get('#check_office').uncheck()
        cy.get('#key').should('be.disabled')
    })

    it('Validar seleção de modalidade de trabalho', () => {
        // Seleciona Presencial
        cy.get('#bond_modality_presencial').check()
        cy.get('#bond_modality_presencial').should('be.checked')
        cy.get('#bond_modality_home_office').should('not.be.checked')

        // Seleciona Home Office
        cy.get('#bond_modality_home_office').check()
        cy.get('#bond_modality_home_office').should('be.checked')
        cy.get('#bond_modality_presencial').should('not.be.checked')
    })


})