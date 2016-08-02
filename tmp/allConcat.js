var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#calc-add').submit(function(event) {
    event.preventDefault();
    var input = parseInt($('#add-val').val());
    var currentValue = parseInt($('#calc-display').text());
    var newCalculator = new Calculator("eggshell white");
    $('#calc-display').text(newCalculator.add(currentValue, input));
  });
  $('#calc-sub').submit(function(event) {
    event.preventDefault();
    var input = parseInt($('#sub-val').val());
    var currentValue = parseInt($('#calc-display').text());
    var newCalculator = new Calculator("eggshell white");
    $('#calc-display').text(newCalculator.sub(currentValue, input));
  });
  $('#calc-mult').submit(function(event) {
    event.preventDefault();
    var input = parseInt($('#mult-val').val());
    var currentValue = parseInt($('#calc-display').text());
    var newCalculator = new Calculator("eggshell white");
    $('#calc-display').text(newCalculator.mult(currentValue, input));
  });
  $('#calc-div').submit(function(event) {
    event.preventDefault();
    var input = parseInt($('#div-val').val());
    var currentValue = parseInt($('#calc-display').text());
    var newCalculator = new Calculator("eggshell white");
    $('#calc-display').text(newCalculator.div(currentValue, input));
  });
  $('#calc-clear').submit(function(event) {
    event.preventDefault();
    $('#calc-display').text(0);
  });
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

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
