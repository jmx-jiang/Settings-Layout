const theme = (value) => {
  switch (value) {
    case "Light":
      $("body").css("background-color", "white");
      $("header").css("color", "black");
      $("main").css("background-color", "#bfbfbf");
      $("span").css("color", "black");
      break;
    case "Semi-Dark":
      $("body").css("background-color", "#3f3f3f");
      $("header").css("color", "white");
      $("main").css("background-color", "gray");
      $("span").css("color", "black");
      break;
    case "Dark":
      $("body").css("background-color", "black");
      $("header").css("color", "white");
      $("main").css("background-color", "#2f2f2f");
      $("span").css("color", "white");
  }
};

$(document).ready(() => {
  $("header").click(() => {
    $("main").toggleClass("hide");
  });
});
