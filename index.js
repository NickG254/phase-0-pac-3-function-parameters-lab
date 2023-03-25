function introduction(name) {
  return `Hi, my name is ${name}.`;
}

console.log(introduction("Nick"));

function introductionWithLanguageOptional(name,language = "JavaScript") {
    return 'Hi, my name is ${name} and I am learning to program in ${language}.';
}
console.log(introductionWithLanguage("Nick", "JavaScript"));


 function sayHelloTo(firstName = "User") {
  console.log(`Hello, ${firstName}!`);
}