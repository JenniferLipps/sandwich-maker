import cart from '../components/cart.js';

const breadInfo = {
  white: 0.50,
  wheat: 0.50,
  wrap: 0.75
};

const getBread = () => {
  return breadInfo;
};

const addBread = (ingredient) => {
  const ingredientToAdd = {
    name: ingredient,
    price: breadInfo[ingredient],
    type: 'bread'
  };
  console.log(ingredientToAdd);
  cart.addToCart(ingredientToAdd);
};

export default { getBread, addBread };