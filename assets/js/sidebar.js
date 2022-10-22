$(window).on("load", () => {
  // add space to top for sidebar.html
  $("#expandSidebarBtn").css(
    "top",
    `${$("#navbarHeader").outerHeight() + 12}px`
  );

  // expand sidebar
  $("#expandSidebarBtn").click(() => {
    const sidebarContainer = $("#sidebarContainer");
    const expandSidebarBtn = $("#expandSidebarBtn");
    const activeClass = "active";
    if (!sidebarContainer.hasClass(activeClass)) {
      expandSidebarBtn.addClass(activeClass);
      sidebarContainer.addClass(activeClass);
    } else {
      expandSidebarBtn.removeClass(activeClass);
      sidebarContainer.removeClass(activeClass);
    }
  });
});
