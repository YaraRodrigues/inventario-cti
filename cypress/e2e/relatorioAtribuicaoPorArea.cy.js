/// <reference types="cypress" />
import inventarioPages from "../support/pages/inventarioPages";
import relatorioPages from "../support/pages/relatorioAtribuicoesPages";

describe('Relatório Atribuição por Área', () => {

    beforeEach('', () => {
        inventarioPages.realizarLogin()
        cy.visit('/portal_service/reports/assignments_by_area')
    })

    it('Realizar pesquisa de dados com Tipo Sintetico', () => {
        cy.get('#type_syntetic').check()
        relatorioPages.clicarPesquisar()

        cy.get('div.card-header.py-3 > h6')
            .should('contain', 'Relatório Sintético')
    })

    it('Realizar pesquisa de dados com Tipo Analitico', () => {
        cy.get('#type_analytic').check()
        relatorioPages.clicarPesquisar()
        
        cy.get('div.card-header.py-3 > h6')
            .should('contain', 'Relatório Analítico')
    })

    it('Realizar pesquisa com tipo, área e subárea', () => {
        cy.get('#type_analytic').check()
        relatorioPages.preencherArea('CTI')
        relatorioPages.preencherSubArea()
        relatorioPages.clicarPesquisar()
        
        cy.get('div.card-header.py-3 > h6')
            .should('contain', 'Relatório Analítico')
    })

    it('Gerar relatório com dados pesquisados no formato analítico', () => {
        cy.get('#type_analytic').check()

        relatorioPages.clicarPesquisar()
        cy.get('div.card-header.py-3 > h6')
            .should('contain', 'Relatório Analítico')

        relatorioPages.clicarPesquisar()
        relatorioPages.gerarRelatorio()
        
        cy.url().should('contain', '/portal_service/reports/assignments_by_area_pdf')
    })

    it('Gerar Relatório sem pesquisa', () => {
        relatorioPages.gerarRelatorio()
        
        cy.url().should('contain', '/portal_service/reports/assignments_by_area_pdf')
    })

    it('Não retornar resultados para filtros sem correspondência', () => {
        cy.get('#type_analytic').check()
        relatorioPages.preencherArea('BRASÍLIA')
        relatorioPages.clicarPesquisar()

        cy.get('div.card.shadow.card-body > table').should('contain', 'Sem atribuições para:')

    });

    it('Deve permitir apenas um tipo de relatório por vez', () => {
        // Seleciona Analítico
        cy.get('#type_analytic').check().should('be.checked')
        cy.get('#type_syntetic').should('not.be.checked')

        // Seleciona Sintético (automaticamente desmarca o anterior)
        cy.get('#type_syntetic').check().should('be.checked')
        cy.get('#type_analytic').should('not.be.checked')
    })

})