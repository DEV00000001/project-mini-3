export let params = {
  q: "",
  sort: "",
  order: "",
  page: 1,
  limit: 30,
  category: "",
};
export const inputSearch = document.querySelector(".searchfilter__input");
export const buttonSearch = document.querySelector("#searchButton");
export const sortSelect = document.querySelector("#sortSelect");
export const pagiPrev = document.querySelector("#paginationPrev");
export const pagiNext = document.querySelector("#paginationNext");
export const pagiNumber = document.querySelector(".pagintion__number");
export const productList = document.querySelector(".list .row");
export const catagoryList = document.querySelector(".catagory .row");
