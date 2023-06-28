import { createShowsListHtml } from "./createHtml.js";

/**
 * Renders the shows and appends the HTML to an element
 * @param {*} shows The shows to render
 * @param {*} parentElement The element to append the HTML to
 */
export function renderShows(shows, parentElement) {
  shows.forEach((show) => {
    createShowsListHtml(show, parentElement);
  });
}
