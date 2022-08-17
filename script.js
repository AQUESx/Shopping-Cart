const products =[
  {
    name: "strawberry",
    price: 5,
    quantity: 0,
    productId: 100,
    image: "images/strawberry.jpg",   
  },
  {
    name: "orange",
    price: 10,
    quantity: 0,
    productId: 101,
    image: "images/orange.jpg",   
  },
  {
    name: "cherry",
    price: 6,
    quantity: 0,
    productId: 102,
    image: "images/cherry.jpg",   
  },
];

let cart = [];
const getProductById = ($id)

function addProductToCart(productId){
  for(let n=0; n<3; n++){
    if (productId === products[n].productId && cart.includes(products[n]) == false){
      cart.push(products[n]); cart[cart.length-1].quantity++;
    } else {
      null
    }
  }
}

function increaseQuantity(productId){
  getProductById(productId).quantity++;;
}

function decreaseQuantity(productId){
  if (getProductById(productId).quantity > 1){
    getProductById(productId).quantity--;
  } else if (getProductById(productId).quantity === 1){
    removeProductFromCart(productId)
  }
}

function removeProductFromCart(productId){
  getProductById(productId).quantity = 0;
  cart.splice(cart.indexOf(getProductById(productId)),1)
}

function cartTotal(){
  const totalPaid = 0
  for (let v = 0; v < cart.length; v++) {
    for(let a = 0; a< cart[v].quantity; a++){
    totalPaid = totalPaid + cart[v].price;
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

const totalPaid = (price * quantity);

function pay(payment){
  let balance = (totalPaid)- cartTotal();
  while (balance <0){
    totalPaid==balance;
    pay(payment)
  }
  return  balance
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
