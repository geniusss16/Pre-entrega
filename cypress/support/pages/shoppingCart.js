export class ShoppingCart {
  verificarProducto(Producto) {
    cy.xpath(`//p[@name="${Producto}"]`)
      .invoke("text")
      .then((titulo) => {
        expect(titulo).equal(Producto);
      });
  }

  verificarPrecio(producto2, precio) {
    cy.xpath(`//p[@name="${producto2}"]//following-sibling::p`)
      .invoke("text")
      .then((valor) => {
        expect(valor).equal(precio);
      });
  }

  BotonShowTotalPrice() {
    cy.xpath("//button[text()='Show total price']").click();
  }

  VerificarElPrecioTotal(precio) {
    cy.xpath('//p[@id="price"]/descendant::b').invoke("text").then((valor) => {
        expect(valor).equal(precio);
      });
  }

  BotonGotoCheckout() {
    cy.xpath("//button[text()='Go to Checkout']").click();
  }



}
