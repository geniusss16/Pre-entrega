//<reference types="cypress" />
import { RegistrationPage } from "../support/pages/registrationPage";
import { LoginPage } from "../support/pages/LoginPage";
import { HomePage } from "../support/pages/HomePage";
import { Products } from "../support/pages/products";
import { ShoppingCart } from "../support/pages/shoppingCart";

describe("Pre-entrega", () => {
  let informacion;
  let informacion2;
  const registrationPage = new RegistrationPage();
  const loginPage = new LoginPage();
  const homepage = new HomePage();
  const products = new Products();
  const shoppingCart = new ShoppingCart();

  before("conexion con el json ", () => {
    cy.fixture("DataUser").then((data) => {
      informacion = data;
    });

    cy.fixture("Productos").then((data2) => {
      informacion2 = data2;
      console.log(informacion2.productoUnoNombre);
    });
  });

  beforeEach("Ingresar en la pagina de pushing IT", () => {
    cy.visit("");
  });

  it("Test Pre-entrega", () => {
    registrationPage.presionarIniciarSesion();
    loginPage.escribirUsuario(informacion.usuario);
    loginPage.escribirContraseña(informacion.contraseña);
    loginPage.clickLoginButton();
    homepage.entrarOnlineShopLink();
    products.agregarProductos(informacion2.productoUnoNombre);
    products.usarBotonClose();
    products.agregarProductos(informacion2.productoDosNombre);
    products.usarBotonClose();
    products.BotonGoToShoppingCart();
    shoppingCart.verificarProducto(informacion2.productoUnoNombre);
    shoppingCart.verificarPrecio(
      informacion2.productoUnoNombre,
      informacion2.productoUnoPrecio
    );
    shoppingCart.verificarProducto(informacion2.productoDosNombre);
    shoppingCart.verificarPrecio(
      informacion2.productoDosNombre,
      informacion2.productoDosPrecio
    );
    shoppingCart.BotonShowTotalPrice();
    shoppingCart.VerificarElPrecioTotal(informacion2.PrecioTotal);
  });
});
