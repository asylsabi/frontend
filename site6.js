function filterProducts() {
    const category = document.getElementById('category').value;
    const priceFrom = document.getElementById('priceFrom').value;
    const priceTo = document.getElementById('priceTo').value;
    const products = document.querySelectorAll('.product');
  
    products.forEach(product => {
      const productCategory = product.classList.contains(category) || category === 'all';
      const productPrice = parseFloat(product.getAttribute('data-price'));
      const priceInRange = (!priceFrom || productPrice >= priceFrom) && (!priceTo || productPrice <= priceTo);
  
      if (productCategory && priceInRange) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }
  