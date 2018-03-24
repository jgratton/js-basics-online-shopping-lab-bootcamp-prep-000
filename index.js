var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var min = Math.ceil(1);
 var max = Math.floor(100);
 var price = Math.floor(Math.random() * (max - min + 1)) + min;
 var itemObject = { itemName: item, itemPrice: price };
 cart.push(itemObject);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (getCart().length === 0) {
    return 'Your shopping cart is empty.';
  } else if (getCart().length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
  } else if (getCart().length === 2) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`;
  } else {
    var output = [];
    for (let i = 0; i < getCart().length; i++) {
      if ( i === 1 ) {
        output.push(` ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`);
      } else if ( i === getCart().length - 1) {
        output.push(` and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`);
      } else {
        output.push(` ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`);
      }
    }
    return `In your cart, you have${output}.`;
  }
}

function total() {
  var total = 0;
  for (let i = 0; i < getCart().length; i++) {
    total += getCart()[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
    var i = getCart().findIndex(x => x.itemName===item);
    if (i !== -1) {
      getCart().splice(i,1);
      return getCart();
    } else {
      return 'That item is not in your cart.'
    }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === -1) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  }
}

/* OPEN TEST AREA
var testCart = [
  {itemName: "vanilla", itemPrice: 12},
  {itemName: "watermelon", itemPrice: 41},
  {itemName: "yams", itemPrice: 32}
  ];
  
function getTestCart() {
  return testCart;
}

var testArray = getTestCart();
console.log(testArray);

function testRemoveFromCart(item) {
    var i = getTestCart().findIndex(x => x.itemName===item);
    getTestCart().splice(i,1);
    var afterRemoved = getTestCart();
    console.log('From inside testRemoveFromCart ' + afterRemoved);
    return afterRemoved;
}

var testItem = "vanilla";

var testFunction = testRemoveFromCart(testItem);

console.log(testFunction);
END TEST AREA */