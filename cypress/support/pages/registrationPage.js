export class RegistrationPage {
  constructor() {
    this.IniciaSesion = "#registertoggle";
  }

  presionarIniciarSesion() {
    cy.get(this.IniciaSesion).dblclick();
  }
}
