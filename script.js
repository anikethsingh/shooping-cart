const addtocart = document.querySelector(".icons");

const cartpanel = document.querySelector(".cart-panel");

const Adcart = document.querySelectorAll(".card button");

const itmes = document.querySelector(".cart-item img");
const price = document.querySelector(".price");

const cartitem = document.querySelector(".cart-items");

const cardItemsCount = document.querySelector(".cart-count");
const totalprice=
document.querySelector('.total-price')
const calculateTotal=document.querySelector('.total h1')
let count = 0;


addtocart.addEventListener("click", () => {
  if (cartpanel.style.display === "block") {
    cartpanel.style.display = "none";
  } else {
    cartpanel.style.display = "block";
  }
});

Adcart.forEach((cart) => {
  cart.addEventListener("click", () => {
    ProductAdd(cart);
    totalpricess()
  });
});

function ProductAdd(carts) {
  const card = carts.parentElement;

  const img = card.children[0].src;
  const title = card.children[1].innerText;
  const price = card.children[2].innerText;
  let duplicateItem = document.querySelector(`[data-title="${title}"]`);
  if (duplicateItem) {
    let countQuan = duplicateItem.querySelector(".count");
    countQuan.innerText = Number(countQuan.innerText) + 1;
    return;
  }
  count++;
  
  cardItemsCount.innerText = count;
  cartitem.insertAdjacentHTML(
    "beforeend",
    `

<div class="cart-item" data-title="${title}">

    <img src="${img}">

    <div class="details">

        <h4>${title}</h4>

        <p>${price}</p>

    </div>

    <div class="quantity">

        <button class="minus">-</button>

        <span class="count">1</span>

        <button class="plus">+</button>

    </div>

</div>

`,
  );
 
}

function quantity() {
  cartitem.addEventListener("click", (e) => {
    if (e.target.classList.contains("plus")) {
      const count1 = (e.target.previousElementSibling )
         const Countinc=Number(count1.innerText)+1
         count1.innerText=Countinc
         totalpricess()
         
    }else if(e.target.classList.contains("minus")){
            const count2=  e.target.nextElementSibling
            console.log(count2)
            if(Number(count2.innerText)<=1){

                count2.innerText=1
            }
            else{
           const countsdec= Number(count2.innerText)-1
           count2.innerText=countsdec
           totalpricess()
            }
    }
  });
}

quantity();
function totalpricess(){
  let totlCart=0;
  const item= document.querySelectorAll(".cart-item")
  
  item.forEach((ite)=>{
   let Pr=ite.querySelector(".details p")
      let quantitycount=ite.querySelector(".quantity .count")
      let crtcount=Number(quantitycount.innerText)
   let cartprice=Pr.innerText
    let value=cartprice.replace("₹","")
    let Crt=Number(value)
    totlCart+=Crt*crtcount
    calculateTotal.innerText=totlCart
   
   console.log(Pr)
    
  })
}
