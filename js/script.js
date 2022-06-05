// Created by: Lucas Tyman
// Created on: May 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-06-HTML/sw.js", {
    scope: "/ICS2O-Unit5-06-HTML/",
  })
}

/**
 * This function performs a loop.
 */
function calculate() {
  // input
  var firstInteger = document.getElementById("first-integer").value
  var secondInteger = document.getElementById("second-integer").value

  // process
  let counter = 0
  var answer = 0
  var firstIntegerAsInt = parseInt(firstInteger)
  var secondIntegerAsInt = parseInt(secondInteger)

  if (secondIntegerAsInt < 0) {
    temp = firstIntegerAsInt
    firstIntegerAsInt = secondIntegerAsInt
    secondIntegerAsInt = temp
  }
  while (counter < secondIntegerAsInt) {
    console.log("Once through loop:" + counter)
    answer += firstIntegerAsInt
    counter++
  }

  // output
  document.getElementById("answer").innerHTML = "The answer is " + (answer)
}