const strings = ["apple", "banana", "cherry", "date", "elderberry", "fig",
    "grape"];
let longStrings = strings.filter(string => string.length > 5);
console.log(longStrings);

let upperCaseStrings = strings.map((string) => string.toUpperCase());
console.log(upperCaseStrings);

let containsA = strings.filter(string => string.includes('a'));
console.log(containsA);

let processedStrings = strings.map((string) => string.concat('- Processed'));
console.log(processedStrings);