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

if (window) {
  window.dataLayer = window.dataLayer || [];

  window.Mee = window.Mee || {};
  window.Mee.ga = function() {
    dataLayer.push(arguments);
  };

  window.Mee.gaButtonClick = function(action, label) {
    window.Mee.ga(action, "button_click", label || action);
  };
}

ready(function() {
  const allEventEls = document.getElementsByClassName("ga-event");
  for (let i = 0; i < allEventEls.length; i++) {
    const element = allEventEls[i];
    const actionName = element.dataset.gaAction;
    const flavor = element.dataset.flavor;
    element.addEventListener("click", function(e) {
      e.preventDefault();
      window.Mee.gaButtonClick(actionName, flavor);
    });
  }
});
