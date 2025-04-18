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
// console.log(evaluateScore("Tomola", 95)); // comment Example for Excellent
// console.log(evaluateScore("Tomola", 65)); // comment Example for Average



// 4. Function to grant access based on ID and age
function grantAccess(hasID, isAbove18) {
    // Returns "Access granted" only if both conditions are true
    if (hasID && isAbove18) {
        return "Access granted";
    } else {
        return "Access denied";
    }
}
console.log(grantAccess(true, true)); // Example usage

// 5. Using a for loop to check an array of scores
function checkScores(scores) {
    for (let i = 0; i < scores.length; i++) {
        // Logs "Pass" if score is above 50, otherwise "Fail"
        if (scores[i] > 50) {
            console.log("Pass");
        } else {
            console.log("Fail");
        }
    }
}
checkScores([45, 80, 62, 50]); // Example usage

// 6. Arrow function to check if a student passed both Math and English
const checkPassMathAndEnglish = (mathScore, englishScore) =>
    mathScore >= 50 && englishScore >= 50 ? "Yes" : "No";

console.log(checkPassMathAndEnglish(60, 55)); // Example usage

// 7. Function to check if the user has either an email or phone number
function canSignUp(email, phoneNumber) {
    // Returns true if either email or phone number exists
    if (email || phoneNumber) {
        return "You can sign up";
    } else {
        return "Cannot sign up";
    }
}
console.log(canSignUp("test@example.com", "")); // Example usage

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