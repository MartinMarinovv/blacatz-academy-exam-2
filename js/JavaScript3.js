let productsStatic = [];
function filterByCategory() {
    let selCategory = $('input[name="category"]:checked').val();

}

function renderProducts(products) {
    let html = '<table class="table table-bordered">';
    html += '<tr>';
    html += '<th>Name</th>';
    html += '<th>Category</th>';
    html += '<th>Price</th>';
    html += '<th>Quantity</th>';
    html += '</tr>';
    for (let i = 0; i < products.length; i++) {
        html += '<tr>';
        html += `<td>${products[i].name}</td><td>${products[i].category}</td>`;
        html += `<td>${products[i].price}$</td><td>${products[i].quantity}</td>`;
        html += '</tr>';
    }
    html += '</table>';

    console.log(products);
    $('#items').html(html);
}

function initProducts() {
    $.ajax({
        url: 'http://blacatzacademy.com/api/products',
        type: 'GET',
        success: function (products) {
            productsStatic = products;
            renderProducts(productsStatic);
        }
    });
}

$('#filter').click(function () {
    let priceFrom = parseFloat($('#priceFrom').val());
    let priceTo = parseFloat($('#priceTo').val());
    let check_value = $('.category:checked').val();
    
    let filteredProducts = productsStatic.filter(p => {
        if (priceFrom >= 0 && p.price < priceFrom) {
            return false;
        }

        if (priceTo >= 0 && p.price > priceTo) {
            return false;
        }

        if (check_value && !check_value.includes(p.category)) {
            return false;
        }

        return true;
    });

    renderProducts(filteredProducts);
});

$(function () {
    initProducts();
});


