    var totalCost = [];
    
    
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
        if(this.pizzaSize === "" || this.pizzaCrust === "" || this.pizzaToppings === ""){
            alert("Please specify your pizza choice!");
        }
        else if(this.pizzaSize == pizzaSize[0]) {
            alert("Your order for a " + sizes + " has been received!");
        } 
        else if(this.pizzaSize == sizes[1]){
            this.price += 1500;
        }
        else if(this.pizzaSize == sizes[2]){
            this.price += 1000;
        }   
    }


function placeOrder(){

    var pSize = document.getElementById("pizzaSize").value;
    var pCrust = document.getElementById("pizzaCrust").value;
    var pToppings = document.getElementById("pizzaToppings").value;

    alert("Your order of a " + this.pizzaSize + " has been received.");
}