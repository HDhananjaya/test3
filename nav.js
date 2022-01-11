const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
           <a href="index.html"> <img src="E:/Mine/2.2/E-commerce/Website/New/images/logo.png" class="brand-logo" alt=""><i>Designed For You</i></a>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="signup.html"><img src="E:/Mine/2.2/E-commerce/Website/New/images/user.png" alt=""></a>
                <a href="#"><img src="E:/Mine/2.2/E-commerce/Website/New/images/cart.png" alt="" ><span class="cart-basket d-flex align-items-center justify-content-center">
                0
              </span></a>
            </div>
        </div>
        
    `;
}

createNav();