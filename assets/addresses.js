import "unfetch/polyfill";
import "es6-promise/auto";
import { AddressForm } from '@shopify/theme-addresses';

let addresses = document.querySelectorAll("[data-address=root]")

addresses.forEach((address, i) => {

  let id = address.dataset.id
  let selectors = {
    lastName: "#" + id + "_last_name",
    firstName: "#" + id + "_first_name",
    company: "#" + id + "_company",
    address1: "#" + id + "_address1",
    address2: "#" + id + "_address2",
    country: "#" + id + "_country",
    zone: "#" + id + "_province",
    postalCode: "#" + id + "_zip",
    city: "#" + id + "_city",
    phone: "#" + id + "_phone",
  };

  AddressForm(address, "en", selectors);

});

toggleForm = (id) => {
  var el = document.getElementById("form_" + id);
  el.style.display = el.style.display == "none" ? "" : "none";
}

toggleNewForm = () => {
  var el = document.getElementById("form_new");
  el.style.display = el.style.display == "none" ? "" : "none";
}

removeAddress = (id) => {
  if (!confirm("Are you sure you wish to delete this address?")) return;

  var form = document.createElement("form");
  var input = document.createElement("input");

  form.setAttribute("method", "post");
  form.setAttribute("action", "/account/addresses/" + id);
  
  input.setAttribute("type", "hidden");
  input.setAttribute("name", "_method");
  input.setAttribute("value", "delete");
  
  form.appendChild(input);
  
  document.body.appendChild(form);
  form.submit();
  
  document.body.removeChild(form);
}