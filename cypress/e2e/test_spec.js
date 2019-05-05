describe('example test', () => {
  it('example', () => {
    cy.visit('/');
    cy.getByText('Hello world').should(el => {
      expect(el.innerText).toBe('Hello world');
    });
  });
});
