export class LoginPage {
  constructor() {
    this.usuarioInput = "//input[@name='user']";
    this.contraseñaInput = "//input[@name='pass']";
    this.LoginButton = "//button[text()='Log in']";
  }

  escribirUsuario(usuario) {
    cy.xpath(this.usuarioInput).type(usuario);
  }

  escribirContraseña(contraseña) {
    cy.xpath(this.contraseñaInput).type(contraseña);
  }

  clickLoginButton() {
    cy.xpath(this.LoginButton).click();
  }
}
