
const createProduct = () => {
    let product = document.querySelector('.product5-details');

    product.innerHTML = `


        <div class="image-slider">
        <img class="background-image" src="E:/Mine/2.2/E-commerce/Website/New/images/009.jpg">
            <div class="product-images">
                <img src="E:/Mine/2.2/E-commerce/Website/New/images/009.jpg" class="active" alt="">
                <img src="E:/Mine/2.2/E-commerce/Website/New/images/009.jpg" alt="">
                <img src="E:/Mine/2.2/E-commerce/Website/New/images/009.jpg" alt="">
                <img src="E:/Mine/2.2/E-commerce/Website/New/images/009.jpg" alt="">
            </div>
            </div>
            
            <div class="details">
                <h2 class="product-brand">Red-Necked Gown</h2>
                <p class="product-short-des">High necked long dress with long slessves. Pure red dress with an uncommon design</p>
                <span class="product-price">LKR 2,500.00</span>
               
        
                <p class="product-sub-heading">select size</p>
        
                <input type="radio" name="size" value="s" checked hidden id="s-size">
                <label for="s-size" class="size-radio-btn check">s</label>
                <input type="radio" name="size" value="m" hidden id="m-size">
                <label for="m-size" class="size-radio-btn">m</label>
                <input type="radio" name="size" value="l" hidden id="l-size">
                <label for="l-size" class="size-radio-btn">l</label>
                <input type="radio" name="size" value="xl" hidden id="xl-size">
                <label for="xl-size" class="size-radio-btn">xl</label>
                <input type="radio" name="size" value="xxl" hidden id="xxl-size">
                <label for="xxl-size" class="size-radio-btn">xxl</label>
        <br><br>
                <button class="btn cart-btn">add to cart</button>
                
            </div>
    
    
    `;
}

createProduct();