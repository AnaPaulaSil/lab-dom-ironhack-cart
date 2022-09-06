// ITERATION 1 - 

// const { product } = require("puppeteer")

function updateSubtotal(product) {
  const price = product.querySelector(".price span")
  const quantity = product.querySelector(".quantity input")
  // valores de dentro das tags
  const priceValue = price.innerText
  const quantityValue = quantity.value
  const subtotal = priceValue * quantityValue

  const subtotalTag = product.querySelector(".subtotal span")
  subtotalTag.innerText = subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // ITERATION 2
    const products = document.querySelectorAll('.product');
    products.forEach((product) => {
      updateSubtotal(product)
    })

  // end of test

  // ITERATION 3
  const total = document.querySelector("#total-value span")
  const somaSub = document.querySelectorAll(".subtotal span")
  
  somaSub.forEach((subtotal) => {
    (total.innerText) = Number(total.innerText) + Number(subtotal.innerText)
  })
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const rool = target.parentNode.parentNode
  const parent = rool.parentNode
  parent.removeChild(rool)


}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const btnRemove = document.querySelectorAll(".btn-remove")
  btnRemove.forEach((btn) => {
    btn.addEventListener ("click", removeProduct)

  })

  //... your code goes here
});
