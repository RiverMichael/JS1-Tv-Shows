import { clearHtml } from "./components/createHtml.js";
import { renderShows } from "./components/render.js";
import { setSearchListeners } from "./components/setSearchListeners.js";
import { createMessage } from "./components/createMessage.js";

const resultsContainer = document.querySelector(".results");

const url = "https://api.tvmaze.com/shows";

/**
 * Fetches all TV shows and renders the HTML
 */
async function getShows() {
  try {
    const response = await fetch(url);
    const shows = await response.json();

    clearHtml(resultsContainer);
    renderShows(shows, resultsContainer);
    setSearchListeners(resultsContainer, shows);
  } catch (error) {
    console.log(error);
    createMessage(resultsContainer, "error", "There was an error while loading this page, please try again.");
  }
}
getShows();
