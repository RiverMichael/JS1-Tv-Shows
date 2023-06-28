import { onSearch } from "./onSearch.js";

const searchForm = document.querySelector("form#searchForm");

/**
 * Sets the search listeners
 * @param {*} parentElement Where to append the search result
 * @param {*} searchList The list to search from
 */
export function setSearchListeners(parentElement, searchList) {
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  searchForm.addEventListener("input", function (event) {
    onSearch(event.target.value, parentElement, searchList);
  });
}
