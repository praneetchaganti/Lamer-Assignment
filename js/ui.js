$(document).ready(() => {
  let count = 1;
  window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      $('#no-scroll').css('display', 'none');
      $('#scroll').css('display', 'block');
    } else {
      $('#no-scroll').css('display', 'block');
      $('#scroll').css('display', 'none');
    }
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      $('#back-to-top').css('display', 'inline-block');
    } else {
      $('#back-to-top').css('display', 'none');
    }
  };
  $('.js-move').on('click', () => {
    if (count % 2 === 0) {
      $('.js-notification-content-a').css('opacity', '1');
      $('.js-notification-content-b').css('opacity', '0');
      count += 1;
    } else {
      $('.js-notification-content-a').css('opacity', '0');
      $('.js-notification-content-b').css('opacity', '1');
      count += 1;
    }
  });
  setInterval(() => {
    if (count % 2 === 0) {
      $('.js-notification-content-a').css('opacity', '1');
      $('.js-notification-content-b').css('opacity', '0');
      count += 1;
    } else {
      $('.js-notification-content-a').css('opacity', '0');
      $('.js-notification-content-b').css('opacity', '1');
      count += 1;
    }
  }, 5000);
  $('#CATEGORY').on('change', () => {
    if ($('input#CATEGORY').is(':checked')) {
      $('.js-side-nav-menu-category-list').css('display', 'inline-block');
    } else {
      $('.js-side-nav-menu-category-list').css('display', 'none');
    }
  });
  $('#BENEFIT').on('change', () => {
    if ($('input#BENEFIT').is(':checked')) {
      $('.js-side-nav-menu-benefits-list').css('display', 'inline-block');
    } else {
      $('.js-side-nav-menu-benefits-list').css('display', 'none');
    }
  });
  $('.js-side-nav-toggle-select').on('click', () => {
    $('.js-side-nav-menu').css('display', 'block');
    $('.js-side-nav-buttons').css('display', 'flex');
  });
  $('.js-side-nav-menu-count-button').on('click', () => {
    $('.js-side-nav-menu').css('display', 'none');
    $('.js-side-nav-buttons').css('display', 'none');
  });
  $('.js-side-nav-buttons-apply').on('click', () => {
    $('.js-side-nav-menu').css('display', 'none');
    $('.js-side-nav-buttons').css('display', 'none');
  });
  $('#back-to-top').on('click', () => {
    if (this.hash !== '') {
      const { hash } = this;
      $('html, body').animate({
        scrollTop: $(hash).offset().top,
      }, 800, () => {
        window.location.hash = hash;
      });
    }
  });
});
