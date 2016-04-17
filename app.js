// var http = require('http');
// var express = require('express');
// var app = express();

SERVER_URL = 'http://localhost:8000/';

var faye = require('faye');
var client = new faye.Client(SERVER_URL);

var gpio = require("pi-gpio");

client.subscribe('/gpio', function(data) {
  action = data.action;
  pin = data.pin;
  options = data.options;
  console.log(data);

  switch(data.action) {
    case 'on':
        gpioPin = pin;
        gpio.close(gpioPin);
        gpio.open(gpioPin, "output", function(err) {
          gpio.write(gpioPin, 1, function() {
            console.log('Pin '+ gpioPin +' is now HIGH.');
          });
        });
        break;
    case 'blink':
        gpioPin = pin;
      	time = options.time;
      	gpio.close(gpioPin);
        gpio.open(gpioPin, "output", function(err) {
          gpio.write(gpioPin, 1, function() {
            console.log('Pin '+ gpioPin +' is now HIGH.');
          });
          setTimeout(function() {
            gpio.write(gpioPin, 0, function() {
              console.log('Pin '+ gpioPin +' is now LOW.');
              gpio.close(gpioPin);
            });
          }, time);
        });
        break;
    default:
        gpioPin = pin;
      	gpio.close(gpioPin);
        gpio.open(gpioPin, "output", function(err) {
      		gpio.write(gpioPin, 0, function() {
      			console.log('Pin '+ gpioPin +' is now LOW.');
      		});
        });
}
});
