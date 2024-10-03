$(function () {
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(_href).offset().top + "px",
    });
    return false;
  });
});
(function (m, e, t, r, i, k, a) {
  m[i] =
    m[i] ||
    function () {
      (m[i].a = m[i].a || []).push(arguments);
    };
  m[i].l = 1 * new Date();
  (k = e.createElement(t)),
    (a = e.getElementsByTagName(t)[0]),
    (k.async = 1),
    (k.src = r),
    a.parentNode.insertBefore(k, a);
})(window, document, "script", "../../../https@mc.yandex.ru/metrika/tag.js", "ym");

ym(87549409, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
});
$(document).ready(function () {

  $('.feedback').click(function () {
      $('.popup-window').show();
  });
  $('.close-popup').click(function () {
      $('.popup-window').hide();
  });

});
$(function () {
  var nowDate = new Date();
  var countDownDiff = Math.ceil(
    24 * 60 * 60 -
      (nowDate.getHours() * 60 * 60 +
        nowDate.getMinutes() * 60 +
        nowDate.getSeconds())
  );
  var endDate = new Date(nowDate.getTime() + countDownDiff * 1000);
  setInterval(function () {
    var diffDate = new Date(endDate.getTime() - Date.now()),
      h =
        diffDate.getHours() > 9
          ? diffDate.getHours()
          : "0" + diffDate.getHours(),
      m =
        diffDate.getMinutes() > 9
          ? diffDate.getMinutes()
          : "0" + diffDate.getMinutes(),
      s =
        diffDate.getSeconds() > 9
          ? diffDate.getSeconds()
          : "0" + diffDate.getSeconds();
    $(".hoursSH").html(h);
    $(".minutesSH").html(m);
    $(".secondsSH").html(s);
  }, 1000);
});
