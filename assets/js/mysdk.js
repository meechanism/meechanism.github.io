ready(function() {
  // create a new div element
  var newDiv = document.createElement("div");
  // and give it some content
  var newHeader = document.createElement("h3");
  newHeader.innerHTML = "Magikarp is Great";

  var newP = document.createElement("p");
  newP.innerHTML = "He has the best splash attack.";

  var newButton = document.createElement("button");
  newButton.innerHTML = "Learn More";
  newButton.dataset.type = "default";

  newButton.addEventListener("click", function() {
    console.log("Clicked: ", newButton.dataset.type);
    ga("send", {
      hitType: "event",
      eventCategory: "Button",
      eventAction: "click-optimize-magikarp",
      eventLabel: newButton.dataset.type
    });
  });

  newDiv.setAttribute("id", "my-sdk-thing");
  newButton.setAttribute("id", "my-sdk-button");
  newDiv.appendChild(newHeader);
  newDiv.appendChild(newP);
  newDiv.appendChild(newButton);

  // add the newly created element and its content into the DOM
  var pageHeader = document.getElementById("sdk-container");
  if (pageHeader) pageHeader.appendChild(newDiv);
});
