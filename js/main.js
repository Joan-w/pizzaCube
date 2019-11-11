function placeOrder(){
    var pSize = document.getElementById("pizzaSize").value;
    var pCrust = document.getElementById("pizzaCrust").value;
    var pToppings = document.getElementById("pizzaToppings").value;
 
    function placeOrder (pSize, pCrust, pToppings){
        this.pizzaSize = pSize;
        this.pizzaCrust = pCrust;
        this. pizzaToppings = pToppings;
        this.location = delivery;
        this.price = 0;
    }
    let sizes = ["large", "medium", "small"];
    let crust = ["chicago", "Neopoletan", "Deep-fish"];
    let toppings = ["pepperoni", "onions", "sausages"];


    order.prototype.totalCost = function(){
        if (this.pizzaSize == sizes[0]) {
            this.price += 2000;
        } 
        else if(this.pizzaSize == sizes[1]){
            this.price += 1500;
        }
        else if(this.pizzaSize == sizes[2]){
            this.price += 1000;
        }


    }


}