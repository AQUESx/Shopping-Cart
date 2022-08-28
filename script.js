let products = [];

let cherry = {
  name:"Carton of Cherries",
  price:4,
  quantity:0,
  productId:111,
  image:"images/cherry.jpg"
};
let strawberry = {
  name:"Carton of Strawberries",
  price:5,
  quantity:0,
  productId:222,
  image:"images/strawberry.jpg"
};
let orange = {
  name:"Bag of Oranges",
  price:10,
  quantity:0,
  productId:333,
  image:"images/orange.jpg"
};

products.push(cherry, strawberry, orange);

let cart = [];

function addProductToCart(productId) {
  let index = cart.findIndex(element=>element.productId === productId);
  if (index !== -1) {
    cart[index].quantity +=1;
  }
  else {
    let productToAdd = products.find(element=>element.productId === productId);
    productToAdd.quantity = 1;
    cart.push(productToAdd);
  }
}

function increaseQuantity(productId) {
  let index = cart.findIndex(element=>element.productId === productId);
  cart[index].quantity += 1;
}


function decreaseQuantity(productId) {
  let index = cart.findIndex(element=>element.productId === productId);
  cart[index].quantity -= 1;
  if (cart[index].quantity === 0) {
    removeProductFromCart(productId);
  }
} 



function removeProductFromCart(productId) {
  let index = cart.findIndex(element=>element.productId === productId);
  cart[index].quantity = 0;
  cart = cart.filter(element=>element.productId !== productId);
}

function cartTotal(){
  let totalPaid = 0
  for (let v = 0; v < cart.length; v++) {
    for(let a = 0; a< cart[v].quantity; a++){
    totalPaid = totalPaid + cart[v].price;{
    sum += item.quantity * item.price;
    }
    }
  }
  return totalPaid
}

function emptyCart(){
  for (n = 0; n < cart.length; n++){
    cart[n].quantity=0;
    }
  cart.splice(0, cart.length)
}

let totalPaid = 0;

function pay(amount) {
  let balance =totalPaid += amount;
  return  totalPaid - cartTotal()
}

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
}
