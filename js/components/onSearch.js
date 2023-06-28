import { clearHtml } from "./createHtml.js";
import { renderShows } from "./render.js";
import { createMessage } from "./createMessage.js";

/**
 * Renders and displays a filtered search list
 * @param {*} value The terms to filter by
 * @param {*} parentElement The element to append the HTML of the filtered list
 * @param {*} detailList The list to filter from
 */
export function onSearch(value, parentElement, detailList) {
  const filteredShowsList = filterListOnSearch(detailList, value);

  if (filteredShowsList.length) {
    clearHtml(parentElement);
    renderShows(filteredShowsList, parentElement);
  } else {
    clearHtml(parentElement);
    createMessage(parentElement, "error", "No show found by the search");
  }
}

/**
 * Filters a list on a search
 * @param {*} details The list to filter
 * @param {*} term The terms to filter by
 * @returns A filtered list
 */
function filterListOnSearch(details, term) {
  return details.filter(function (detail) {
    term = term.toLowerCase().trim();

    const valuesToCheck = [detail.name];

    const matchingValues = valuesToCheck.filter(function (value) {
      value = value.toLowerCase().trim();
      return value.includes(term);
    });

    return matchingValues.length;
  });
}
