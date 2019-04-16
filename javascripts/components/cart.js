import util from '../helpers/util.js';

let cart = [];

const getCart = () => {
    return cart;
};

const addToCart = (ingredientToAdd) => {
  cart.push(ingredientToAdd);
};

const makeSandwich = (e) => {
    e.preventDefault();
    console.log(cart);
    let domString = '';
    cart.forEach((item) => {
        domString += `<div>${item.name}</div>`
    })
    util.printToDom('store-container', domString);
    
};

export default { addToCart, makeSandwich }