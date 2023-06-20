import { createShowsListHtml } from "./createHtml.js";

export function renderShows(results, parentElement) {
  results.forEach((shows) => {
    createShowsListHtml(shows, parentElement);
  });
}
