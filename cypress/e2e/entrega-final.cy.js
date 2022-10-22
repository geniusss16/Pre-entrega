//<reference types="cypress" />
//import { after } from "lodash";
import { HomePage } from "../support/pages/HomePage";
import { Products } from "../support/pages/products";
import { ShoppingCart } from "../support/pages/shoppingCart";
import { Checkout } from "../support/pages/checkout";
import { Recipt } from "../support/pages/recipt";

describe("Pre-entrega", () => {
  let informacion;
  let informacion2;
  const homepage = new HomePage();
  const products = new Products();
  const shoppingCart = new ShoppingCart();
  const checkout = new Checkout();
  const recipt = new Recipt();
  before("conexion con el json ", () => {
    cy.fixture("checkout").then((data) => {
      informacion = data;
      console.log(informacion.nombre);
    });

    cy.fixture("Productos").then((data2) => {
      informacion2 = data2;
      console.log(informacion2.productoUnoNombre);
    });

    cy.request({
      url: "https://pushing-it-backend.herokuapp.com/api/register",
      method: "POST",
      body: {
        username: "geniuss17",
        password: "Mcx82469777!",
        gender: "male",
        day: "17",
        month: "10",
        year: "1991",
      },
    }).then(() => {
      cy.request({
        url: "https://pushing-it-backend.herokuapp.com/api/login",
        method: "POST",
        body: {
          username: "geniuss17",
          password: "Mcx82469777!",
        },
      }).then((respuesta) => {
        window.localStorage.setItem("token", respuesta.body.token);
        window.localStorage.setItem("user", respuesta.body.user.username);
      });
      cy.visit("");
    });
  });

  it("Test Pre-entrega", () => {
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
    shoppingCart.BotonGotoCheckout();
    checkout.firstName(informacion.nombre);
    checkout.lastName(informacion.apellido);
    checkout.cardNumber(informacion.tarjeta);
    checkout.BotonPurchase();
    cy.wait(10000);
    recipt.verificarNombre(informacion.nombre);
    recipt.verificarApellido(informacion.apellido);
    recipt.verificarProducto1(informacion2.productoUnoNombre);
    recipt.verificarProducto2(informacion2.productoDosNombre);
    recipt.verificarCreditCard(informacion.tarjeta);
    recipt.verificarPrecioTotal(informacion2.PrecioTotal);
  });

  after("prueba", () => {
    cy.request({
      url: "https://pushing-it-backend.herokuapp.com/api/deleteuser/geniuss17",
      method: "DELETE",
    });
  });
});
