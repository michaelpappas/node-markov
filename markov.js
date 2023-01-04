/** Textual markov chain generator. */
"use strict";

class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */

  getChains() {
    let chains = new Map();
    for(let i=0; i<this.words.length; i++){
      let word = this.words[i];
      let nextWord = this.words[i+1] || null;
      if (chains.has(word)){
        chains.get(word).push(nextWord);
      }
      else{
        chains.set(word, [nextWord]);
      }
    }
    return chains
  }




  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    let word = this.words[0];
    let sentence = "";

    while (word != null){
      sentence += word;
      sentence += " ";
      let randomIdx = Math.floor(Math.random() * this.chains.get(word).length);
      word = this.chains.get(word)[randomIdx];
    }
    console.log(sentence);
    return sentence.trim()
  }
}

module.exports = { MarkovMachine };

