$(document).ready(function() {
  $('.dropdown-toggle').dropdown();

  $('.dropdown-toggle').on('show.bs.dropdown', function () {
    console.log('Dropdown menu is shown');
  });
});
