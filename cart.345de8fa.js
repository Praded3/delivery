const e=document.querySelector(".orders__list");var t;!function(e,t){const n=e.map((({id:e,name:t,price:n,img:r,value:o})=>`<li class='orders__item _list data-id="${e}'>\n                <img src="${r}" alt="${t}" width="50%">\n                <div class="orders__item-container ">\n                  <h2 class='product__title'>${t}</h2>\n                  <h3 class='orders__price-title'>Price:  <span class='orders__price-value'>${n}</span></h3>\n                  <input class="orders__quantity" type="number" min="0" max="100" step="1" name="quantity" value="${o}">\n                  <h3 class='orders__total'>Total: ${n*o}</h3>\n\n                  <button type='button' class='orders__btn'>X</button>\n                </div>\n              </li>`)).join("");t.innerHTML=n}(null!==(t=JSON.parse(localStorage.getItem("basket")))&&void 0!==t?t:[],e);const n=document.querySelectorAll(".orders__quantity");let r=document.querySelectorAll(".orders__total");const o=document.querySelectorAll(".orders__price-value");function l(e){console.log(event.currentTarget.value),r.innerHTML=event.currentTarget.value*o}n.forEach((function(e){e.addEventListener("input",l)}));
//# sourceMappingURL=cart.345de8fa.js.map
