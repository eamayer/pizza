// Pizza Constructor
function Pizza(size) {
  this.pizzaSize = size;
  this.pizzaToppings = [];
};

// Pizza Prototypes

Pizza.prototype.pizzaPrice = function() {
var price = 20;

  if (this.pizzaSize === "large") {
    price += 10;
  } else if (this.pizzaSize === "medium") {
    price += 5;
  } else {
   price += 0;
  }
return price };

Pizza.prototype.toppingsCost = function () {
  return this.pizzaToppings.length
}


// User Interface Logic ---------


$(document).ready(function() {

  $("form#pizza-order").submit(function(event) {
    $("ul#pizza-cost").empty();
    event.preventDefault();

    var pizza = $("select#pizza-size").val();
    var newPizza = new Pizza(pizza);

    $("input[name='toppings']:checked").each(function() {
     newPizza.pizzaToppings.push($(this).val());
    });

    var finalPrice = (newPizza.pizzaPrice() + newPizza.toppingsCost())

    $("#pizza-final").show();
    $("ul#pizza-cost").append("<li>" + "$" + finalPrice + "</li>");

  });
})
