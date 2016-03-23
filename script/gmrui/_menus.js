// Menus
//

function gmruiMenus(){
  $("[data-toggle=dropdown]").click(function(event){
    event.preventDefault();
    event.stopPropagation();
    // If Dropdown Already Open
    //
    if ($(".btn-group").hasClass("open")){
      $(".btn-group").removeClass("open");
    }
    // Open Dropdown
    //
    var menu = $(this).closest(".btn-group");
    menu.toggleClass("open");
  });
  
  $(".btn-group label").click(function(event){
    event.preventDefault();
    var dropdownToggle = $(this).closest(".btn-group").children(".dropdown-toggle");
    // Remove Flag from DOM
    //
    dropdownToggle.children(".gmrui-menu-img").remove();
    // Get Flag & Label Name
    //
    var flagsrc  = $(this).data("menu-img-src");
    var flagname = $(this).data("menu-name");
    // Replace Existing Flag & Names
    //
    if(flagsrc && flagname !== undefined){
      dropdownToggle.html(flagname);
      dropdownToggle.prepend('<img class="gmrui-menu-img" src="' + flagsrc + '">');
    } else if (flagname !== undefined) {
      dropdownToggle.html(flagname);
    }
  });
  
  // Close Menu
  //
  $("body").click(function(event){
    var container = $(".btn-group");
    if (!container.is(event.target) && container.has(event.target).length === 0){
      container.removeClass("open");
    }
  });
}