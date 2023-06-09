let typed = new Typed("#element", {
  strings: ["Fady Mohamed.", "a Front-end Developer."],
  typeSpeed: 50,
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  loopCount: Infinity,
});

$(".fixedBarBtn").click(() => {
  if ($(".fixed-bar").css("left") == "0px") {
    $(".fixed-bar").animate({ left: "100%" }, 1000);
  } else {
    $(".fixed-bar").animate({ left: "0px" }, 1000);
  }
});
