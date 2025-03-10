describe('Página Inicial', () => {
  it('Deve carregar a página com sucesso', () => {
    cy.visit('/');
    cy.get('h1').should('contain.text', 'Olá, seja bem-vindo!');
    cy.get('input[placeholder="Digite seu nome:"]').should('exist');
    cy.contains('button', 'Entrar').should('be.visible');
    cy.url().should('include', '/nova-pagina');
    });
});
