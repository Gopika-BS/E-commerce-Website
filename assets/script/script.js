import { products1 } from "./data.js";

const products = document.getElementsByClassName('product1')

function render(){
let productHtml = ""
for(let product of products1){
  
productHtml += `
<div class="col-lg-3 col-md-4 col-sm-6">
                  

                <a href="#">
                    <div class="card card-product-1">
                      <div class="card-body position-relative p-0">
                        <img src="${product.img}" class="card-img-top" alt="headset" />
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
                      <div class="card-body">
                        <p class="fs-12 mb-1  text-grey-800">${product.type}</p>
                        <h3 class="fs-16 mb-3">${product.productName}</h3>
                        <div class="fs-12 mb-1">
                          <span class="text-warning">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                          </span>
                          <span class="text-grey-800">${product.review}</span>
                        </div>
                        <div>
                          <span class="text-strick fs-12 text-grey-800"><del>${product.discount}</del></span>
                          <span class="  fw-600 text-primary">${product.price} </span>
                        </div>
                      </div>
                    </div>
                  </a>
                  </div>
`

}
console.log( products)
for(let i = 0;i<products.length;i++){

  products[i].innerHTML += productHtml;   
}

}
render();