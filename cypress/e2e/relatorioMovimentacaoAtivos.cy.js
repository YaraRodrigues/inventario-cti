/// <reference types="cypress" />
import inventarioPages from "../support/pages/inventarioPages";
import relatorioPages from "../support/pages/relatorioMovimentacoesPages"

describe('Relatório Movimentação de Ativos', () => {

    beforeEach('', () => {
        inventarioPages.realizarLogin()
        cy.visit('/portal_service/reports/index')
    })

    it('Realizar pesquisa informando somente Area', () => {
        relatorioPages.preencherArea()
        relatorioPages.clicarPesquisar()
        
        cy.get('div.card.shadow.card-body')
            .find('table')
            .should('exist')
    })

    it('Realizar pesquisa informando somente Periodo', () => {
        relatorioPages.preencherDatas()
        relatorioPages.clicarPesquisar()
        
        cy.get('div.card.shadow.card-body')
            .find('table')
            .should('exist')
    })

    it('Realizar pesquisa informando Área e Período', () => {
        relatorioPages.preencherArea()
        relatorioPages.preencherDatas()
        relatorioPages.clicarPesquisar()
        
        cy.get('div.card.shadow.card-body')
            .find('table')
            .should('exist')
    })

    it('Gerar Relatório com dados pesquisados', () => {
        relatorioPages.preencherArea()
        relatorioPages.preencherDatas()
        relatorioPages.clicarPesquisar()
        relatorioPages.gerarRelatorio()
        cy.url().should('contain', '/portal_service/reports/pdf_create')
    })

    it('Gerar Relatório sem pesquisa', () => {
        relatorioPages.gerarRelatorio()
        cy.get('.alert-danger') 
            .should('be.visible')
            .and('contain', 'Informe uma Área e/ou Período para gerar o pdf!');
    })

    it('Não retornar resultados para filtros sem correspondência', () => {
        relatorioPages.preencherDatasInvalidas()
        relatorioPages.clicarPesquisar()
        cy.get('div.card.shadow.card-body > table').should('contain', 'Sem movimentação para o período')
    });

    it('Atualizar resultados após nova pesquisa', () => {
        relatorioPages.preencherArea()
        relatorioPages.preencherDatas()
        relatorioPages.clicarPesquisar()

        cy.get('div.card.shadow.card-body')
            .find('table')
            .should('exist')

        relatorioPages.preencherArea()
        cy.get('#initial_date').type('2026-02-01')
        cy.get('#final_date').type('2026-03-30')
        relatorioPages.clicarPesquisar()

        cy.get('div.card.shadow.card-body')
            .find('table')
            .should('exist')
    });

})