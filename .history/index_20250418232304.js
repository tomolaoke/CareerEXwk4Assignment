// 1. Function to check if the score is 180 and above (JAMB-style)
function checkScore(score) {
    if (score >= 180) {
        console.log("Passed JAMB exam");
    } else {
        console.log("You Scored " + score + " Failed JAMB exam");
    }
}
checkScore(200); // Example: For Passed Score output
// checkScore(120); //Comment Example: Input Score here to get Failed JAMB




// 2. Function to check eligibility for voting
function checkVotingEligibility(age) {
    if (age >= 18) {
        return "You are eligible to vote in Nigeria";
    } else {
        return "Not eligible to vote in Nigeria";
    }
}
console.log(checkVotingEligibility(20)); // Example: Input age here to get output
// console.log(checkVotingEligibility(16)); // comment Example: For Not Eligible output




// 3. Function to evaluate score and return a grade
function evaluateScore(name, score) {
    if (score >= 90) {
        return "Excellent";
    } else if (score >= 75) {
        return "Good";
    } else if (score >= 50) {
        return "Average";
    } else {
        return "Fail";
    }
}
console.log(evaluateScore("Tomola", 85)); // Example usage for Good
// console.log(evaluateScore("Joke", 45)); // comment Example for Fail
// console.log(evaluateScore("Seun", 95)); // comment Example for Excellent
// console.log(evaluateScore("Adebisi", 65)); // comment Example for Average



// 4. Function to grant access based on ID and age (Above 18)
function grantAccess(hasID, isAbove18) {
    if (hasID && isAbove18) {
        return "Access granted";
    } else {
        return "Access denied";
    }
}
console.log(grantAccess(true, true)); // Example usage
// console.log(grantAccess(false, true)); // comment Example for Access denied




// 5. Using a for loop to check an array of scores
function checkScores(scores) {
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > 50) {
            console.log("Pass");
        } else {
            console.log("Fail");
        }
    }
}

checkScores([30, 40, 55]); // comment Example usage for Fail
// checkScores([90, 85, 75]); // comment Example usage for Pass




// 6. Arrow function to check if a student passed both Math and English
const checkPassMathAndEnglish = (mathScore, englishScore) =>
    mathScore >= 50 && englishScore >= 50 ? "Yes" : "No";

console.log(checkPassMathAndEnglish(70, 80)); // comment Example usage for Yes
// console.log(checkPassMathAndEnglish(40, 45)); // comment Example usage for No






// 7. Function to check if the user has either an email or phone number
function canSignUp(email, phoneNumber) {
    if (email || phoneNumber) {
        return "You can sign up";
    } else {
        return "Cannot sign up";
    }
}
console.log(canSignUp("tommola.oke@example.com", "")); // Example usage
// console.log(canSignUp("", "")); // comment Example for Cannot sign up






// 8. Function to check username and password input
function validateCredentials(username, password) {
    // Returns "Invalid input" if either is empty
    return username === "" || password === "" ? "Invalid input" : "Valid input";
}
console.log(validateCredentials("JohnDoe", "")); // Example usage

// 9. Function to check if hours worked is full-time or part-time
function checkHoursWorked(hours) {
    // Uses ternary operator for decision making
    return hours >= 40 ? "Full-time" : "Part-time";
}
console.log(checkHoursWorked(35)); // Example usage

// 10. Arrow function to return the larger of two numbers
const getLargerNumber = (num1, num2) => (num1 > num2 ? num1 : num2);

console.log(getLargerNumber(10, 20)); // Example usage