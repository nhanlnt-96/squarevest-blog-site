$(window).on("load", () => {
  // add space to top for sidebar.html
  $("#expandSidebarBtn").css(
    "top",
    `${$("#navbarHeader").outerHeight() + 12}px`
  );

  // expand sidebar
  $("#expandSidebarBtn").click(() => {
    const sidebarContainer = $("#sidebarContainer");
    const activeClass = "active";
    if (!sidebarContainer.hasClass(activeClass)) {
      sidebarContainer.addClass(activeClass);
    } else {
      sidebarContainer.removeClass(activeClass);
    }
  });
});
