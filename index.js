const products = {
    men: [{
            name: 'Men Product 1',
            price: '$30'
        },
        {
            name: 'Men Product 2',
            price: '$40'
        },
        {
            name: 'Men Product 3',
            price: '$25'
        },
    ],
    women: [{
            name: 'Women Product 1',
            price: '$35'
        },
        {
            name: 'Women Product 2',
            price: '$45'
        },
        {
            name: 'Women Product 3',
            price: '$28'
        },
    ],
    kids: [{
            name: 'Kids Product 1',
            price: '$20'
        },
        {
            name: 'Kids Product 2',
            price: '$30'
        },
        {
            name: 'Kids Product 3',
            price: '$15'
        },
    ],
};

function showProducts(category) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    const categoryProducts = products[category];

    categoryProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p>`;
        productsContainer.appendChild(productElement);
    });
}

// Show default category (men) on page load
showProducts('men');