// Create HTML elements for index page
function createCardLink(children, linkUrl) {
  return createHtmlElements("a", ["card-link"], children, undefined, undefined, undefined, undefined, linkUrl);
}

function createCardElement(children) {
  return createHtmlElements("div", ["card", "flex"], children);
}

function createCardImage(backgroundImage, children) {
  return createHtmlElements("div", ["card-image"], children, undefined, backgroundImage);
}

function createCardRating(titleText) {
  return createHtmlElements("div", ["circle"], undefined, titleText);
}

function createCardDetails(children) {
  return createHtmlElements("div", ["card-details", "flex"], children);
}

function createCardTitle(titleText) {
  return createHtmlElements("h2", ["card-title"], undefined, titleText);
}

function createCardGenres(cardText) {
  return createHtmlElements("p", ["card-genres"], undefined, cardText);
}

// Create HTML elements for details page
function createDetailsWrapper(children) {
  return createHtmlElements("div", ["details__wrapper", "container", "flex"], children);
}

function createDetailsTitle(titleText) {
  return createHtmlElements("h1", undefined, undefined, titleText);
}

function createDetailsContent(children) {
  return createHtmlElements("div", ["details__content", "flex"], children);
}

function createDetailsImage(image, altText) {
  return createHtmlElements("img", undefined, undefined, undefined, undefined, image, altText);
}

function createDetailsInfo(children) {
  return createHtmlElements("div", ["details-info", "flex"], children);
}

function createDetailsSpecs(children) {
  return createHtmlElements("div", ["details-specs", "flex"], children);
}

function createHeading(headingText) {
  return createHtmlElements("h2", undefined, undefined, headingText);
}

function createDetailsUl(children) {
  return createHtmlElements("ul", ["details-specs__list", "flex"], children);
}

function createDetailsLi(listText) {
  return createHtmlElements("li", undefined, undefined, listText);
}

function createListSpan(spanText) {
  return createHtmlElements("span", undefined, undefined, spanText);
}

function createSummary(children) {
  return createHtmlElements("div", ["details-summary", "flex"], children);
}

function createSummaryArticle(articleText) {
  return createHtmlElements("article", ["details-summary__content"], undefined, articleText);
}

// Create Html Elements
function createHtmlElements(tagname, classes, children, text, backgroundImage, image, altText, link) {
  const element = document.createElement(tagname);

  if (Array.isArray(classes) && classes.length) {
    element.classList.add(...classes);
  }
  if (Array.isArray(children) && children.length) {
    element.append(...children);
  }
  if (text) {
    element.innerText = text;
  }
  if (backgroundImage) {
    element.style = backgroundImage;
  }
  if (image) {
    element.src = image;
  }
  if (altText) {
    element.alt = altText;
  }
  if (link && tagname === "a") {
    element.href = link;
  }

  return element;
}

export default { createCardLink, createCardElement, createCardImage, createCardRating, createCardDetails, createCardTitle, createCardGenres, createDetailsWrapper, createDetailsTitle, createDetailsContent, createDetailsImage, createDetailsInfo, createDetailsSpecs, createHeading, createDetailsUl, createDetailsLi, createListSpan, createSummary, createSummaryArticle };
