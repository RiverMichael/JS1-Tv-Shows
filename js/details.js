import { clearHtml, createShowDetailsHtml } from "./components/createHtml.js";
import { createMessage } from "./components/createMessage.js";

const detailsContainer = document.querySelector(".details");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://api.tvmaze.com/shows/" + id;

/**
 * Fetches a specific TV show and renders the HTML for that show
 */
async function getShow() {
  try {
    const response = await fetch(url);
    const show = await response.json();

    document.title = show.name;

    clearHtml(detailsContainer);
    createShowDetailsHtml(show, detailsContainer);
  } catch (error) {
    console.log(error);
    createMessage(detailsContainer, "error", "There was an error while loading this page, please try again.");
  }
}
getShow();
