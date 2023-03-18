const cartItems = [
    { id: '123', name: 'course 1', price:7},
    { id: '456', name: 'course 2', price:8},
    { id: '789', name: 'course 3', price:9}
  ];
  
  const cartItemsList = document.getElementById('cart-items');
  
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="item-name">${item.name}</span>
      <span class="item-price">${item.price.toFixed()}</span>
    `;
    cartItemsList.appendChild(li);
  });
  