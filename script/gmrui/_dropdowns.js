// Dropdowns
//

function gmruiDropdowns(){
  $("li.dropdown a").click(function(event){
    event.preventDefault();
    event.stopPropagation();
    if ($("li.dropdown").hasClass("open")) {
      $("li.dropdown").removeClass("open");
    }
    $(this).closest("li.dropdown").toggleClass("open");
  });

  $("body").click(function(event){
    var container = $("li.dropdown");
    if (!container.is(event.target) && container.has(event.target).length === 0){
      container.removeClass("open");
    }
  });
}