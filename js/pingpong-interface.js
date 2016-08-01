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
