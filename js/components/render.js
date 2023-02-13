import { createListHtml } from "./createHtml.js";

export function renderShows(results, parentElement) {
    results.forEach(shows => {
        createListHtml(parentElement, shows);
    });
};
