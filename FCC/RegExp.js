// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi; // 修改这一行
// let result = quoteSample.match(vowelRegex); // 修改这一行
// console.log(vowelRegex.test(quoteSample))

// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g; // 修改这一行
// let result = difficultSpelling.match(myRegex);
// console.log(result)

// let chewieQuote = "He made AaaasaAa fair move. Screaming about it can't help you.";
// let chewieRegex = /Aa*/; // 修改这一行
// let result = chewieQuote.match(chewieRegex);
// console.log(result)

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // 修改这一行
// let result = text.match(myRegex);
// console.log(result)

// example crowd gathering
// let crowd = 'PPPP1P2P3P4P5P6CCCP7P8P9';

// let reCriminals = /C+/; // 修改这一行

// let matchedCriminals = crowd.match(reCriminals);
// console.log(matchedCriminals);

// let chewieQuote = "AaAaaaaaaaaaaaaaarrrgh!";
// let chewieRegex = /Aa*/; // 修改这一行
// let result = chewieQuote.match(chewieRegex);

// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g; // 修改这一行
// let result = quoteSample.match(alphabetRegexV2);

// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g; // 修改这一行
// let result = quoteSample.match(nonAlphabetRegex);

// let numString = "Your sandwich will be $5.00";
// let numRegex = /\d/g; // 修改这一行
// let result = numString.match(numRegex).length;
// let numString = "Your sandwich will be $5.00";
// let noNumRegex = /\D/g; // 修改这一行
// let result = numString.match(noNumRegex);
// let username = "JACK";
// let userCheck = /^[a-z]{2,}\d*$/i; // 修改这一行
// let result = userCheck.test(username);
// let ohStr = "Ohhh no";
// let ohRegex = /Oh{3,6} no/; // 修改这一行
// let result = ohRegex.test(ohStr);
// let sampleWord = "as212";
// let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // 修改这一行
// let result = pwRegex.test(sampleWord);
// result

// let repeatNum = "42 42 42";
// let reRegex = /^(\d+)\s\1\s\1$/; // 修改这一行
// // let result = reRegex.test(repeatNum);
// let result=repeatNum.match(reRegex)
// result
// let repeatStr = "regex regex";
// let repeatRegex = /(\w+)\s\1/;
// repeatRegex.test(repeatStr); // Returns true
// console.log(repeatStr.match(repeatRegex)); // Returns ["regex regex", "regex"]

// let huhText = "This sandwich is good.";
// let fixRegex = /good/; // 修改这一行
// let replaceText = 'okey-dokey'; // 修改这一行
// let result = huhText.replace(fixRegex, replaceText);

let hello = "   Hello, World!  ";
let wsRegex = /^\s+\s+$/g; // 修改这一行
let result = hello.replace(wsRegex, ''); // 修改这一行
console.log(result)