import { toggleNavigation } from "./components/toggleNavigation.js";
import { clearHtml } from "./components/createHtml.js";
import { createDetailsHtml } from "./components/createHtml.js";
import { createMessage } from "./components/createMessage.js";

const detailsContainer = document.querySelector(".container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://api.tvmaze.com/shows/" + id;

async function getShow() {

    try {
        const response = await fetch(url);
        const show = await response.json();

        document.title = show.name;

        clearHtml(detailsContainer);
        createDetailsHtml(detailsContainer ,show);
    }
    catch(error) {
        console.log(error);
        createMessage(detailsContainer, "error", "There was an error while loading this page, please try again.");
    };
};
getShow();

const hamburgerMenu = document.querySelector("#hamburger");
hamburgerMenu.addEventListener("click", toggleNavigation);