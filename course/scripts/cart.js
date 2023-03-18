const addToCartBtns = document.querySelectorAll('.add-to-cart');

addToCartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const itemId = btn.dataset.itemId;
    // Add item to cart using the itemId
    console.log(`Item ${itemId} added to cart`);
  });
});
