import { renderShows } from "./render.js";
import { clearHtml } from "./createHtml.js";
import { createMessage } from "./createMessage.js";

export function onSearch(value, parentElement, detailList) {

    const filteredShowsList = filterListOnSearch(detailList, value);

    if (filteredShowsList.length) {
        clearHtml(parentElement)
        renderShows(filteredShowsList, parentElement);
    } else {
        clearHtml(parentElement);
        createMessage(parentElement, "error", "No show found by the search");
    };
};


function filterListOnSearch(details, term) {
    return details.filter(function(detail) {
        term = term.toLowerCase().trim();

        const valuesToCheck = [detail.name];

        const matchingValues = valuesToCheck.filter(function(value) {
            value = value.toLowerCase().trim();
            return value.includes(term);
        });

        return matchingValues.length;
    });
};