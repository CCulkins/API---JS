// var alarmClock = require('./../js/alarmClock.js').alarmClock;
var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $('#submitButton').click(function() {
    var color = $('#colorInput').val();
    var location = $('#locationInput').val();
    $('#colorInput').val("");
    $('#locationInput').val("");
    $.get('https://bikeindex.org/api/v2/bikes_search/count?page=1&colors=' + color + '&proximity=' + location + '&proximity_square=100&access_token=' + apiKey).then(function(response) {
      $('.showResult').text('Here are the number of stolen bikes so far in ' + location + ' that are the color ' + color + ': ' + response.stolen)
    })
  });
});
