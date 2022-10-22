export class Recipt {
  verificarNombre(nombre) {
    cy.xpath(`//p[contains(@id,"name")]`)
      .invoke("text")
      .then((titulo) => {
        expect(titulo).to.include(nombre);
      });
  }

  verificarApellido(apellido) {
    cy.xpath(`//p[contains(@id,"name")]`)
      .invoke("text")
      .then((titulo) => {
        expect(titulo).to.include(apellido);
      });
  }

  verificarProducto1(producto) {
    cy.xpath(`//p[contains(@id,"Black T-Shirt")]`)
      .invoke("text")
      .then((titulo) => {
        expect(titulo).to.include(producto);
      });
  }

  verificarProducto2(producto2) {
    cy.xpath(`//p[contains(@id,"White Pants")]`)
      .invoke("text")
      .then((titulo) => {
        expect(titulo).to.include(producto2);
      });
  }

  verificarCreditCard(card) {
    cy.xpath(`//p[contains(@id,"creditCard")]`)
      .invoke("text")
      .then((titulo) => {
        expect(titulo).equal(card);
      });
  }

  verificarPrecioTotal(precio) {
    cy.xpath(`//p[contains(@id,"totalPrice")]`)
      .invoke("text")
      .then((titulo) => {
        expect(titulo).to.include(precio);
      });
  }
}
