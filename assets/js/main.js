$(document).ready(function () {
  // header
  function setMenuDropdownTop() {
    $("#menuDropdown").css("top", `${$("#navbarHeader").outerHeight()}px`);
  }

  $(window).resize(function () {
    setMenuDropdownTop();
  });

  setMenuDropdownTop();
});
