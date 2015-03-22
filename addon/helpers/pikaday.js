import Ember from 'ember';

var $ = Ember.$;

var openDatepicker = function(element) {
  Ember.deprecate('You are using the old `openDatepicker` method, please upgrade to the new asyncronous test helpers.', false, { url: 'https://github.com/edgycircle/ember-pikaday' });

  $(element).click();

  return PikadayInteractor;
};

var PikadayInteractor = {
  selectorForMonthSelect: '.pika-select-month',
  selectorForYearSelect: '.pika-select-year',
  selectDate: function(date) {
    Ember.deprecate('You are using the old `selectDate` method, please upgrade to the new asyncronous test helpers.', false, { url: 'https://github.com/edgycircle/ember-pikaday' });

    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    $(this.selectorForYearSelect).val(year);
    triggerNativeEvent($(this.selectorForYearSelect)[0], 'change');
    $(this.selectorForMonthSelect).val(month);
    triggerNativeEvent($(this.selectorForMonthSelect)[0], 'change');

    triggerNativeEvent($('td[data-day="' + day + '"] button')[0], 'mousedown');
  },
  selectedDay: function() {
    return $('.pika-single td.is-selected button').html();
  },
  selectedMonth: function() {
    return $(this.selectorForMonthSelect + ' option:selected').val();
  },
  selectedYear: function() {
    return $(this.selectorForYearSelect + ' option:selected').val();
  },
  minimumYear: function() {
    return $(this.selectorForYearSelect).children().first().val();
  },
  maximumYear: function() {
    return $(this.selectorForYearSelect).children().last().val();
  }
};

function triggerNativeEvent(element, eventName) {
  if (element.fireEvent) {
    element.fireEvent('on' + eventName);
  } else {
    var event = document.createEvent('Events');
    event.initEvent(eventName, true, false);
    element.dispatchEvent(event);
  }
}

export { openDatepicker };
