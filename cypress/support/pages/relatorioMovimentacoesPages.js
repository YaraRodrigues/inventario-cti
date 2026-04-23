
export default{

    preencherArea(){
        cy.get('#area_name')
            .select('CTI')
    },

    preencherDatas(){
        cy.get('#initial_date')
            .type('2026-04-01')
        cy.get('#final_date')
            .type('2026-04-23')
    },

    preencherDatasInvalidas(){
        cy.get('#initial_date')
            .type('2026-04-23')
        cy.get('#final_date')
            .type('2026-04-01')
    },

    clicarPesquisar(){
        cy.get('form > input.btn.btn-success')
            .click()
    },

    gerarRelatorio(){
        cy.get('a > button.btn-info')
            .click()
    },

}