var MODEL = (function () {
    var _myVar = "Model";
    var _homePageInfo = `<section class="homeSection">
    <div class="box">
        <span class="box__img"></span>
        <div class="box__content">
            <h1 class="box__shopName">Ramen King</h1>
        </div>
    </div>
</section>

<section>
    <div class="time">
        <h1 class="time__open">Open Hours</h1>
        <ul class="time__list">
            <li class="time__item">Mon-Fri 11:00 a.m.-9:00 p.m.</li>
            <li class="time__item">Sat 9:00 a.m.-11:00 p.m.</li>
            <li class="time__item">Sun Closed</li>
        </ul>
    </div>
</section>
<section>
<div class="footer">
    <p>Ramen King 2021</p>
</div>
</section>`
    var _aboutPageInfo = ` <section class="aboutSection">
    <div class="about">
        <div class="about__img"></div>
        <div class="about__details">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repudiandae perferendis distinctio,
                sed nostrum expedita porro magnam consequuntur debitis quae blanditiis beatae voluptatem!
                Architecto, blanditiis pariatur autem vel impedit accusantium.</p> </br>

        </div>
    </div>
    <div class="chef">
        <div class="chef__img"></div>
        <div class="chef__details">
            <h1>Top Masters</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque itaque quasi, praesentium dolor
                dicta voluptatem eum fugit optio similique rerum quisquam autem minus repellendus aliquid hic
                reiciendis vitae saepe.</p>
</section>
<section class="aboutSection">
<div class="footer">
    <p>Ramen King 2021</p>
</div>
</section>`
    var _productsPageInfo = ` <section class="productsSection">
    <div class="products">
        <div class="products__products1">
            <span class="products__img1"></span>
            <h3 class="products__name">Ramen King</h3>

        </div>
        <div class="products__products2">
            <span class="products__img2"></span>
            <h3 class="products__name">Ramen Super</h3>
        </div>
</section>
<section class="productsSection">
    <div class="drinks">
        <h1 class="drinks__sodas">Coke Products</h1>
        <div class="drinks__sodaName">
            <ul>
                <li>Coca-Cola</li>
                <li>Diet Coke</li>
                <li>Sprite</li>
                <li>Fanta</li>
            </ul>
        </div>
        <h1 class="drinks__beers">Beer Products</h1>
        <div class="drinks__beerName">
            <ul>
                <li>Coors Light</li>
                <li>Heineken</li>
                <li>Asahi</li>
                <li>Corona</li>
            </ul>
        </div>
    </div>
</section>
<section class="productsSection">
<div class="footer">
    <p>Ramen King 2021</p>
</div>
</section>`
    var _contactPageInfo = `<section class="contactSection">
    <div class="contact">
        <div class="contact__name">
            <input id="name" type="text" placeholder="Your name...">
        </div>
        <div>
            <input id="email" type="text" placeholder="Email Address...">
        </div>

        <div>
            <input id="phone" type="text" placeholder="Phone Number...">
        </div>

        <div>
            <textarea id="message" rows="5" placeholder="Message....."></textarea>
        </div>
        <div>
            <button id="btn" type="submit">SEND MESSAGE</button>
        </div>

    </div>
</section>
<section class="contactSection">
    <div class="address">
        <p class="address__st">1111 Food St</p>
        <p class="address__ct">Indianapolis, IN</p>
        <p class="address__ph">Phone: 111-111-1111</p>
    </div>
</section>
<section class="contactSection">
<div class="footer">
    <p>Ramen King 2021</p>
</div>
</section>`

    var _getMyVariable = function (buttonID, callback) {
        let newName = "_" + buttonID + "PageInfo";

        $("#content").html(eval(newName));

        if (callback) {
            callback(newName);
        }
    };
    return {
        getMyVariable: _getMyVariable
    };
})();