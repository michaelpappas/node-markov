/** Textual markov chain generator. */


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
    // TODO: implement this!
    let chains = {};
    for(let i=0; i<this.words.length; i++){
      let word = this.words[i];
      let nextWord = this.words[i+1] || null;
      if (word in chains){
        chains[word].push(nextWord)
      }
      else{
        chains[this.words[i]] = [this.words[i+1] || null]
      }
    }
    console.log(chains)
    return chains
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null
  }
}

let cat = new MarkovMachine("The cat is in the hat. The cat is the cat. The hat is a cat.")

