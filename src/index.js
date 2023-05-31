const motherboards = [
    {
    id: 1,
    name: "Материнська плата для майнінгу BTC B250C на 12 відеокарт",
    price: 4000,
    img: "https://images.prom.ua/3877149551_materinskaya-plata-dlya.jpg",
    },
    {
    id: 2,
    name: "Материнська плата для майнінгу BTC B250C на 12 відеокарт",
    price: 5000,
        img: "https://images.prom.ua/3925229878_materinskaya-plata-dlya.jpg",
    },

    {
    id: 3,
    name: "Материнська плата B75. Майнинг комплект на 8 видеокарт",
    price: 3200,
    img: "https://images.prom.ua/3905639523_materinskaya-plata-b75usb.jpg",
    },
    
    {
    id: 4,
    name: "Материнська плата Colorful B250-BTC",
    price: 3800,
    img: "https://images.prom.ua/3819006958_materinskaya-plata-colorful.jpg",
    },
];
const KEY_BASKET = 'basket';
const list = document.querySelector('.product__list');
const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];




function createMarkap(arr) {
    const markap = arr.map(
        ({ id, name, price, img }) => 
        ` <li class='product__item _list' data-id="${id}">
            <img src="${img}" alt="${name}" width="300">
            <h2 class='product__title'>${name}</h2>
            <h3 class='product__price-title'>Price: <span class='product__price-value'>${price}</span></h3>
            <button type='button' class='product__btn'>add to cart</button>
          </li>`
    ).join('');
     console.log(markap);
    list.innerHTML = markap;
}
createMarkap(motherboards);
list.addEventListener('click', onListClick);

function onListClick(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('product__btn')) {
        const { id } = evt.target.closest('.product__item').dataset;
        const product = findProduct(Number(id), motherboards );
       
        let value = 0;
        product.value += 1;
        product.value = value;
     
        // value += 1;
        //  console.log(value);
         
        
        const inStorage = basketArr.some(({ id })=> id === product.id);
        console.log(inStorage);
        if (inStorage) {
            
            return
        }  
         console.log(product.id);
        
         basketArr.push(product);
        console.log(basketArr);
        localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr))
    }
}

function findProduct(productId, arr) {

    return arr.find(({id})=> id === productId)
}