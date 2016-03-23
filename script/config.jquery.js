// GMRUI Config
//

$(document).ready(function () {

  // Mobile Menu
  //
  function mobileMenu() {
    $('.nav-ctrl').click(function(event){
      // Prevent Jump
      event.preventDefault(); 
      //Toggle Class
      $("#sidemenu").toggleClass("visible");  
    });
  }
  mobileMenu();

});