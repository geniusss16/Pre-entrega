export class Products {
  agregarProductos(Productos) {
    cy.xpath(`//button[contains(@value,"${Productos}")]`).click();
  }
  c;
  usarBotonClose() {
    cy.xpath("//button[@id='closeModal']").click();
  }

  BotonGoToShoppingCart() {
    cy.get("button#goShoppingCart").click();
  }
}
