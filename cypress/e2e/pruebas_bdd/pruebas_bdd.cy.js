//PRUEBA DE UNA BASE DE DATOS
describe("pruebas_bdd_edison", () => {
  it("validar la creacion de un registo", () => {
    cy.visit("http://127.0.0.1:5000/create");
    cy.get("#name").type("nicole");
    cy.get("#email").type("nicole@gmail.com");
    cy.get("#age").type("33");
    cy.get('[type="submit"]').click();
  });

  //COMIENZO PRUEBA CON APIS.
  it.only("api para obtener usuarios", () => {
    const endPoind = "http://127.0.0.1:5000/getData";
    cy.request({
      method: "GET",
      url: `${endPoind}`,
      failOnStatusCode: false,
    }).as("usuarios");

    cy.get("@usuarios").its("status").should("eq", 200);
    cy.get("@usuarios").then((response) => {
      cy.expect(response.body[0].name).to.be.equals("gomi");
    });
  });
});
