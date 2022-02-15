/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/); //array
    this.chains = this.getChains();
  }

  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat. The cat in the hat.", chains will be:
   * 
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null]
   *  }
   * 
   * */

  getChains() {
    // TODO: implement this!
    let result = new Map();

    for (let i = 0; i < this.words.length; i++) {

      if (result.get(this.words[i])) {
        result.get(this.words[i]).push(this.words[i + 1] || null);
      } else {
        result.set(this.words[i], [this.words[i + 1] || null]);
      }
    }

    return result;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!
    const textOutput = [this.words[0]];
    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null
    let word = this.words[0];

    while (word != null) {
      let options = this.chains.get(word);
      let randIndex = Math.floor(Math.random() * options.length);
      textOutput.push(options[randIndex]);

      word = options[randIndex];
    }

    return textOutput.join(/[ \r\n]+/);

  }
}
