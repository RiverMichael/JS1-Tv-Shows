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
                                            <ul class="details-list flex">
                                                <li><strong>Rating:</strong> ${showRating}</li>
                                                <li><strong>Premiered:</strong> ${show.premiered}</li>
                                                <li><strong>Ended:</strong> ${showStatus}</li>
                                                <li><strong>Language:</strong> ${show.language}</li>
                                                <li><strong>Average runtime:</strong> ${show.averageRuntime} min</li>
                                                <li><strong>Network:</strong> ${showNetwork}</li>
                                            </ul>
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