// Biriyani prices
var prices = {
    chicken: 120,
    mutton: 150,
    veg: 100
};

// Cart array
var cart = [];

// Total price
var total = 0;

// Display the price of the selected biriyani
function displayPrice(biriyani) {
    var price = prices[biriyani];
    document.getElementById('selected-biriyani').innerHTML = biriyani;
    document.getElementById('price').innerHTML = price;
    document.getElementById('add-to-cart-btn').disabled = false;
}

// Add the selected biriyani to the cart
function addToCart() {
    var biriyani = document.querySelector('input[name="biriyani"]:checked').value;
    var price = prices[biriyani];
    cart.push({
        biriyani: biriyani,
        price: price
    });
    total += price;
    updateCart();
}

// Update the cart display
function updateCart() {
    var cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        var listItem = document.createElement('li');
        listItem.innerHTML = item.biriyani + ' - ' + item.price;
        cartList.appendChild(listItem)

        }

    }
