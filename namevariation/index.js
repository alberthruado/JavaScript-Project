const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const answer5 = document.querySelector("#answer5");
const answer6 = document.querySelector("#answer6");

const something = document.querySelector("#something");

something.addEventListener("keyup", () => {
    const value = something.value;

    answer1.textContent = getNumberOfChars(value);
    answer2.textContent = getFirstChar(value);
    answer3.textContent = getLastChar(value);
    answer4.textContent = getLower(value);
    answer5.textContent = getUpper(value);
    if (value) {
        answer6.textContent = getCapitalized(value);
    } else {
        answer6.textContent = "";
    }
});

/** @param {string} something */
function getNumberOfChars(something) {
    // number of characters in: something
    return something.length;
}

/** @param {string} something */
function getFirstChar(something) {
    // first character of: something
    return something[0];
}

/** @param {string} something */
function getLastChar(something) {
    // last character of: something
    return something[something.length - 1]; 
}

/** @param {string} something */
function getLower(something) {
    // something all in lower case (example: "ABC" becomes "abc")
    return something.toLowerCase();
}

/** @param {string} something */
function getUpper(something) {
    // something all in upper case (example: "abc" becomes "ABC")
    return something.toUpperCase();
}

/** @param {string} something */
function getCapitalized(something) {
    // capitalized version of something (example: "alEX" becomes "Alex")

    return something[0].toUpperCase() + something.substring(1).toLowerCase();

}