function createMarkap(arr, list) {
    const markap = arr.map(
        ({ id, name, price, img }) => 
        ` <li class='product__item _list' data-id="${id}">
            <img src="${img}" alt="${name}" width="300">
            <h2 class='product__title'>${name}</h2>
            <h3 class='product__price-title'>Price: <span class='product__price-value'>${price}</span></h3>
            <button type='button' class='product__btn'>add to cart</button>
          </li>`
    ).join('');
    list.innerHTML = markap;
}

export {createMarkap}