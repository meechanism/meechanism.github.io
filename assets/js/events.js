function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === "complete"
      : document.readyState !== "loading"
  ) {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(function() {
  const allEventEls = document.getElementsByClassName("ga-event");
  for (let i = 0; i < allEventEls.length; i++) {
    const element = allEventEls[i];
    const actionName = element.dataset.gaAction;
    const flavor = element.dataset.flavor;
    element.addEventListener("click", function(e) {
      ga("send", {
        hitType: "event",
        eventCategory: "Link",
        eventAction: actionName,
        eventLabel: flavor
      });
    });
  }
});
