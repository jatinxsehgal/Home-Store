let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping_cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculate = () => {
    let cartIcon = document.getElementById('cart_amount')
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);;
};

calculate();

// canvas wall image
let generateCartItems = () => {
    if (basket.length !== 0) {
        return (ShoppingCart.innerHTML = basket
            .map((x) => {
                let { id, name, img, price, item } = x;
                return `
        <div class="cart_item" id="${id}">
                <thead>
                </thead>

                <table width="100%">
                <tbody>
                    <tr>
                        <td>
                        <div class="image-box">
                        <img src="${img}" alt="image">
                        </div>
                        </td>
                        <td>
                            <h6 class="product-title">${name}</h6>
                        </td>
                        <td>
                        <div class="input-group number-spinner">
                           <button id="phone-minus" class="btn btn-default"><i class="fas fa-minus"></i></button>
                           <input id="phone-number" type="number" min="0" class="form-control text-center" value="1">
                           <button id="phone-plus" class="btn btn-default"><i class="fas fa-plus"></i></button>
                        </div>
                        </td>
                        <td>
                            <p class="product-price">${price}</p>
                        </td>
                        <td><a href="#"><i onclick = "removeItem(${id})" class='bx bx-trash-alt cart-remove'></i></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        `;
            }).join(""));
    } else {
        ShoppingCart.innerHTML = `
        <div class="alertMessage">
           <span class="close" onclick="this.parentElement.style.display='none';">×</span>
           <strong>Shopping cart is empty</strong>
        </div>
        `;
    }
};

generateCartItems();


// remove item 
let removeItem = (id) => {
    if(confirm('Are Your Sure to Remove')){
    basket = basket.filter((x) => x.id != id);
    localStorage.setItem("data", JSON.stringify(basket));
    calculate();
    generateCartItems()
}
};


//total amount 

let Total_amount = () => {
    let total_amount = 0
    basket.map((item) => {
        total_amount += item.item * item.price
    })


    label.innerHTML = `
    <div class="cart-container">
    <div class="coupon-section">
        <div class="coupon-content">
            <h5>Coupon</h5>
            <div class="coupon-text">
                <p>Enter your Coupon code if you have one.</p>
                <input type="text" placeholder="Coupon Code">
                <button class="CouponBtn">Apply Coupon</button>
            </div>
        </div>
    </div>
    <div class="total-section">
        <div class="total-content">
            <h5>Total</h5>
            <div class="shipping-text">
                <h6 id="tax-amount">Shipping Tax</h6>
                
            </div>
        </div>
        <div class="total">
        <h6>Total Price : </h6>
        <p>₹${total_amount}</p>
        </div>
        <button class="checkoutBtn">proceed to checkout</button>
        <button class='update' onClick=window.location.reload()>
        <i class='bx bx-refresh'></i>
       </button>
    </div>
</div>
    `;
};


Total_amount();


