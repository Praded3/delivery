import { common } from "./common";
import { createBasket } from "./helpers/createBasket";

const list = document.querySelector('.orders__list');
const basket = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

createBasket(basket, list);

const quantityInputs = document.querySelectorAll('.orders__quantity');
let total = document.querySelector('.sum');
const price = document.querySelectorAll('.orders__price-value');
const closeBtns = document.querySelectorAll('.orders__btn');
let totalSum = 0;

closeBtns.forEach(function (btn) {
    btn.addEventListener("blur", (input) => {
    if (input.currentTarget.value <=0) {
        input.currentTarget.value = 1;

        };
        console.log(input.currentTarget);
         console.log(input.currentTarget.nextElementSibling.innerHTML = `<h3 class='orders__total'>Total: ${event.currentTarget.value * input.currentTarget.previousSibling.previousSibling.children[0].innerText}</h3> `);
        
        

    });
});


quantityInputs.forEach(function (input) {
    input.addEventListener("blur", (input) => {
    if (input.currentTarget.value <=0) {
        input.currentTarget.value = 1;

        };
        console.log(input.currentTarget);
         console.log(input.currentTarget.nextElementSibling.innerHTML = `<h3 class='orders__total'>Total: ${event.currentTarget.value * input.currentTarget.previousSibling.previousSibling.children[0].innerText}</h3> `);
        
        

    });
});

quantityInputs.forEach(function (input) {
    input.addEventListener('input', (onQuantityInputsChange));
    // console.log(input);
  
});
    
function onQuantityInputsChange(input) {

    const totalItemPrice = event.currentTarget.value * input.currentTarget.previousSibling.previousSibling.children[0].innerText;
    this.nextElementSibling.innerHTML = `<h3 class='orders__total'>Total: ${totalItemPrice}</h3> `;
    totalSum += totalItemPrice;
    total.innerHTML =  `<h3 class='sum'>Total order: ${totalSum}</h3> `;

}

let startTotal = 0;
basket.forEach(function  ({ price, value })  {
    startTotal += price;
  
    total.innerHTML =  `<h3 class='sum'>Total order: ${startTotal}</h3> `;
});
 
 console.log(basket);

export { basket }