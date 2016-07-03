'use strict';

const API_ROOT = "http://yugiohprices.com/api";

export function formatCardNameForAPI(cardname) {
  var transformedCardName = cardname.trim().split('-').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('-');

  transformedCardName = transformedCardName.trim().split(' ').map(function(word) {
    if (word.indexOf('-') > 0) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
  return transformedCardName;
}

export function formatCardNameForImageLookup(cardname) {
  var transformedCardName = cardname.trim().split('-').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('_');

  transformedCardName = transformedCardName.trim().split(' ').map(function(word) {
    if (word.indexOf('_') > 0) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('_');

  return transformedCardName;
}

export function urlForQueryAndPage(value) {
  var transformedCardName = formatCardNameForAPI(value);
  return API_ROOT + '/card_data/' + transformedCardName;
}

export function priceUrlForQueryAndPage(value) {
  var querystring = encodeURIComponent(value);
  if ((value.length === 10) && (value[4] === '-')) {
    return API_ROOT + '/price_for_print_tag/' + value;
  } else {
    var transformedCardName = formatCardNameForAPI(value);
    return API_ROOT + '/get_card_prices/' + transformedCardName;
  }
};
