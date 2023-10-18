$(document).ready(function() {
  const $tabs = $(".tab-item");
  const $panes = $(".tab-pane");
  const $tabActive = $(".tab-item.active");
  const $line = $(".tabs .line");

  requestIdleCallback(function () {
      $line.css("left", $tabActive.position().left + "px");
      $line.css("width", $tabActive.outerWidth() + "px");
  });

  $tabs.each(function(index) {
      const $tab = $(this);
      const $pane = $panes.eq(index);

      $tab.on("click", function() {
          $(".tab-item.active").removeClass("active");
          $(".tab-pane.active").removeClass("active");

          $line.css("left", $tab.position().left + "px");
          $line.css("width", $tab.outerWidth() + "px");

          $tab.addClass("active");
          $pane.addClass("active");
      });
  });
});