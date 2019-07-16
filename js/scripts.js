// Pizza Constructor
function Pizza(size) {
  this.pizzaSize = size;
  this.pizzaToppings = [];
}

// Pizza Prototypes
Ticket.prototype.price = function() {
    var price = 20;

    if (this.pizzaSize === "large") {
      price += 10;
    } else if (this.pizzaSize === "medium") {
      price += 5;
    } else {
      price
    }

    if (this.pizzaToppings.length === 0) {
      price
    } else {
      price += this.pizzaToppings.length
    }

  return price

};



// User Interface Logic ---------


$(document).ready(function() {
  var totalPrice = 0;
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    var pizzaOrder = $("select#pizza-size").val();
    var newPizza = new Pizza(pizzaOrder)

    $.each($("input[name='toppings']:checked"), function() {
     newPizza.pizzaToppings.push($(this).val());
   });



    $("#pizza-final").show();
    $("ul#ticketInCart").append("<li>" + "$" + ticketPrice + "</li>");

  });
})
