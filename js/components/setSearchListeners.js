import { onSearch } from "./onSearch.js";

const searchForm = document.querySelector("form#searchForm");

export function setSearchListeners(parentElement, searchList) {
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
    });

    searchForm.addEventListener("input", function(event) {
        onSearch(event.target.value, parentElement, searchList); 
    });
};