// Modal Boxes
//

function gmruiModals(){
  $("body").click(function(event){
    $("body").removeClass("modal-open");
    var container = $(".modal");
    var vidURL = container.find("iframe").attr('data-target');
    if (!container.is(event.target) && container.has(event.target).length === 0){
      container.closest(".modal-wrap").addClass("closed").removeClass("open");
      container.find("iframe").attr('src','');
      container.find("iframe").attr('src',vidURL);
    }
  });

  $(".open-modal").click(function(event){
    event.preventDefault();
    event.stopPropagation();

    // Set Target
    //
    $target = $(this).attr('data-target');

    // Remove Closed Class
    //
    $($target).removeClass("closed");
    $($target).addClass("open");

    // AJAX
    //
    if ($(this).attr("data-ajax") === "true") {
      $($target).find(".modal-content").load(this.href);
    }

    // Body Class
    //
    $("body").addClass("modal-open");

  });

  $(".modal-close").click(function(event){
    event.preventDefault();
    var container =  $(this).closest(".modal");
    var vidURL = container.find("iframe").attr('src');
    $(this).closest(".modal-wrap").addClass("closed").removeClass("open");
    container.find("iframe").attr('src','');
    container.find("iframe").attr('src',vidURL);
    $("body").removeClass("modal-open");
  });
}