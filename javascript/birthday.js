

//filter products 

let filterProduct = [];


let show = [
    {
        id: 1,
        name: 'Happy Birthday Blue Color Neon Light | Decorative Light For Room',
        price: 'Rs 1500.00',
        low_price: 'Rs 1800.00',
        src: '../assets/image/Neon/Birthday-neon/img1.jpg',
    },
    {
        id: 2,
        name: 'Birthday yellow Color Neon Light | Decorative Light For Room',
        price: 'Rs 800.00',
        low_price: 'Rs 1000.00',
        src: '../assets/image/Neon/Birthday-neon/img2.jpg',
    },
    {
        id: 3,
        name: 'Happy Birthday Pink Color Neon Light | Decorative Light For Room',
        price: 'Rs 1500.00',
        low_price: 'Rs 1800.00',
        src: '../assets/image/Neon/Birthday-neon/img3.jpg',
    },
    {
        id: 4,
        name: 'pink color name neon design for home wall',
        price: 'Rs 1100.00',
        low_price: 'Rs 1300.00',
        src: '../assets/image/Neon/Birthday-neon/img4.jpg',
    },
    {
        id: 5,
        name: 'Birthday Neon Birthday Sign with LED Lights',
        price: 'Rs 999.00',
        low_price: 'Rs 1200.00',
        src: '../assets/image/Neon/Birthday-neon/img5.jpg',
    },
    {
        id: 6,
        name: 'Decorative Lights For Birthday Night,Neon Led Lights',
        price: 'Rs 1200.00',
        low_price: 'Rs 1400.00',
        src: '../assets/image/Neon/Birthday-neon/img6.jpg',
    },
    {
        id: 7,
        name: 'Happy Birthday LED Neon Light Sign | Black Base | Warm White',
        price: 'Rs 999.00',
        low_price: 'Rs 1100.00',
        src: '../assets/image/Neon/Birthday-neon/img7.jpg',
    },
    {
        id: 8,
        name: 'The Seven Colours Beautiful Happy Birthday Led Neon Light',
        price: 'Rs 2744.00',
        low_price: 'Rs 3000.00',
        src: '../assets/image/Neon/Birthday-neon/img8.jpg',
    },
    {
        id: 9,
        name: 'zorange Happy Birthday Neon Light Party Decoration Light',
        price: 'Rs 1495.00',
        low_price: 'Rs 1650.00',
        src: '../assets/image/Neon/Birthday-neon/img9.jpg',
    },
    {
        id: 10,
        name: 'Name Neon Sign for Wall Decor Led Light for Room ',
        price: 'Rs 1150.00',
        low_price: 'Rs 1200.00',
        src: '../assets/image/Neon/Birthday-neon/img10.jpg',
    },
    {
        id: 11,
        name: 'Happy Birthday Neon Light, Custom Neon Sign Light',
        price: 'Rs 2499.00',
        low_price: 'Rs 3000.00',
        src: '../assets/image/Neon/Birthday-neon/img11.jpg',
    },
    {
        id: 12,
        name: 'Beautiful Birthday yellow Color Neon Light | Decorative Light',
        price: 'Rs 1100.00',
        low_price: 'Rs 1300.00',
        src: '../assets/image/Neon/Birthday-neon/img12.jpg',
    },
    {
        id: 13,
        name: 'Pink color Name Neons Led Light for Design Room ',
        price: 'Rs 4599.00',
        low_price: 'Rs 5000.00',
        src: '../assets/image/Neon/Birthday-neon/img13.jpg',
    },
    {
        id: 14,
        name: 'Happy Birthday Neon Sign Party Neon Light Event',
        price: 'Rs 2599.00',
        low_price: 'Rs 3800.00',
        src: '../assets/image/Neon/Birthday-neon/img6.jpg',
    },
    {
        id: 15,
        name: 'he Seven Colours Beautiful Happy Birthday Led Neon Light',
        price: 'Rs 2744.00',
        low_price: 'Rs 3000.00',
        src: '../assets/image/Neon/Birthday-neon/img15.jpg',
    },
    {
        id: 16,
        name: 'Neon Light Happy Birthday Customise Decor neon Lights',
        price: 'Rs 2345.00',
        low_price: 'Rs 2500.00',
        src: '../assets/image/Neon/Birthday-neon/img16.jpg',
    },

];



var clutter = [];

function addshow(){
    show.forEach(function (product) {  
        clutter += `
        <div class="col-lg-3 col-md-6 col-sm-12 py-3">
        <div id="product-container">
            <div id="product-cards" class="product-list">
                <div class="product-images">
                    <img src="${product.src}" class="img-fluid">
                </div>
                <div id="product-content">
                    <h4>${product.name}</h4>
                </div>
                <div id="price-content">
                    <span class="price">${product.price}</span>
                    <span class="slice">${product.low_price}</span>
                </div>
                <div id="overlay">
                    <button id="cart-btn">Add to cart</button>
                </div>
            </div>
        </div>
    </div> `;
    });
    
    document.querySelector("#product-container").innerHTML = clutter;
}


addshow();

