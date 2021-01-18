(function ($) {
  var JAMLContainerVideos = $(".jaml-container-videos");

  var JAMLModalVideos = $("#JAMLModalVideos");

  var JAMLPlayVideo = JAMLContainerVideos.find(".jaml-play-video");

  JAMLPlayVideo.click(function () {
    var JAMLValueVideo = $(this).parents("div").siblings(".jaml-container-video-url").val();
    var JAMLTitleVideo = $(this).parents("div").siblings("strong").text();
    JAMLModalVideos.find(".modal-title").text(JAMLTitleVideo);
    JAMLModalVideos.find("iframe").attr("src", "https://www.youtube.com/embed/" + JAMLValueVideo + "?autoplay=0&modestbranding=1&showinfo=1");
    $("#JAMLModalVideos").modal("show");
    $(".ytp-chrome-top-buttons").hide();
  });

  JAMLModalVideos.find("button").click(function () {
    JAMLModalVideos.find("iframe").attr("src", "");
    $("#JAMLModalVideos").modal("hide");
  });

  $(".jaml-input-video-search").keyup(function () {
    var filter = $(this).val();
    $(".jaml-video-list > div").each(function () {
      if ($(this).text().search(new RegExp(filter, "i")) < 0) {
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  });
})(jQuery);
