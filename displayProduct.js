import { API_PRODUCT } from "./constants.js";
import { fetchApi } from "./fetchApi.js";
import { params, productList } from "./variable.js";

export const displayProduct = () => {
  let category = "";
  if (params.category !== "") {
    category = `&category=${params.category}`;
  }
  const api = `${API_PRODUCT}?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}${category}`;
  fetchApi(api).then((data) => {
    let htmls = data.map((item) => {
      return `
            <div class="col-2">
                <div class="list__item">
                    <div class="list__image">
                        <img src= ${item.thumbnail} alt="Anh san pham">
                        <div class="list__giamgia">${item.discountPercentage}%</div>
                    </div>
                    <div class="list__name">${item.title}</div>
                    <div class="list__block">
                        <div class="list__price">${item.price}$</div>
                        <div class="list__soluong">Còn lại: ${item.stock}sp</div>
                    </div>
                </div>
            </div>`;
    });
    productList.innerHTML = htmls.join("");
  });
};
