function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}
const items = ['Mango', 'Poly', 'Ajax'];
logItems(items);




function calculateEngravingPrice(message, pricePerletter) {
    const words = "HAPPY BIRTHDAY"; 
    const totalPrice = words.length * 1;
    return totalPrice;
  }
console.log(calculateEngravingPrice("My price is (euros) , 14"));



function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = words[0];
  
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  const result = findLongestWord("I like playing tennis");
  console.log(result);




function checkForSpam(message) { 
while (message === "cancel" || "spam" !== NaN);
if (message === "cancel" || "spam") {
    alert("false")
} else {
    alert("true")
}
    return message;
}
console.log("I like spam");




function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + '...';
  }
}

  
