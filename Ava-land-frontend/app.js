////////////////////////range Input ////////////////////////

// .firefox
var isFF = true;
var addRule = (function (style) {
  var sheet = document.head.appendChild(style).sheet;
  return function (selector, css) {
    if (isFF) {
      if (sheet.cssRules.length > 0) {
        sheet.deleteRule(0);
      }

      try {
        sheet.insertRule(selector + "{" + css + "}", 0);
      } catch (ex) {
        isFF = false;
      }
    }
  };
})(document.createElement("style"));

// .chrome styling
$(document).ready(function () {
  $(".range__input").on("input", function () {
    $(this).css(
      "background",
      "linear-gradient(to right, #ffa928 0%, #ffa928 " +
        this.value +
        "%, #fff " +
        this.value +
        "%, white 100%)"
    );
  });
});

//////////////////////////////////////////////////////////////////////
