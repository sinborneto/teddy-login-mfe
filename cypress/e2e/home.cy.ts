describe('Página Inicial', () => {
  it('Deve carregar a página com sucesso', () => {
    cy.visit('https://host-five-sigma.vercel.app/');
    cy.get('p').should('contain.text', 'Olá, seja bem-vindo!');
    cy.get('label[for="on_label"]').should('exist');
    cy.get('input#on_label').type('João');
    cy.contains('button', 'Entrar').should('be.visible').click();
    cy.url().should('include', '/system;name=Jo%C3%A3o');
  });
});
