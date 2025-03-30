$(function () {
  /*header pc버전 */
  $(".gnb li").on("mouseenter", function () {
    $(this).children(".name").show();
  });
  $(".gnb li").on("mouseleave", function () {
    $(this).children(".name").hide();
  });
  $(".name li").on("mouseenter", function () {
    $(this).parents(".gnb li").css({ "background-color": "#313a6b" });
  });
  $(".name li").on("mouseleave", function () {
    $(this).parents(".gnb li").css({ "background-color": "transparent" });
  });

  $(".bar").on("click", function () {
    $("#modalBox").addClass("on");
  });
  $(".close").on("click", function () {
    $("#modalBox").removeClass("on");
  });

  /* header 모바일 버전 */
  $(".gnb01 li").on("click", function () {
    i = $(this).index();
    console.log(i);
    $(".minus2").removeClass("on");
    $(".minus2").eq(i).addClass("on");
    $(".name01").hide();
    $(".name01").eq(i).show();
  });

  $(".bars").on("click", function () {
    $(".moNav").fadeIn();
    $("#modalBox").addClass("on");
  });
  $(".xmarks").on("click", function () {
    $(".moNav").fadeOut();
    $("#modalBox").removeClass("on");
  });

});
