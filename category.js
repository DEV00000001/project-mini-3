import { API_CATEGORIES } from "./constants.js";
import { displayProduct } from "./displayProduct.js";
import { fetchApi } from "./fetchApi.js";
import { catagoryList, params } from "./variable.js";

fetchApi(API_CATEGORIES).then((data) => {
  let htmls = data.map((items) => {
    return `
            <div class="col-2">
                <div class="catagory__item">${items}</div>
            </div>`;
  });

  catagoryList.innerHTML = htmls.join("");
  const listCatagory = document.querySelectorAll(
    ".catagory .row .catagory__item"
  );
  console.log(listCatagory);
  listCatagory.forEach((item) => {
    item.addEventListener("click", () => {
      console.log(item.innerText);
      params.category = item.innerText;
      displayProduct();
    });
  });
});
