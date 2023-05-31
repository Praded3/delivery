function createBasket(arr, list) {
    const basket = arr.map(
        ({ id, name, price, img, value }) => 
        // ` <li class='product__item _list' data-id="${id}">
        //     <img src="${img}" alt="${name}" width="300">
        //     <h2 class='product__title'>${name}</h2>
        //     <h3 class='product__price-title'>Price: <span class='product__price-value'>${price}</span></h3>
        //     <button type='button' class='product__btn'>add to cart</button>
        //   </li>`
            `<li class='orders__item _list data-id="${id}'>
                <img src="${img}" alt="${name}" width="50%">
                <div class="orders__item-container ">
                  <h2 class='product__title'>${name}</h2>
                  <h3 class='orders__price-title'>Price:  <span class='orders__price-value'>${price}</span></h3>
                  <input class="orders__quantity" type="number" min="0" max="100" step="1" name="quantity" value="${value}">
                  <h3 class='orders__total'>Total: ${price * value}</h3>

                  <button type='button' class='orders__btn'>X</button>
                </div>
              </li>`
    ).join('');
 
    list.innerHTML = basket;
}

export { createBasket }