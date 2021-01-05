var radios = document.querySelectorAll("[data-option-radio]");
var selects = document.querySelectorAll("[data-option-select]");
var main = document.querySelector("[data-option-main]");

var selected = [];
var product_images = document.querySelectorAll(".js-image");

var add_to_cart_button = document.querySelector(".js-add-to-cart");
var sold_out = document.querySelector(".js-sold-out");

var variants_json = JSON.parse(
  document.querySelector(".js-variants-json").innerHTML
);

for (var i = 0; i < radios.length; i++) {
  radios[i].addEventListener("change", function () {
    selected = [];

    for (var j = 0; j < radios.length; j++) {
      if (radios[j].checked) {
        selected.push(radios[j].value);
      }
    }

    var selected_variant = variants_json[selected.join(" / ")];
    updateSelection(selected_variant);
  });
}

for (var i = 0; i < selects.length; i++) {
  selects[i].addEventListener("change", function () {
    selected = [];

    for (var j = 0; j < selects.length; j++) {
      selected.push(selects[j].value);
    }

    var selected_variant = variants_json[selected.join(" / ")];
    updateSelection(selected_variant);
  });
}

function updateSelection(selected_variant) {
  // change main value
  main.value = selected_variant.id;

  // update images
  for (var i = 0; i < product_images.length; i++) {
    if (product_images[i].dataset.image == selected_variant.image) {
      product_images[i].style.display = "block";
    } else {
      product_images[i].style.display = "none";
    }
  }

  // update pricing

  document.querySelector(".js-variant-price").innerHTML =
    selected_variant.price;

  // if not available, let them know
  if (selected_variant.available == "true") {
    add_to_cart_button.style.display = "block";
    sold_out.style.display = "none";
  } else {
    add_to_cart_button.style.display = "none";
    sold_out.style.display = "block";
  }
}
