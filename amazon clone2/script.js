let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCart();

/* Add to cart */
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  alert(name + " added to cart!");
}

/* Update cart count */
function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;
}

/* Search Function */
function searchProduct() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let name = card.getAttribute("data-name").toLowerCase();

    if (name.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}