const neon = document.getElementById('neon');

let basket = JSON.parse(localStorage.getItem('data')) || []

let generateNeon= () => {
    neon.innerHTML = neonStore.map((x) => {
        let { id, name, price, discount, img, src } = x

        return `
        <div class="shop_item" id="${id}">
            <div class="product-cardbox">
                <div class="image-box">
                    <img src="${img}" alt="image">
                    <img src="${src}" class="change-img">
                </div>
                <div class="canvas-cart">
                <i onclick="add_to_cart('${id}','${name}','${img}','${price}')" class='bx bxs-shopping-bag-alt'></i>
                </div>
                <div class="product-text">
                    <h4 class="product-title">${name}</h4>
                </div>
                <div class="product-price">
                    <span class="price">${price}</span>
                    <span class="discount">${discount}</span>
            </div>
         </div>
        </div>
        `;
    });
}

let add_to_cart = (id, name, img, price) => {

    basket.push({
        id: id,
        item: 1,
        img: img,
        name: name,
        price: price,
    });

    localStorage.setItem('data',JSON.stringify(basket))


    calculate()
  }
  
  let calculate = () => {
    let cart_icon = document.getElementById('cart_amount')
    let cart_amount = basket.length;
  
     cart_icon.innerHTML = cart_amount
  }
  
  
  calculate()
  generateNeon()