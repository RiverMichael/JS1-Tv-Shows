/**
 * Creates a message container and displays a message
 * @param {*} parentElement The HTML element to append the message  to
 * @param {string} messageType The CSS class to give the message
 * @param {string} messageText The actuall text message
 * @returns Displays an error message
 * @example
 * const container = document.querySelector(".container");
 * createMessage(container, "error", "There was a problem loading this show")
 */
export function createMessage(parentElement, messageType, messageText) {
  const message = document.createElement("div");
  message.classList.add(messageType);
  message.innerText = messageText;

  return parentElement.append(message);
}
