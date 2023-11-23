describe("test suite - conjunto de pruebas", () => {
  it(" validar la pagina de incio", () => {
    cy.visit("http://zero.webappsecurity.com");
    cy.get(" .active > img").should("be.visible");
    cy.get(" .active > .custom > h4").contains("Online Banking");
  });

  it(" validacion_transferencia", () => {
    cy.visit("http://zero.webappsecurity.com");
    cy.get("#signin_button").click();
    cy.get("#user_login").type("username");
    cy.get("#user_password").type("password");
    cy.get(".btn").click();
    cy.get("#transfer_funds_tab > a").click();
    cy.get("#tf_fromAccountId").select(3);
    cy.get("#tf_toAccountId").select(3);
    cy.get("#tf_amount").type("200");
    cy.get("#tf_description").type("deposito nicole");
    cy.get("#btn_submit").click();
    cy.get("#btn_submit").click();
    cy.get(" .alert").contains("You successfully submitted your transaction.");
  });
});
