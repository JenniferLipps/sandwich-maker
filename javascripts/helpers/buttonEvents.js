import breadItems from './breadItems.js';

const addIngredient = (e) => {
    e.preventDefault();
    console.log('working');
    breadItems.addBread(e.target.id);
};

const attachEvents = () => {
    document.getElementById('white').addEventListener('change', addIngredient);
    document.getElementById('wheat').addEventListener('change', addIngredient);
    document.getElementById('wrap').addEventListener('change', addIngredient);
};

export default { attachEvents }