const shop = document.getElementById('shop');

let basket = JSON.parse(localStorage.getItem('data')) || []

let generateShop = () => {
    shop.innerHTML = shopItemsData.map((x) => {
        let { id, name, price, discount, img } = x

        return `
        <div class="shop_item" id="${id}">
            <div class="product-cardbox">
                <div class="image-box">
                    <img src="${img}" alt="image">
                </div>
                <div class="canvas-cart">
                <i onclick="add_to_cart('${id}','${name}','${price}','${img}')" class='bx bxs-shopping-bag-alt'></i>
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
        name: name,
        price: price,
        img: img
    });

    localStorage.setItem('data',JSON.stringify(basket))


    calculate()
  }
  
  let calculate = () => {
    let cart_icon = document.getElementById('cart_amount')
    let cart_amount = basket.length
  
     cart_icon.innerHTML = cart_amount
  }
  
  
  calculate()
  generateShop()