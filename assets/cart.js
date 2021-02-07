import jQuery from 'jquery'
import CartJS from "shopify-cartjs";

const cart_json = JSON.parse(document.querySelector(".js-cart-json").innerHTML);
CartJS.init(cart_json);

jQuery(document).on("cart.requestStarted", function (event, cart) {
    jQuery('body').addClass('cart--open')
    jQuery("body").addClass("cart--loading");
});

jQuery(document).on("cart.requestComplete", function (event, cart) {
    jQuery("body").removeClass("cart--loading");
});

if (document.querySelector(".js-open-cart")) {
    var trigger = document.querySelector(".js-open-cart");
    trigger.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.add("cart--open");
    });
}

if (document.querySelector(".js-close-cart")) {
    var trigger = document.querySelector(".js-close-cart");
    trigger.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.remove("cart--open");
    });
}