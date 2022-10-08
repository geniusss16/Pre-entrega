export class Products {
  constructor() {
    this.agregaProductoUno = "button#blacktshirt";
    this.cerrarModulo = "//button[@id='closeModal']";
    this.agregarProductoDos = "button#whitepants";
    this.bottonCarritoTienda = "button#goShoppingCart";
  }

  agregarProducto1() {
    cy.get(this.agregaProductoUno).click();
  }

  usarBotonClose() {
    cy.xpath(this.cerrarModulo).click();
  }

  agregarProducto2() {
    cy.get(this.agregarProductoDos).click();
  }

  BotonGoToShoppingCart() {
    cy.get(this.bottonCarritoTienda).click();
  }
}
