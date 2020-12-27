$(document).ready(() => {
  let products;
  let sortProductPrice;
  function setRating(rating) {
    let ratingImg = '';
    for (let i = 1; i <= 5; i += 1) {
      if (i <= rating) {
        ratingImg += '<img src="rating.png">';
      } else {
        ratingImg += '<img src="rating.png" class="rating--Star">';
      }
    }
    return ratingImg;
  }
  function setProduct(product) {
    // eslint-disable-next-line no-undef
    const output = Mustache.render(`<div class="main__grid__item">
    <img src="{{filename}}" alt="Product" class="main__grid__item__img main__grid__item__img--1">
    <img src="{{filename-back}}" alt="Product" class="main__grid__item__img main__grid__item__img--2">
    <h2 class="main__grid__item__name">{{title}}</h2><p class="main__grid__item__description">{{description}}</p>
    <div class="main__grid__item__price">
    <span>from </span> $ {{price}}</div><div class="main__grid__item__rating" aria-label="Rating of this item is 3 out of 5">
    ${setRating(product.rating)} 
   </div>
   <button class="main__grid__item__quick-shop">QUICK SHOP</button>
   <a href="#" class="main__grid__item__link">ADD TO WISHLIST</a>
 </div>`, product);
    return output;
  }
  function setProducts(filteredProducts) {
    let outputs = '';
    for (let i = 0; i < filteredProducts.length; i += 1) {
      outputs += setProduct(filteredProducts[i]);
    }
    $('.js-side-nav-menu-count-text').html(`${filteredProducts.length} Items`);

    $('.js-main-grid').html(outputs);
  }
  function filterProducts() {
    let filteredProducts = [];
    for (let i = 0; i < products.length; i += 1) {
      if (
        !$('input#MOISTURIZERS').is(':checked')
        && !$('input#EYETREATMENTS').is(':checked')
        && !$('input#SERUMS').is(':checked')
        && !$('input#WATERYLOTIONS').is(':checked')
        && !$('input#CLEANSERSANDTONERS').is(':checked')
        && !$('input#SPECIALISTS').is(':checked')
        && !$('input#COLOR').is(':checked')
        && !$('input#ANTIINFLAMMATION').is(':checked')
        && !$('input#UNEVENSKINTONE').is(':checked')
        && !$('input#LINES').is(':checked')
        && !$('input#EARLYSIGNSOFAGING').is(':checked')
        && !$('input#ANTIOXIDANTPROTECTION').is(':checked')
        && !$('input#DARKCIRCLES').is(':checked')
        && !$('input#CLEANSING').is(':checked')
        && !$('input#COLORCOVERAGE').is(':checked')
      ) {
        filteredProducts = products;
      } else if ($('input#MOISTURIZERS').is(':checked') && products[i].type.toUpperCase() === 'MOISTURIZERS') {
        filteredProducts.push(products[i]);
      } else if ($('input#EYETREATMENTS').is(':checked') && products[i].type.toUpperCase() === 'EYE TREATMENTS') {
        filteredProducts.push(products[i]);
      } else if ($('input#SERUMS').is(':checked') && products[i].type.toUpperCase() === 'SERUMS') {
        filteredProducts.push(products[i]);
      } else if ($('input#WATERYLOTIONS').is(':checked') && products[i].type.toUpperCase() === 'WATERY LOTIONS') {
        filteredProducts.push(products[i]);
      } else if ($('input#CLEANSERSANDTONERS').is(':checked') && products[i].type.toUpperCase() === 'CLEANSERS AND TONERS') {
        filteredProducts.push(products[i]);
      } else if ($('input#SPECIALISTS').is(':checked') && products[i].type.toUpperCase() === 'SPECIALISTS') {
        filteredProducts.push(products[i]);
      } else if ($('input#COLOR').is(':checked') && products[i].type.toUpperCase() === 'COLOR') {
        filteredProducts.push(products[i]);
      } else if ($('input#ANTIINFLAMMATION').is(':checked') && products[i].type.toUpperCase() === 'ANTI-INFLAMMATION / SOOTHING') {
        filteredProducts.push(products[i]);
      } else if ($('input#UNEVENSKINTONE').is(':checked') && products[i].type.toUpperCase() === 'UNEVEN SKINTONE') {
        filteredProducts.push(products[i]);
      } else if ($('input#LINES').is(':checked') && products[i].type.toUpperCase() === 'LINES / WRINKLES') {
        filteredProducts.push(products[i]);
      } else if ($('input#EARLYSIGNSOFAGING').is(':checked') && products[i].type.toUpperCase() === 'EARLY SIGNS OF AGING') {
        filteredProducts.push(products[i]);
      } else if ($('input#ANTIOXIDANTPROTECTION').is(':checked') && products[i].type.toUpperCase() === 'ANTIOXIDANT PROTECTION') {
        filteredProducts.push(products[i]);
      } else if ($('input#DARKCIRCLES').is(':checked') && products[i].type.toUpperCase() === 'DARK CIRCLES') {
        filteredProducts.push(products[i]);
      } else if ($('input#CLEANSING').is(':checked') && products[i].type.toUpperCase() === 'CLEANSING / TONING') {
        filteredProducts.push(products[i]);
      } else if ($('input#COLORCOVERAGE').is(':checked') && products[i].type.toUpperCase() === 'COLOR COVERAGE') {
        filteredProducts.push(products[i]);
      }
    }
    setProducts(filteredProducts);
  }
  function sortJsonField() {
    let field;
    if ($('#sort__select :selected').text() === 'PRICE (LOW TO HIGH)') {
      field = 'price';
    } else if ($('#sort__select :selected').text() === 'PRICE (HIGH TO LOW)') {
      field = 'price';
    } else {
      field = 'rating';
    }
    function sortJson(a, b) {
      let output = '';
      if (field === 'rating') {
        output = (a.rating > b.rating ? 1 : -1);
      } else if (field === 'price') {
        output = (a.price > b.price ? 1 : -1);
      } else {
        output = (a.name > b.name ? 1 : -1);
      }
      return output;
    }

    // No need to assign this to a new array.
    sortProductPrice = products;
    sortProductPrice.sort(sortJson);
    if (!($('#sort__select :selected').text() === 'PRICE (LOW TO HIGH)')) {
      sortProductPrice.reverse();
    }
    filterProducts(sortProductPrice);
  }
  $.getJSON('products.json', (data) => {
    products = data;
    sortJsonField();
  }).fail(() => {
  });

  $('#MOISTURIZERS').on('change', () => {
    sortJsonField();
  });
  $('#EYETREATMENTS').on('change', () => {
    sortJsonField();
  });
  $('#SERUMS').on('change', () => {
    sortJsonField();
  });
  $('#WATERYLOTIONS').on('change', () => {
    sortJsonField();
  });
  $('#CLEANSERSANDTONERS').on('change', () => {
    sortJsonField();
  });
  $('#SPECIALISTS').on('change', () => {
    sortJsonField();
  });
  $('#COLOR').on('change', () => {
    sortJsonField();
  });
  $('#ANTIINFLAMMATION').on('change', () => {
    sortJsonField();
  });
  $('#UNEVENSKINTONE').on('change', () => {
    sortJsonField();
  });
  $('#LINES').on('change', () => {
    sortJsonField();
  });
  $('#EARLYSIGNSOFAGING').on('change', () => {
    sortJsonField();
  });
  $('#ANTIOXIDANTPROTECTION').on('change', () => {
    sortJsonField();
  });
  $('#DARKCIRCLES').on('change', () => {
    sortJsonField();
  });
  $('#CLEANSING').on('change', () => {
    sortJsonField();
  });
  $('#COLORCOVERAGE').on('change', () => {
    sortJsonField();
  });
  $('#sort__select').on('change', () => {
    sortJsonField();
  });
  $('.js-side-nav-buttons-clearall').on('click', () => {
    $('*').prop('checked', false);
    sortJsonField();
  });
});
