import { common } from "./common";
import { createBasket } from "./helpers/createBasket";

const list = document.querySelector('.orders__list');
const basket = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

createBasket(basket, list);

const quantityInputs = document.querySelectorAll('.orders__quantity');
let total = document.querySelectorAll('.orders__total');
const price = document.querySelectorAll('.orders__price-value');
 



quantityInputs.forEach(function (input) {
    input.addEventListener('input', (onQuantityInputsChange));
    // console.log(input);
});
    
function onQuantityInputsChange(input) {
    console.log(event.currentTarget.value);
 
    total.innerHTML = event.currentTarget.value * price;
    

}

