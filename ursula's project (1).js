var shopper = {
   shopperfirstName: "Heather",
   shopperlastName: "Hopkins",
    shopperbirthDate: 1992,
    shopperAge: 27,
    usingCash:true,
    groceryCart: ["milk", "cheeese", "turkey"],

    cartItem: function(){
    return this.shopperfirstName + "" + this.shopperAge + "spent: " + this.groceryCart + "" + this.usingCash},
    }
       console.log(shopper.cartItem());