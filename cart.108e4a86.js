const e=document.querySelector(".orders__list");var t;const r=null!==(t=JSON.parse(localStorage.getItem("basket")))&&void 0!==t?t:[];!function(e,t){const r=e.map((({id:e,name:t,price:r,img:n,value:o})=>`<li class='orders__item _list data-id="${e}'>\n                <img src="${n}" alt="${t}" width="50%">\n                <div class="orders__item-container ">\n                  <h2 class='product__title'>${t}</h2>\n                  <h3 class='orders__price-title'>Price:  <span class='orders__price-value'>${r}</span></h3>\n                  <input class="orders__quantity" type="number" min="1" max="100" step="1" name="quantity" value="${o}">\n                  <h3 class='orders__total'>Total: ${r*o}</h3>\n\n                </div>\n              </li>`)).join("");t.innerHTML=r}(r,e);const n=document.querySelectorAll(".orders__quantity");let o=document.querySelector(".sum");document.querySelectorAll(".orders__price-value");const l=document.querySelectorAll(".orders__btn");let s=0;function a(e){const t=event.currentTarget.value*e.currentTarget.previousSibling.previousSibling.children[0].innerText;this.nextElementSibling.innerHTML=`<h3 class='orders__total'>Total: ${t}</h3> `,s+=t,o.innerHTML=`<h3 class='sum'>Total order: ${s}</h3> `}l.forEach((function(e){e.addEventListener("blur",(e=>{e.currentTarget.value<=0&&(e.currentTarget.value=1),console.log(e.currentTarget),console.log(e.currentTarget.nextElementSibling.innerHTML=`<h3 class='orders__total'>Total: ${event.currentTarget.value*e.currentTarget.previousSibling.previousSibling.children[0].innerText}</h3> `)}))})),n.forEach((function(e){e.addEventListener("blur",(e=>{e.currentTarget.value<=0&&(e.currentTarget.value=1),console.log(e.currentTarget),console.log(e.currentTarget.nextElementSibling.innerHTML=`<h3 class='orders__total'>Total: ${event.currentTarget.value*e.currentTarget.previousSibling.previousSibling.children[0].innerText}</h3> `)}))})),n.forEach((function(e){e.addEventListener("input",a)}));let i=0;r.forEach((function({price:e,value:t}){i+=e,o.innerHTML=`<h3 class='sum'>Total order: ${i}</h3> `})),console.log(r);bigForm=document.querySelector(".modal__form"),console.log(bigForm),bigForm.addEventListener("submit",(async function(e){e.preventDefault();const t=new FormData(e.currentTarget);t.append("object",address.formatted_address),t.append("basket",r),console.log(t),console.log(address.formatted_address);let n=function(e){let t=0,r=document.querySelectorAll("._req-big");console.log("gggg");for(let e=0;e<r.length;e++){const n=r[e];l(n),n.classList.contains("_req-big-mail")&&s(n)&&(o(n),t++),n.classList.contains("_req-big-tel")?a(n)&&(o(n),t++):""===n.value&&(o(n),t++)}return t}(bigForm);if(t.forEach(((e,t)=>{console.log(e),console.log(t)})),0===n){let e="<b>New action</b>\n";!function(){for(let r of t.entries())console.log(r),""!=r[1]&&(e+=` ${r.join(" : ")}\n`,console.log(e))}(),axios.post("https://api.telegram.org/bot6279094717:AAEINNI-WB8PTYW-nQglKgNdX6lALH6T6A0/sendMessage",{chat_id:"-1001887598395",parse_mode:"html",text:e})}function o(e){e.classList.add("_error"),e.classList.add("_error")}function l(e){e.classList.remove("_error"),e.classList.remove("_error")}function s(e){return!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)}function a(e){return!/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(e.value)}}));
//# sourceMappingURL=cart.108e4a86.js.map
