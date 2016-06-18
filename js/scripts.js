//user interface logic
$(document).ready(function() {
  $("form#phraseForm").submit(function() {
    event.preventDefault();
    var phrase = $("#phraseInput").val();
    var pigLatinPhrase = pigLatin(phrase);


    $("#result").text(pigLatinPhrase);
  })
})

//business logic
var pigLatin = function(phrase) {
  var pigLatinWords = [];
  //split phrase into words and loop to transform each word into pig latin
  var words = phrase.split(" ");
  for (var i = 0; i < words.length; i++) {
    var letters = words[i].split("");
    if (!isVowelRegEx(letters[0])) {
      length = letters.length;
      var returnWord = pigLatinTransformer(letters);
      pigLatinWords.push(returnWord);
    } else {
      pigLatinWords.push(words[i] + "ay");
    }
  }

  //return phrase to user
  var pigLatinPhrase = pigLatinWords.join(" ");
  return pigLatinPhrase;

  //function that checks if a letter is a vowel
  function isVowelRegEx(char) {
      return /[aeiouAEIOU]/.test(char);
  }

  //function that turns each word to pig latin form
  function pigLatinTransformer(letters) {
    var returnLetters = [];
    var consonants = 0;

    //determine number of consonants in a row at beginning of word
    while (!isVowelRegEx(letters[consonants])) {
      consonants += 1;
    }

    //checks for 'qu' exception
    var quCheck = (letters[consonants - 1] + letters[consonants]);
    if (/qu/.test(quCheck)) {
        consonants += 1;
    }

    //move beginning consonants to the end of the word
    for (var i = consonants; i <= letters.length - 1; i++) {
      returnLetters.push(letters[i]);
      if (i === letters.length - 1) {
        for (var j = 0; j < consonants; j++) {
          returnLetters.push(letters[j]);
        }
      }
    }

    //finish transformation by adding 'ay' at the end of the word
    returnLetters.push("ay");
    var returnPhrase = returnLetters.join('');
    return returnPhrase;
  }
}
