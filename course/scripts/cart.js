const addToCartBtns = document.querySelectorAll('.add-to-cart');

addToCartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const itemId = btn.dataset.itemId;
    // Add item to cart using the itemId
    console.log(`Item ${itemId} added to cart`);
  });
});

function enrollNow() {
    // Add your booking logic here, such as opening a booking form or redirecting to a booking page
              window.location.href="dashboard.html";
              }
