$(function(){

  $(".slider__wrapper").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

//  Сетка
  $('.grid-adaptive').on('click', function(){
    $(".grid-adaptive").addClass('active');
    $('.grid-fix').removeClass('active');
    $('.grid-rubber').removeClass('active');
  });
  $('.grid-fix').on('click', function(){
    $(".grid-fix").addClass('active');
    $('.grid-adaptive').removeClass('active');
    $('.grid-rubber').removeClass('active');
  });
  $('.grid-rubber').on('click', function(){
    $(".grid-rubber").addClass('active');
    $('.grid-fix').removeClass('active');
    $('.grid-adaptive').removeClass('active');
  });

// Особенности
  $('.icon-check-square-o').on('click', function(){
    $(this).toggleClass('icon-square-o');
  });

// Сортировка
  $('.sort-price').on('click', function(){
    $(".sort-price").addClass('active');
    $('.sort-type').removeClass('active');
    $('.sort-name').removeClass('active');
  });
  $('.sort-type').on('click', function(){
    $(".sort-type").addClass('active');
    $('.sort-price').removeClass('active');
    $('.sort-name').removeClass('active');
  });
  $('.sort-name').on('click', function(){
    $(".sort-name").addClass('active');
    $('.sort-type').removeClass('active');
    $('.sort-price').removeClass('active');
  });
  
  // Сортировка стрелками
  $('.icon-caret-down').on('click', function(){
    $(".icon-caret-down").addClass('active');
    $('.icon-caret-up').removeClass('active');
  });
  $('.icon-caret-up').on('click', function(){
    $(".icon-caret-up").addClass('active');
    $('.icon-caret-down').removeClass('active');
  });

  
});