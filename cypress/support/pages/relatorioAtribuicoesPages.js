
export default{

    preencherArea(area){
        cy.get('#search_area')
            .select(area)
    },

    preencherSubArea(){
        cy.get('#search_subarea')
            .select('INFORMÀTICA')
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