import "jquery";
import "slick-carousel";

var radios = document.querySelectorAll("[data-option-radio]");
var selects = document.querySelectorAll("[data-option-select]");
var main = document.querySelector("[data-option-main]");

var selected = [];

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

  // change images
  changeVariant(selected_variant.id)

  // update option name 
  // document.querySelector('.js-option').innerHTML =
  //   selected_variant.title

  // update pricing
  document.querySelector(".js-variant-price").innerHTML =
    selected_variant.price;
  
  document.querySelector(".js-variant-compare-price").innerHTML =
    selected_variant.compare_at_price;

  // if not available, let them know
  if (selected_variant.available == "true") {
    add_to_cart_button.style.display = "block";
    sold_out.style.display = "none";
  } else {
    add_to_cart_button.style.display = "none";
    sold_out.style.display = "block";
  }

}

const product_json = JSON.parse(document.querySelector('.js-product-json').innerHTML);

jQuery(document).ready(() => {
  changeVariant();
});

function changeVariant() {

  unsetSlider();

  let featured_images = getFeaturedImages();
  let has_featured_images = (featured_images.length != 0) ? true : false
  let images = has_featured_images ? featured_images : getImages()
  
  let id = variants_json[main.options[main.selectedIndex].text].id

  updateThumbnails(images, id, has_featured_images)
  updateMainImages(images, id, has_featured_images)

  addArrows();
  setSlider();
  setNav();

  revealImageBlock()
}

function setNav() {
  jQuery('.js-thumbnail').click(function () {
    let slideIndex = jQuery(this).index();
    console.log(slideIndex)
    jQuery('.js-images').slick( 'slickGoTo', parseInt(slideIndex) )
  })
}

function addArrows() {
  let arrows = 
    `
    <button class='js-prev transition duration-500 p-2 md:p-8 outline-none z-20 absolute left-0 top-1/2 transform -translate-y-1/2' style='outline:none'>
      <svg width="15px" height="27px" viewBox="0 0 15 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Homepage---Desktop" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="HP_Desktop_Hero_2" transform="translate(-48.000000, -496.000000)" fill="#000000" fill-rule="nonzero"><g id="Hero1" transform="translate(-1.000000, 208.000000)"><g id="nav-arrows" transform="translate(47.000000, 286.000000)"><g id="Carrot" transform="translate(8.545455, 15.128788) rotate(-270.000000) translate(-8.545455, -15.128788) translate(-4.454545, 7.545455)"><polygon id="Path" points="25.0264317 0 12.7136564 12.245345 0.973568282 0.569550931 0 1.53778751 12.7136564 14.1818182 26 0.968236583"></polygon></g></g></g></g></g></svg>
    </button>
    <button class='js-next transition duration-500 p-2 md:p-8 outline-none z-20 absolute right-0 top-1/2 transform -translate-y-1/2' style='outline:none'>
    <svg width="14px" height="27px" viewBox="0 0 14 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Homepage---Desktop" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="HP_Desktop_Hero_2" transform="translate(-1378.000000, -494.000000)" fill="#000000" fill-rule="nonzero"><g id="Hero1" transform="translate(-1.000000, 208.000000)"><g id="nav-arrows" transform="translate(47.000000, 286.000000)"><g id="Carrot" transform="translate(1339.454545, 13.545455) rotate(-90.000000) translate(-1339.454545, -13.545455) translate(1326.454545, 6.545455)"><polygon id="Path" points="25.0264317 0 12.7136564 11.3033954 0.973568282 0.525739321 0 1.41949617 12.7136564 13.0909091 26 0.893756846"></polygon></g></g></g></g></g></svg>
    </button>
    `
  
  document.querySelector('.js-arrows').innerHTML = arrows;
}

function unsetSlider() {
  if (jQuery('.js-images').hasClass('slick-initialized')) {
    jQuery('.js-images').slick('unslick');
  }
}


function setSlider() {

  jQuery('.js-images').slick({
    dots: false,
    arrows: true,
    nextArrow: jQuery('.js-next'),
    prevArrow: jQuery('.js-prev')
  });
}

function hideImageBlock() {
  document.querySelector('.js-block').style.opacity = 0
}


function revealImageBlock() {
  document.querySelector('.js-block').style.opacity = 1
}

function updateThumbnails(images, id, has_featured_images) {

  let thumbnail_images = has_featured_images ? images[id] : images
  let thumbnail_images_block = ''

  if (thumbnail_images) {
    for (let thumbnail_image of thumbnail_images) {
      let thumbnail_image_block = `
        <div class='w-full pt-150 relative mb-4 js-thumbnail'>
          <img src='${thumbnail_image}' alt='' class='w-full h-full inset-0 absolute object-cover'>
        </div>
      `
      thumbnail_images_block += thumbnail_image_block
    }
  }

  document.querySelector('.js-thumbnails').innerHTML = thumbnail_images_block;
}

function updateMainImages(images, id, has_featured_images) {

  let main_images = has_featured_images ? images[id] : images
  let main_images_block = ''

  if (main_images) {
    for (let main_image of main_images) {
      let main_image_block = `
        <div class='w-full pt-150 h-0 relative'>
          <img class='block z-20 absolute inset-0 w-full h-full object-cover' src='${main_image}' alt='' />
        </div>
      `
      main_images_block += main_image_block
    }
  
  }

  document.querySelector('.js-images').innerHTML = main_images_block;
}

function getFeaturedImages() {
  let product = JSON.parse(document.querySelector('.js-product-json').innerHTML)
  let variants = product.variants
  let images = product.images

  let featured_images = []

  for (let variant of variants) {
    if (variant.featured_image) {
      let obj = {
        src: variant.featured_image.src,
        variant_id: variant.featured_image.variant_ids[0],
      }
      featured_images.push(obj)
    }
  }

  // if same image is used for multiple variants, throw an error
  let featured_images_unique = new Set(featured_images.map(item => item.src))

  if (featured_images.length == 0) {
    return [];
  }

  if (featured_images.length != [...featured_images_unique].length) {
    alert('You have one image set as the featured image for two variants, please set a different image as the featured image for each variant.')
    return;
  }

  let new_images = {}
  let variant_id = ''

  for (let image of images) {
    for (let featured_image of featured_images) {
      let featured_image_without_https = featured_image['src'].replace('https:', '')
      if (featured_image_without_https == image) {
        variant_id = featured_image.variant_id
      }
    }

    if (new_images[variant_id] == undefined) {
      new_images[variant_id] = []
    }
    new_images[variant_id].push(image)
  }  

  return new_images;
}

function getImages() {
  let product = JSON.parse(document.querySelector('.js-product-json').innerHTML)
  return product.images
}