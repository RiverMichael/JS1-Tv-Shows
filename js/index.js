import { toggleNavigation } from "./components/toggleNavigation.js";
import { createMessage } from "./components/createMessage.js";
import { renderShows } from "./components/render.js";
import { clearHtml } from "./components/createHtml.js";
import { setSearchListeners } from "./components/setSearchListeners.js";

const resultsContainer = document.querySelector(".results");
const hamburgerMenu = document.querySelector("#hamburger");

hamburgerMenu.addEventListener("click", toggleNavigation);

const url = "https://api.tvmaze.com/shows";

async function getShows() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        clearHtml(resultsContainer);
        renderShows(results, resultsContainer);
        setSearchListeners(resultsContainer, results);
    }
    catch(error) {
        console.log(error);
        createMessage(resultsContainer, "error", "There was an error while loading this page, please try again.");
    };
};
getShows();
