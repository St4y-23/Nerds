$(function () {

  $(".slider__wrapper").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  //  Сетка
  $('.grid-adaptive').on('click', function () {
    $(".grid-adaptive").addClass('active');
    $('.grid-fix').removeClass('active');
    $('.grid-rubber').removeClass('active');
  });
  $('.grid-fix').on('click', function () {
    $(".grid-fix").addClass('active');
    $('.grid-adaptive').removeClass('active');
    $('.grid-rubber').removeClass('active');
  });
  $('.grid-rubber').on('click', function () {
    $(".grid-rubber").addClass('active');
    $('.grid-fix').removeClass('active');
    $('.grid-adaptive').removeClass('active');
  });

  // Особенности
  $('.icon-check-square-o').on('click', function () {
    $(this).toggleClass('icon-square-o');
  });

  // Сортировка
  $('.sort-price').on('click', function () {
    $(".sort-price").addClass('active');
    $('.sort-type').removeClass('active');
    $('.sort-name').removeClass('active');
  });
  $('.sort-type').on('click', function () {
    $(".sort-type").addClass('active');
    $('.sort-price').removeClass('active');
    $('.sort-name').removeClass('active');
  });
  $('.sort-name').on('click', function () {
    $(".sort-name").addClass('active');
    $('.sort-type').removeClass('active');
    $('.sort-price').removeClass('active');
  });

  // Сортировка стрелками
  $('.icon-caret-down').on('click', function () {
    $(".icon-caret-down").addClass('active');
    $('.icon-caret-up').removeClass('active');
  });
  $('.icon-caret-up').on('click', function () {
    $(".icon-caret-up").addClass('active');
    $('.icon-caret-down').removeClass('active');
  });


  // Ценовой слайдер
  $(".polzunok-5").slider({
    min: 0,
    max: 15000,
    values: [0, 10000],
    range: true,
    animate: "fast",
    slide: function (event, ui) {
      $(".polzunok-input-5-left").val(ui.values[0]);
      $(".polzunok-input-5-right").val(ui.values[1]);
    }
  });
  $(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
  $(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
  $(document).focusout(function () {
    var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),
      opt_left = $(".polzunok-5").slider("option", "min"),
      where_right = $(".polzunok-5").slider("values", 1),
      input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),
      opt_right = $(".polzunok-5").slider("option", "max"),
      where_left = $(".polzunok-5").slider("values", 0);
    if (input_left > where_right) {
      input_left = where_right;
    }
    if (input_left < opt_left) {
      input_left = opt_left;
    }
    if (input_left == "") {
      input_left = 0;
    }
    if (input_right < where_left) {
      input_right = where_left;
    }
    if (input_right > opt_right) {
      input_right = opt_right;
    }
    if (input_right == "") {
      input_right = 0;
    }
    $(".polzunok-input-5-left").val(input_left);
    $(".polzunok-input-5-right").val(input_right);
    $(".polzunok-5").slider("values", [input_left, input_right]);
  });

});