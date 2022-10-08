export class HomePage {
  constructor() {
    this.entrarTiendaOnline = "#onlineshoplink";
  }

  entrarOnlineShopLink() {
    cy.get(this.entrarTiendaOnline).click();
  }
}
