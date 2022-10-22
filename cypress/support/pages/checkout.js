export class Checkout {
  firstName(nombre) {
    cy.get("#FirstName").type(nombre);
  }

  lastName(apellido) {
    cy.get("#lastName").type(apellido);
  }

  cardNumber(card) {
    cy.get("#cardNumber").type(card);
  }

  BotonPurchase() {
    cy.xpath("//button[text()='Purchase']").click();
  }
}
