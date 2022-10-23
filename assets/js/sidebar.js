$(window).on("load", () => {
  const expandSidebarBtn = $("#expandSidebarBtn");
  const sidebarContainer = $("#sidebarContainer");
  const sidebarContainerOffsetTop = 108;

  // add space to top for expand sidebar btn
  expandSidebarBtn.css("top", `${$("#navbarHeader").outerHeight() + 12}px`);

  // add space to top for sidebar
  const setSidebarTop = () => {
    if ($(window).innerWidth() >= 992) {
      sidebarContainer.css(
        "top",
        `${
          $("#blogTitleContainer").outerHeight() + sidebarContainerOffsetTop
        }px`
      );
    } else {
      sidebarContainer.css("top", `${sidebarContainerOffsetTop}px`);
    }
  };

  $(window).resize(() => {
    setSidebarTop();
  });

  setSidebarTop();

  $(window).scroll(() => {
    if ($(this).scrollTop() > 0) {
      sidebarContainer.css("top", `${sidebarContainerOffsetTop}px`);
    } else {
      setSidebarTop();
    }
  });

  // expand sidebar
  expandSidebarBtn.click(() => {
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
