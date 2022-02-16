"use strict";

const { markovMachine } = require("./markov");

describe("test getChains method", function () {

  test("get chain", function () {
    let first = new markovMachine("The cat in the hat.");

    let expected = new Map();
    expected.set("The", ["cat"]);
    expected.set("cat", ["in"]);
    expected.set("in", ["the"]);
    expected.set("the", ["hat."]);
    expected.set("hat.", [null]);
    
    expect(first.chains).toEqual(expected);

  });

});


describe("test getText method", function () {

  test("get text, no branches", function () {
    let first = new markovMachine("The cat in the hat.");
    let textOutput = first.getText();
    let words = textOutput.split(" ");

    expect(textOutput).toEqual(expect.any(String));
    expect(words[4]).toEqual("hat.");
    expect(words[3]).toEqual("the");

  });

  test("get text, w/ branches", function () {
    let first = new markovMachine(
      "The cat in the hat. The hat on the cat."
      );
    let textOutput = first.getText();
    let words = textOutput.split(" ");

    expect(textOutput).toEqual(expect.any(String));
    expect(words[0]).toEqual("The");

  });

});