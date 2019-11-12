    const order = document.getElementById("btn");
    order.addEventListener("click", function(){
        
        var pSize = parseInt(document.getElementById("pizzaSize").value);
        var pCrust = parseInt(document.getElementById("pizzaCrust").value);
        var pToppings = parseInt(document.getElementById("pizzaToppings").value);
        var quant = parseInt(document.getElementById("quantity").value);
            
        var totalCost = (pSize + pCrust + pToppings) * quant;

        alert(`Your order has been received amounting to ${totalCost}`);

        if (delivery.checked) {
            prompt(`please enterb your location.`);
        } else {
            
        }
        prompt(``)

        

    
    });

