const responseURL = document.querySelector(".js-card-link");

function createCard(event) {
  event.preventDefault();
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(dataValue),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => getURL(result))
    .catch((error) => console.error("Error:", error));
}
function getURL(result) {
  if (result.success) {
    responseURL.innerHTML = `<a target="_blank" href="${result.cardURL}">${result.cardURL}</a>`;
  } else {
    responseURL.innerHTML = `ERROR: ${result.error}`;
  }
}

btnCreated.addEventListener("click", createCard);
