import { common } from "./common";
import { createMarkap } from './helpers/createMarkap';
import { motherboards } from './motherboard';
import { risers } from './riser';
import { ssds } from './ssd';

const list = document.querySelector('.product__list');
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];
const shopsList =  document.querySelector('.shops__list');

const motherboardsItem = document.querySelector('._js-motherboardsItem');
const ssdItem = document.querySelector('._js-ssdItem');
const risersItem = document.querySelector('._js-risersItem');

 console.log(ssdItem);

let qqq = motherboards;
shopsList.addEventListener('click', onShopsItemClick);
createMarkap(qqq, list);
function onShopsItemClick(evt) {
    evt.preventDefault();
    // console.log(evt.currentTarget);
    // console.log(evt.target);
    if (evt.target === motherboardsItem) {
        console.log(evt.target === motherboardsItem);
        qqq = motherboards;
        createMarkap(motherboards, list);
        //  product = findProduct(Number(id), motherboards );

    } else if (evt.target === ssdItem) {
         console.log(evt.target === ssdItem);
        createMarkap(ssds, list);
         qqq = ssds;
        //  product = findProduct(Number(id), ssds );

    }
    else {
        console.log(evt.target === risersItem)
        createMarkap(risers, list);
         qqq = risers;
        //  product = findProduct(Number(id), risers );

    }
    // default (evt.target = risersItem) {
    //      console.log(evt.target === risersItem);
    //     // createMarkap(risers, list);
    // }

}




// createMarkap(motherboards, list);
list.addEventListener('click', onListClick);

function onListClick(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('product__btn')) {
        const { id } = evt.target.closest('.product__item').dataset;
        
        const product = findProduct(Number(id), qqq );
       
        
        // value += 1;
        // product.value = value;
        
        // value += 1;
        //  console.log(value);
         
        let value = 1;
        product.value = value;
        console.log(value);
        const inStorage = basketArr.some(({ id })=> id === product.id);
        console.log(inStorage);
        if (inStorage) {
            return
        }  
         console.log(product.id);
        
         basketArr.push(product);
        console.log(basketArr);
        localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr))
    }
}

function findProduct(productId, arr) {

    return arr.find(({id})=> id === productId)
}

export { product };