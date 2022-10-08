
export class ShoppingCart {

    verificarProducto(Producto){
  
        cy.xpath(`'//p[contains(@name,"${Producto}")]'`).should("exist")
     
  
    }
  
   verificarPrecio(precio){


    cy.xpath(`'//p[contains(@name,"${precio}")]'`).should("exist")


   }

  
  
}