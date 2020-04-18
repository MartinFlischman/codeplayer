function updateOutput() {
  $("iframe").contents().find("html").html("<html><head><style typy='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
  document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
}

$("#html").hover(function() {
  $(this).addClass("highlightedBtn");
}, function() {
  $(this).removeClass("highlightedBtn");
});

$("#css").hover(function() {
  $(this).addClass("highlightedBtn");
}, function() {
  $(this).removeClass("highlightedBtn");
});

$("#javascript").hover(function() {
  $(this).addClass("highlightedBtn");
}, function() {
  $(this).removeClass("highlightedBtn");
});

$("#output").hover(function() {
  $(this).addClass("highlightedBtn");
}, function() {
  $(this).removeClass("highlightedBtn");
});

$(".toggleBtn").click(function() {
  $(this).toggleClass("active");
  $(this).removeClass("highlightedBtn");
  var panelId = $(this).attr("id") + "Panel";
  $("#" + panelId).toggleClass("hidden");
  var numberOfActivePanels = 4 - $(".hidden").length;
  $(".panel").width(($(window).width() / numberOfActivePanels) - 10);
});

$(".panel").height($(window).height() - $("#nav").height() - 15);

$(".panel").width(($(window).width() / 2) - 10);

$("iframe").contents().find("html").html($("#htmlPanel").val());

updateOutput();

$("textarea").on('change keyup paste', function() {
  updateOutput();
});