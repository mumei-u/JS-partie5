var languagesArrayCreation = function () {
  const languages = ['Html', 'CSS', 'Java', 'PHP']
  return languages;
}

var numbersArrayCreation = function () {
    const numbers = [0,1,2,3,4,5]
    return numbers;
}

var ElementReplacement = function (languages) {
  languages.splice(2,1, 'Javascript');
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
  languages.push('Ruby', 'Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  numbers.unshift(-2, -1)
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
  languages.shift()
  return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.pop()
  return languages;
}

var stringToArray = function (socialMediaInString) {
  const socialMedia = socialMediaInString.split(',');
  return socialMedia;
}

var arrayToString = function (languages) {
  const languagesInString = languages.join(',');
  return languagesInString;
}

var arraySort = function (socialMedia) {
  return socialMedia.sort();
}

var arrayInvert = function (languages){
  const languagesInvert = languages.reverse()
  return languagesInvert;
}
