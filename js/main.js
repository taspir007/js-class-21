document.querySelector("input").addEventListener('click', function() {
    const checkbox = document.querySelector("input");
    const body = document.body;

    if (checkbox.checked) {
        // Dark mode
        body.style.backgroundColor = "#363636";
        body.style.color = "white";
        document.querySelector("label").innerText = "Dark Mood Off" 
        
          
    } else {
        // Lite mode
        body.style.backgroundColor = "white";
        body.style.color = "black"; 
        document.querySelector("label").innerText = "Dark Mood On" 
         
    }
});

// Cart section

let cartCount = 0;

function addToCart() {
  cartCount++;
  updateCartCount();
}

function removeFromCart() {
  if (cartCount > 0) {
    cartCount--;
    updateCartCount();
  }
}

function updateCartCount() {
  document.getElementById('cart-count').innerText = cartCount;
}


// rang section



