export function createListHtml(parentElement, show) {
    let showRating = "-";
    if (show.rating.average) {
        showRating = show.rating.average;
    };

    parentElement.innerHTML += `<a class="card-link" href="details.html?id=${show.id}">
                                        <div class="card flex">
                                            <div class="card-image" style="background-image: url(${show.image.medium})">
                                                <div class="circle">${showRating}</div>
                                            </div>
                                            <div class=" card-details flex">
                                                <h2>${show.name}</h2>
                                                <p>${show.genres}</p>
                                            </div>
                                        </div>
                                    </a>`;
};

export function createDetailsHtml(parentElement, show) {
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

    parentElement.innerHTML = `<h1>${show.name}</h1>
                                <div class="details flex">
                                    <img src="${show.image.medium}" alt="${show.name}">
                                    <div class="details__wrapper flex">
                                        <div class="details-info flex">
                                            <h2>Details</h2>
                                            <div class="details-info__content flex">
                                                <p>Rating: ${showRating}</p>
                                                <p>Premiered: ${show.premiered}</p>
                                                <p>Ended: ${showStatus}</p>
                                                <p>Language: ${show.language}</p>
                                                <p>Average runtime: ${show.averageRuntime} min</p>
                                                <p>Network: ${showNetwork}</p>
                                            </div>
                                        </div>
                                        <div class="summary flex">
                                            <h2>Summary</h2>
                                            <article class="summary__content">${show.summary}</article>
                                        </div>
                                    </div>
                                </div>`;
};

export function clearHtml(parentElement) {
    parentElement.innerHTML = "";
};