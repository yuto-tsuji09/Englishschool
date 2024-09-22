// 穴埋め形式です。空いている箇所を埋めて実装してください

$(function () {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".js-hamburger").on("click", function () {
    $(".js-header").toggleClass("open");
  });
  // メニューのリンクをクリックした時
  $(".nav-list__item a").on("click", function () {
    $(".js-header").toggleClass("open");
  });

  /*=================================================
  Inview（画面に表示されたタイミングで処理を実行）
  ===================================================*/
  $(window).scroll(function () {
    $(".reason-left").each(function () {
      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("animation-left");
      }
    });
  });
  // これを複数使う

  $(window).scroll(function () {
    $(".reason-right").each(function () {
      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("animation-right");
      }
    });
  });

  $(window).scroll(function () {
    $(".voice-inner").each(function () {
      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        $(this).addClass("animation-people");
      }
    });
  });
});
