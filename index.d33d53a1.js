const e={KEY_BASKET:"basket"};function t(e,t){const a=e.map((({id:e,name:t,price:a,img:i})=>` <li class='product__item _list' data-id="${e}">\n            <img src="${i}" alt="${t}" width="300">\n            <h2 class='product__title'>${t}</h2>\n            <h3 class='product__price-title'>Price: <span class='product__price-value'>${a}</span></h3>\n            <button type='button' class='product__btn'>add to cart</button>\n          </li>`)).join("");t.innerHTML=a}const a=[{id:12,name:"Материнська плата для майнінгу BTC B250C на 12 відеокарт",price:4e3,img:"https://images.prom.ua/3877149551_materinskaya-plata-dlya.jpg"},{id:13,name:"Материнська плата для майнінгу BTC B250C на 12 відеокарт",price:5e3,img:"https://images.prom.ua/3925229878_materinskaya-plata-dlya.jpg"},{id:14,name:"Материнська плата B75. Майнинг комплект на 8 видеокарт",price:3200,img:"https://images.prom.ua/3905639523_materinskaya-plata-b75usb.jpg"},{id:15,name:"Материнська плата Colorful B250-BTC",price:3800,img:"https://images.prom.ua/3819006958_materinskaya-plata-colorful.jpg"}],i=[{id:7,name:"Райзер 009S PLUS PCI-E 1x to 16x 60 см Plus\t",price:160,img:"https://images.prom.ua/3829825320_rajzer-v009s-plus-ci-e.jpg"},{id:8,name:"Райзер перехідник M2 to USB 3.0 під райзер M.2 to PCI-E",price:105,img:"https://images.prom.ua/3860439833_rajzer-perehodnik-m2.jpg"},{id:9,name:"Райзер Molex 6 Pin v010-X USB 3.0 PCI-E 1X - 16X Riser для відеокарт",price:200,img:"https://images.prom.ua/3927116298_rajzer-molex-6.jpg"},{id:10,name:"Райзер Molex 6 Pin v010S Plus USB 3.0 PCI-E 1X - 16X",price:260,img:"https://images.prom.ua/3969530463_rajzer-6-pin.jpg"},{id:11,name:"Райзер. Райзер універсальний, 6 пін, молекс, ver 009s",price:120,img:"https://images.prom.ua/3918293695_rajzer-rajzer-universalnyj.jpg"}],r=[{id:1,name:"SSD 240GB Patriot Burst Elite 2.5 SATAIII TLC",price:700,img:"https://images.prom.ua/3862985288_ssd-240gb-patriot.jpg"},{id:2,name:"SSD 512 GB Mibrand Caiman 2.5 Sata III",price:1300,img:"https://images.prom.ua/3892456261_ssd-512-gb.jpg"},{id:3,name:"SSD накопичувач 120GB Apacer Panther 2.5 SATAIII",price:600,img:"https://images.prom.ua/3827769164_ssd-nakopitel-120gb.jpg"},{id:4,name:"SSD накопичувач 120GB Goldenfier 2.5 SATAIII",price:600,img:"https://images.prom.ua/4001099214_ssd-nakopitel-120gb.jpg"},{id:5,name:"SSD накопичувач 120GB Mibrand 2.5 SATAIII",price:500,img:"https://images.prom.ua/3906592742_ssd-nakopitel-120gb.jpg"},{id:6,name:"SSD накопичувач 120GB Patriot Burst Elite 2.5 SATAIII",price:490,img:"https://images.prom.ua/3945517056_ssd-nakopitel-120gb.jpg"}],s=document.querySelector(".product__list");var o;const p=null!==(o=JSON.parse(localStorage.getItem(e.KEY_BASKET)))&&void 0!==o?o:[],n=document.querySelector(".shops__list"),m=document.querySelector("._js-motherboardsItem"),l=document.querySelector("._js-ssdItem"),c=document.querySelector("._js-risersItem");console.log(l);let g=a;n.addEventListener("click",(function(e){e.preventDefault(),e.target===m?(console.log(e.target===m),g=a,t(a,s)):e.target===l?(console.log(e.target===l),t(r,s),g=r):(console.log(e.target===c),t(i,s),g=i)})),t(g,s),s.addEventListener("click",(function(t){if(t.preventDefault(),t.target.classList.contains("product__btn")){const{id:i}=t.target.closest(".product__item").dataset,r=(a=Number(i),g.find((({id:e})=>e===a)));let s=1;r.value=s,console.log(s);const o=p.some((({id:e})=>e===r.id));if(console.log(o),o)return;console.log(r.id),p.push(r),console.log(p),localStorage.setItem(e.KEY_BASKET,JSON.stringify(p))}var a}));
//# sourceMappingURL=index.d33d53a1.js.map