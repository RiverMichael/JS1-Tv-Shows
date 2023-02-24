import htmlComponents from "./htmlComponents.js";

export function clearHtml(parentElement) {
    parentElement.innerHTML = "";
};

export function createShowsListHtml(show, parentElement) {
    const listHtml = createShowsListElements(show);
    parentElement.append(listHtml); 
};

function createShowsListElements(show) {
    let showRating = "-";
    if (show.rating.average) {
        showRating = show.rating.average;
    };

    const cardRating = htmlComponents.createCardRating(showRating);
    const cardImage = htmlComponents.createCardImage(`background-image: url(${show.image.medium})`, [cardRating]);
    const cardTitle = htmlComponents.createCardTitle(show.name);
    const cardGenres = htmlComponents.createCardGenres(show.genres);
    const cardDetails = htmlComponents.createCardDetails([cardTitle, cardGenres]);
    const card = htmlComponents.createCardElement([cardImage, cardDetails]);
    const cardLink = htmlComponents.createCardLink([card], `details.html?id=${show.id}`);

    return cardLink;
};

export function createShowDetailsHtml(show, parentElement) {
    const detailsHtml = createShowDetailsElements(show);
    parentElement.append(detailsHtml);
};

function createShowDetailsElements(show) {
    let showStatus = "Still running";
    if (show.ended) {
        showStatus = show.ended;
    };

    let showRating = "Unknown";
    if (show.rating.average) {
        showRating = show.rating.average;
    };

    let showNetwork = "Unknown";
    if (show.network.name) {
        showNetwork = show.network.name;
    };

    const detailsTitle = htmlComponents.createDetailsTitle(show.name);
    const detailsImage = htmlComponents.createDetailsImage(show.image.medium, show.name);
    
    const detailsHeading = htmlComponents.createHeading("Details");

    const detailsRating = htmlComponents.createDetailsLi("Rating: ");
    const detailsRatingSpan = htmlComponents.createListSpan(showRating);
    detailsRating.appendChild(detailsRatingSpan);

    const detailsPremiered = htmlComponents.createDetailsLi("Premiered: ");
    const detailsPremieredSpan = htmlComponents.createListSpan(show.premiered);
    detailsPremiered.appendChild(detailsPremieredSpan);

    const detailsEnded = htmlComponents.createDetailsLi("Ended: ");
    const detailsEndedSpan = htmlComponents.createListSpan(showStatus);
    detailsEnded.appendChild(detailsEndedSpan);

    const detailsLanguage = htmlComponents.createDetailsLi("Language: ");
    const detailsLanguageSpan = htmlComponents.createListSpan(show.language);
    detailsLanguage.appendChild(detailsLanguageSpan);
    
    const detailsRuntime = htmlComponents.createDetailsLi("Average runtime: ");
    const detailsRuntimeSpan = htmlComponents.createListSpan(`${show.averageRuntime} min`);
    detailsRuntime.appendChild(detailsRuntimeSpan);

    const detailsNetwork = htmlComponents.createDetailsLi("Network: ");
    const detailsNetworkSpan = htmlComponents.createListSpan(showNetwork);
    detailsNetwork.appendChild(detailsNetworkSpan);

    const detailsUl = htmlComponents.createDetailsUl([detailsRating, detailsPremiered, detailsEnded, detailsLanguage, detailsRuntime, detailsNetwork]);

    const detailsSpecs = htmlComponents.createDetailsSpecs([detailsHeading, detailsUl]);
   
    const summaryHeading = htmlComponents.createHeading("Summary");

    const unStrippedSummary = show.summary.replaceAll(/<\/?[^>]+(>|$)/gi, "");
    // Ref: https://linuxhint.com/strip-html-tags-from-string-javascript/
    
    const summaryArticle = htmlComponents.createSummaryArticle(unStrippedSummary);
    const summary = htmlComponents.createSummary([summaryHeading, summaryArticle]);

    const detailsInfo = htmlComponents.createDetailsInfo([detailsSpecs, summary]);

    const detailsContent = htmlComponents.createDetailsContent([detailsImage, detailsInfo]);
    const detailsWrapper = htmlComponents.createDetailsWrapper([detailsTitle, detailsContent]);

    return detailsWrapper;
};