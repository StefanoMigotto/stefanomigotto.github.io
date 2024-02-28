
$(document).ready(function () {
    Filter('all');
});

function Filter(filter) {

  $(".buttonAll").removeClass("activeFilter");
  $(".buttonUi").removeClass("activeFilter");
  $(".buttonPhp").removeClass("activeFilter");
  $(".buttonNode").removeClass("activeFilter");


  if (filter == "all") {
    $(".buttonAll").addClass("activeFilter");
  }

  if (filter == "ui") {
    $(".buttonUi").addClass("activeFilter");
  }

  if (filter == "php") {
    $(".buttonPhp").addClass("activeFilter");
  }

  if (filter == "node") {
    $(".buttonNode").addClass("activeFilter");
  }

  switch (filter) {
    case "all":
      $(".all").removeClass("disabled");
      $(".all").addClass("activeFilter");
      $(".php").removeClass("disabled");
      $(".node").removeClass("disabled");
      $(".ui").removeClass("disabled");
      break;
    case "ui":
      $(".ui").removeClass("disabled");
      $(".ui").addClass("activeFilter");
      $(".php").addClass("disabled");
      $(".node").addClass("disabled");
      $(".all").addClass("disabled");
      break;
    case "php":
      $(".php").removeClass("disabled");
      $(".php").addClass("activeFilter");
      $(".ui").addClass("disabled");
      $(".node").addClass("disabled");
      $(".all").addClass("disabled");
      break;
    case "node":
      $(".node").removeClass("disabled");
      $(".node").addClass("activeFilter");
      $(".php").addClass("disabled");
      $(".ui").addClass("disabled");
      $(".all").addClass("disabled");
      break;
  }
}
