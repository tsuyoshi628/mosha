// ***** .header *****
$('#header__navLink--corporate,#header__navLink--news,#header__navLink--service,#header__navLink--techAndDesign,#header__navLink--CAW')
.hover(function() {
  // headerのheightのtransitionをぽよんにする
  $('#header').css('transition', 'height 450ms cubic-bezier(0.175, 0.885, 0.57, 1.48)');

  // 他のnavDetailをdisplay:noneにする
  const $navDetailActive = $('.navDetail--active');
  $navDetailActive.css('display', 'none');
  $navDetailActive.removeClass('navDetail--active').addClass('navDetail');
  $navDetailActive.find('.navDetail__title,.navDetail__title--long').css({'opacity': '0', 'transform': 'translateY(20px)'});
  $navDetailActive.find('.navDetail__content').css({'opacity': '0', 'transform': 'translateY(20px)'});

  // 対応するnavDetailを取得
  const thisId = `#${$(this).attr('id')}`;
  const navDetailId = thisId.replace(/header__navLink/g, 'navDetail');
  const $navDetail = $(navDetailId);

  // headerの高さを調整する
  switch (navDetailId) {
    case '#navDetail--corporate':
    case '#navDetail--CAW':
      $('#header').css('height', '580px');
      break;
    case '#navDetail--news':
    case '#navDetail--service':
    case '#navDetail--techAndDesign':
      $('#header').css('height', '500px');
      break;
    default:
      break;
  }

  // header__navsDetailをdisplay:blockにする
  $('#header__navsDetail').css('display', 'block');
  $('#contact').fadeIn('fast');
  $('#header__hr').fadeIn('slow');

  // 中身を表示
  $navDetail.css('display', 'block');
  $navDetail.removeClass('navDetail').addClass('navDetail--active');
  $navDetail.find('.navDetail__title,.navDetail__title--long').animate({'opacity': '1'}, 500).css({'transition': 'transform 400ms', 'transform': 'translateY(0)'});
  $navDetail.find('.navDetail__content').delay(300).animate({'opacity': '1'}, 500).css({'transition': 'transform 700ms', 'transform': 'translateY(0)'});

  // 背景を暗くする
  $('#body__overlay').fadeIn();
}, function() {
  // 離れた時は何もしない
});

$('#header').hover(function() {
  // hover時には何もしない
}, function() {
  // headerのheightのtransitionを普通にする
  $('#header').css('transition', 'height 400ms');

  // navDetailをdisplay:noneにする
  const $navDetailActive = $('.navDetail--active');
  $navDetailActive.css('display', 'none');
  $navDetailActive.removeClass('navDetail--active').addClass('navDetail');
  $navDetailActive.find('.navDetail__title,.navDetail__title--long').css({'opacity': '0'});
  $navDetailActive.find('.navDetail__content').css({'opacity': '0'});

  // header__navsDetailをdisplay:noneにする
  $('#header__navsDetail').css('display', 'none');
  $('#contact').fadeOut('100ms');
  $('#header__hr').fadeOut('100ms');

  // headerの高さを調整する
  if ($(window).width() >= 1032) {
    $('#header').animate({'height': '64px'});
  }

  // 背景を明るくする
  $('#body__overlay').fadeOut();
});

// ***** .header height *****
$(window).resize(function() {
  const w = $(window).width();
  const x = 1032;
  if (w <= x) {
    $('#header').css({'height': 'auto'});
  } else {
    $('#header').css({'height': '64px'});
  }
});

// ***** .search *****
// 表示
$('#header__searchLink').click(function() {
  $('#body').css('overflow', 'hidden');
  $('#search').fadeIn();
});
// 非表示
$('#closeBtn--inSearch').click(function() {
  $('#search').fadeOut();
  $('#body').css('overflow', 'auto');
});
// 検索カテゴリボタン
$('.search__category,.search__category--active').click(function() {
  const $previousActive = $('.search__category--active');
  const $nextActive     = $(this);
  $previousActive.removeClass('search__category--active').addClass('search__category');
  $nextActive.removeClass('search__category').addClass('search__category--active');
});

// ***** .topBtn *****
$('#topBtn').click(function () {
   $('body, html').animate({ scrollTop: 0 }, 500);
});

// ***** .careers__contentsSP *****
$('.careers__contentSP').hover(function() {
  $(this).children('.careers__maskSP').removeClass('careers__maskSP').addClass('careers__maskSP--hovered');
  $(this).children('.careers__arrowIconSP').css('transition', 'transform 500ms').css('transform', 'translateX(-500%)');
}, function() {
  $(this).children('.careers__maskSP--hovered').removeClass('careers__maskSP--hovered').addClass('careers__maskSP');
  $(this).children('.careers__arrowIconSP').css('transition', 'transform 500ms').css('transform', 'translateX(0%)');
});
$('.careers__contentSP').on('touchstart', function() {
  $(this).children('.careers__maskSP').removeClass('careers__maskSP').addClass('careers__maskSP--hovered');
  $(this).children('.careers__arrowIconSP').css('transition', 'transform 500ms').css('transform', 'translateX(-500%)');
}).on('touchend', function() {
  $(this).children('.careers__maskSP--hovered').removeClass('careers__maskSP--hovered').addClass('careers__maskSP');
  $(this).children('.careers__arrowIconSP').css('transition', 'transform 500ms').css('transform', 'translateX(0%)');
});

// ***** .relatedCompanies *****
$('.relatedCompanies__info').hover(function() {
  $(this).children('.relatedCompanies__infoImg').removeClass('relatedCompanies__infoImg').addClass('relatedCompanies__infoImg--hovered');
}, function() {
  $(this).children('.relatedCompanies__infoImg--hovered').removeClass('relatedCompanies__infoImg--hovered').addClass('relatedCompanies__infoImg');
});
$('.relatedCompanies__info').on('touchstart', function() {
  $(this).children('.relatedCompanies__infoImg').removeClass('relatedCompanies__infoImg').addClass('relatedCompanies__infoImg--hovered');
}).on('touchend', function() {
  $(this).children('.relatedCompanies__infoImg--hovered').removeClass('relatedCompanies__infoImg--hovered').addClass('relatedCompanies__infoImg');
})

// ***** .news *****
$('.news__btn').hover(function() {
  $(this).find('i').removeClass('arrowIcon--greenMedium').addClass('arrowIcon--Medium');
}, function() {
  $(this).find('i').removeClass('arrowIcon--Medium').addClass('arrowIcon--greenMedium');
});

// ***** スクロールイベント *****
let startPos = 0;
let winScrollTop = 0;
$(window).on('scroll', function() {
  // 現在位置
  winScrollTop = $(this).scrollTop();

  // .header
  if (winScrollTop >= startPos) {
    // down
    if ($('#header__navsDetail').css('display') != 'block') {
      // header__navsDetailがblockの時だけ
      $('#header').css('transition', 'transform 150ms').css('transform', 'translateY(-150%)');
    }
  } else {
    // up
    $('#header').css('transition', 'transform 300ms').css('transform', 'initial');
  }

  // .topBtn
  if (winScrollTop >= startPos) {
    // down
    if (winScrollTop >= 200) {
      $('#topBtn').fadeIn().css('transition', 'transform 300ms').css('transform', 'initial');
    }
  } else {
    // up
    if (winScrollTop <= 200) {
      $('#topBtn').fadeOut().css('transition', 'transform 300ms').css('transform', 'translateY(150%)');
    }
  }

  // 現在位置の更新
  startPos = winScrollTop;
});
