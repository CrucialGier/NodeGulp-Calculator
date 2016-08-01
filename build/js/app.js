(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.add = function(number1, number2) {
  return number1 + number2;
};
Calculator.prototype.sub = function(number1, number2) {
  return number1 - number2;
};
Calculator.prototype.mult = function(number1, number2) {
  return number1 * number2;
};
Calculator.prototype.div = function(number1, number2) {
  return number1 / number2;
};

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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

},{"./../js/pingpong.js":1}]},{},[2]);
