$(function () {
  $("#visual .txt").addClass("on");

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
  $(".bars").on("click", function () {
    $(".moNav").show();
  });
  $(".xmarks").on("click", function () {
    $(".moNav").hide();
  });

  $(".gnb01 li").on("click", function () {
    i = $(this).index();
    if ($(".minus2").hasClass("on")) {
      $(".minus2").removeClass("on");
      $(".name01").hide();
    } else {
      $(".minus2").removeClass("on");
      $(".minus2").eq(i).addClass("on");
      $(".name01").eq(i).show();
    }
  });

  /*con01*/
  $(".con01_next").on("click", function () {
    $(".con01 ul").css("transform", "translateX(-50%)");
  });
  $(".con01_prev").on("click", function () {
    $(".con01 ul").css("transform", "translateX(0%)");
  });

  /*con02*/
  $(".con02 .see").on("mouseenter", function () {
    $(this).find(".up, .up01").stop().animate(
      {
        left: "0px",
      },
      500
    );
    $(this).find(".down, .down01").stop().animate(
      {
        right: "0px",
      },
      500
    );
  });
  $(".con02 .see").on("mouseleave", function () {
    $(this).find(".up, .up01").stop().animate(
      {
        left: "100%",
      },
      500
    );
    $(this).find(".down, .down01").stop().animate(
      {
        right: "100%",
      },
      500
    );
  });

  /*con02 navi */
  $("#navi li:last-child").on("click", function () {
    $(".con02_wrap").stop().animate({ "margin-left": "-100%" });
  });
  $("#navi li:first-child").on("click", function () {
    $(".con02_wrap").stop().animate({ "margin-left": "0%" });
  });

  $("#navi li").on("click", function () {
    let i = $(this).index();
    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
  });

  /*con03 */
  let total = $(".con03_txt li").length;
  console.log(total);

  let a = 0;
  start01;

  fade();
  start01();

  function start01() {
    stop01 = setInterval(function () {
      if (a == total - 1) {
        a = 0;
      } else {
        a++;
      }
      fade();
    }, 4000);
  }

  $(".con03_arr > div:last-child").on("click", function () {
    clearInterval(stop01);
    if (a == total - 1) {
      a = 0;
    } else {
      a++;
    }
    fade();
    start01();
  });

  $(".con03_arr > div:first-child").on("click", function () {
    clearInterval(stop01);
    if (a == 0) {
      a = toral - 1;
    } else {
      a--;
    }
    fade();
    start01();
  });

  $("#con03_navi li").on("click", function () {
    clearInterval(stop01);
    a = $(this).index();
    fade();
    start01();
  });

  function fade() {
    $(".con03_txt li").fadeOut();
    $(".con03_txt li").eq(a).fadeIn();
    $("#con03_navi li").removeClass("in");
    $("#con03_navi li").eq(a).addClass("in");
  }

  $(".con03_bt").on("mouseenter", function () {
    $(".con03_bt").addClass("on");
  });
  $(".con03_bt").on("mouseleave", function () {
    $(".con03_bt").removeClass("on");
  });

  /*con04*/
  $(".con04 .bt").on("mouseenter", function () {
    $(".bt").addClass("on");
  });
  $(".con04 .bt").on("mouseleave", function () {
    $(".bt").removeClass("on");
  });

  /*con05*/

  $(".con05 li").on("mouseenter", function () {
    $(this).find(".menu_imge").css({ opacity: "0", transform: "scale(0)" });

    $(this).find(".cake_bg, .dessert_bg, .drinks_bg").css({
      opacity: "1",
      transform: "scale(1.2)",
    });
  });

  $(".con05 li").on("mouseleave", function () {
    $(this).find(".menu_imge").css({ opacity: "1", transform: "scale(1)" });
    $(this).find(".cake_bg, .dessert_bg, .drinks_bg").css({
      opacity: "0",
      transform: "scale(0)",
    });
  });

  /*con06*/
  let start;
  let j = 1;
  slide();
  function slide() {
    start = setInterval(function () {
      j++;
      if (j > 3) {
        j = 1;
      }

      $(".con06_bgZip").animate({ "margin-left": "-100%" }, 2000, function () {
        $(".con06_bgZip > li:first-child").appendTo(".con06_bgZip");
        $(".con06_bgZip").css({ "margin-left": "0" });
      });
    }, 2500);
  }

  $(".con06_next").on("click", function () {
    clearInterval(start);
    j++;
    if (j > 3) {
      j = 1;
    }
    $(".con06_bgZip").animate({ "margin-left": "-100%" }, 2000, function () {
      $(".con06_bgZip > li:first-child").appendTo(".con06_bgZip");
      $(".con06_bgZip").css({ "margin-left": "0" });
    });

    slide();
  });

  $(".con06_prev").on("click", function () {
    clearInterval(start);
    j--;
    if (j < 1) {
      j = 3;
    }
    $(".con06_bgZip > li:last-child").prependTo(".con06_bgZip");
    $(".con06_bgZip").css({ "margin-left": "-100%" });
    $(".con06_bgZip").stop().animate({ "margin-left": "0px" });
    $("#con06_navi li").removeClass("on");
    $("#con06_navi li").eq(j).addClass("on");
    slide();
  });

  $("#con06_navi li").on("click", function () {
    clearInterval(start);
    j = $(this).index();
    $(".con06_bgZip")
      .stop()
      .animate({ "margin-left": `-${j * 100}%` });
    $("#con06_navi li").removeClass("in");
    $("#con06_navi li").eq(j).addClass("in");
    slide();
  });

  $(".con06_bt").on("mouseenter", function () {
    $(".bt_bg").stop().animate({ left: "0" }, 200);
    $(".con06_bt a").css({ color: "#fff" });
  });
  $(".con06_bt").on("mouseleave", function () {
    $(".bt_bg").stop().animate({ left: "-100%" });
    $(".con06_bt a").css({ color: "#999" });
  });

  $(window).on("scroll", function () {
    let sc = $(this).scrollTop();
    console.log(sc);

    if (sc >= 30) {
      $("footer > .arr_top").addClass("on");
    } else {
      $("footer > .arr_top").removeClass("on");
    }

    if (sc >= 50) {
      $("header").addClass("in");
    } else {
      $("header").removeClass("in");
    }
  });
});
