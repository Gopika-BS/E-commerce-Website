import { products1,product2, articles } from "./data.js";
// const products = document.getElementById('product1')
const blog = document.getElementById('blog')
const products = document.getElementsByClassName('product1')
const products2 = document.getElementsByClassName('product2')
// console.log('Hello all')
function render() {
  // console.log('Hello all')
  let productHtml = ""
  for (let product of product2) {
    productHtml += `
    <div class="col-12">
    <a href="#">
      <div class="card  d-flex flex-row card-product-1">
        <div class="card-body grey-bg-2 position-relative p-0 d-flex flex-shrink-0"
          style="width:30%;">
          <img src="${product.img}" class="card-img-top m-auto" alt="headset">
          <div class="btn-group-vertical card-action position-absolute" role="group"
            aria-label="Basic outlined example">
            <button type="button" class="btn btn-white-2">
              <i class="bi bi-cart3"></i>
            </button>
            <button type="button" class="btn btn-white-2">
              <i class="bi bi-eye"></i>
            </button>
            <button type="button" class="btn btn-white-2">
              <i class="bi bi-heart"></i>
            </button>
          </div>
        </div>
        <div class="card-body border-0">
          <p class="fs-14 mb-1  text-grey-800">${product.type}</p>
          <h3 class="fs-20 mb-1 fw-400">${product.productName}</h3>
          <div class="fs-12 mb-1">
            <span class="text-warning">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
            </span>
            <!-- <span class="text-grey-800">(7 Review)</span> -->
          </div>
          <div class="mt-24">
            <span class="text-strick fs-12 text-grey-800"><del>${product.discount}</del></span>
            <span class="  fw-600 ">${product.price}</span>
          </div>
          <p class="fw-300 fs-14 mt-24">Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra
            Evolve2
            75 USB-A MS Teams Stereo Headset ha...</p>
          <button class="btn btn-dark fs-14 rounded-0 mt-24">Add To Card</button>
        </div>
      </div>
    </a>
  </div>
 

`
  }
  // console.log(products)
  for (let i = 0; i < products.length; i++) {
    products[i].innerHTML += productHtml;
  }
  let blogHtml = ""
  for (let blog of articles) {
    blogHtml += `
        <div class="col-lg-4 col-md-6">
        <div class="card border-0">
          <div class="rounded-4 overflow-hidden position-relative">
            <div class="position-absolute px-20 bottom-0 end-0 py-8 bg-dark text-light">
              ${blog.date}
            </div>
            <img src="${blog.img}" class="card-img-top " alt="..." />
          </div>
          <div class="card-body py-24 px-0">
            <h5 class="fs-18">${blog.heading}</h5>
            <p class="fs-14 fw-600 mb-14 text-grey-800"><i class="bi bi-tag"></i>Tablet,News</p>
            <p class="fs-14 mb-16 text-muted">The world is an amazing place providing an incredible assortment
              of
              interesting
              locations across.</p>
            <button type="button" class="btn btn-outline-dark fs-14">
              Read More
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
        `
  }
  blog.innerHTML = blogHtml;
}
if (products != null || blog != null) {
  render();
}
