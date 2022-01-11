const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <p><i>Designed For You</i></p>
        <div class="footer-ul-container">
           
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="index.html" class="footer-link">Casual Dresses</a></li><br>
                <li><a href="index.html" class="footer-link">Long Dresses</a></li>
               
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">We are an online store which was developed since 2012 to offer you the best casual and long dresses. 'Designed for you' will always grant you the new designs and 
    we are happy to offer you the design you wish. Just join us by filling the registration form and take a look around our gallery to pick yours. </p>
    <p class="info"> Email - designed@foryou.com</p>
    <p class="info">Telephone - 0115673452 / 0784562341</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();