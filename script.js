function checkPangrams(sentence) {
  var pangram = true
  var sentenceUpperCase;
  sentenceUpperCase = sentence.toUpperCase()
  for (g = 65; g < 91; g++) {
    for (i = 0; i < sentence.length; i++){
      if (sentenceUpperCase.indexOf(String.fromCharCode(g)) == -1) {
        return false
      }
    }
  }
  return pangram
}

document.write(checkPangrams("The quick brown fox jumps over the lazy dog"))
                          