
export default{

    preencherCamposObrigatórios(){
        cy.get('#set_area').select('CTI')
        cy.get('#resp_subarea').select('INFORMÀTICA')
        cy.get('#bond_employee_type_colaborador').click()
        cy.get('#collaborators').select('Fernanda Cardoso', { force: true })
        cy.get('#attended').select('Atendente')
        cy.get('#bond_modality_home_office').click()
    },

    atribuirAtivo(){
        cy.get('.links > .btn-success')
            .click()
        
        cy.get('#set_tombo').select(10, { force: true })
        cy.get('#set_status').select('VINCULADO')
    },

    salvarAtribuicao(){
        cy.get('.text-right > .btn-success')
            .click()
    },

    cancelarAtribuicao(){
        cy.get('.text-right .btn-danger')
            .click()
    },
    
    solicitarTermoAtribuicao(){
        cy.get('#bonds_ids_')
            .check()
        
        cy.get('div.card-header.py-3 > div:nth-child(1) > button')
            .click()
    },

    gerarTermo(){
        cy.get('#btn-termo')
            .should('be.visible')
            .click()    
    },

    preencherObservacao(mensagem){
        cy.get('#bond_observation')
            .clear()
            .type(mensagem)
    },

    //função criada para ajustar teste de edição.
    //Atendente não está trazendo a informação salva no banco - BUG
    //TODO: remover após correção do BUG X
    preenchendoAtendente(){
        cy.get('#attended')
            .select('Atendente')
    }

}