"use strict";

const { MarkovMachine } = require('./markov');

describe("Map of Markov chains from text.", function(){
  test("should return map of chains", function(){
    const testSentence2 = "The cat cat is.";
    const cat2 = new MarkovMachine(testSentence2);
    const testMap = new Map()

    testMap.set("The", ["cat"])
    testMap.set("cat", ["cat", "is."])
    testMap.set("is.", [null])

    expect(cat2.chains).toEqual(testMap)
  })

  test("should generate random text from chain.", function(){
    const testSentence = "The cat is.";
    const cat = new MarkovMachine(testSentence);

    expect(cat.getText()).toEqual("The cat is.")
  })
})