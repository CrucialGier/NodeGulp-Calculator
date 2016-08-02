// a45ffef5ad9f6b6488d6272af08efb1b
// http://api.openweathermap.org/data/2.5/weather?q=Portland,us&appid=a45ffef5ad9f6b6488d6272af08efb1b
var apiKey = "a45ffef5ad9f6b6488d6272af08efb1b";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      console.log(response);

    });
  });
});
