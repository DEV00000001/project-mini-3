import { displayProduct } from "./displayProduct.js";
import {
  buttonSearch,
  inputSearch,
  pagiNext,
  pagiNumber,
  pagiPrev,
  params,
  sortSelect,
} from "./variable.js";

displayProduct();

// SEARCH

const search = () => {
  params.q = inputSearch.value;
  displayProduct();
};

inputSearch.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    search();
  }
});
buttonSearch.addEventListener("click", () => {
  search();
});
// END SEARCH

// FILTER

sortSelect.addEventListener("change", (e) => {
  switch (e.target.value) {
    case "default":
      params.sort = "";
      params.order = "";
      break;
    case "price_asc":
      params.sort = "price";
      params.order = "asc";
      break;
    case "price_desc":
      params.sort = "price";
      params.order = "desc";
      break;
    case "discount_desc":
      params.sort = "discountPercentage";
      params.order = "desc";
      break;
    default:
      break;
  }
  displayProduct();
});
// END FILTER

// PAGINATION
let currentPage = 1;

pagiNext.addEventListener("click", () => {
  params.page = params.page + 1;
  pagiNumber.innerHTML = params.page;
  displayProduct();
});
pagiPrev.addEventListener("click", () => {
  if (params.page > 1) {
    params.page = params.page - 1;
    pagiNumber.innerHTML = params.page;
    displayProduct();
  }
});

// END PAGINATION
