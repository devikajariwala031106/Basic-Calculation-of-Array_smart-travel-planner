let destination = [];
for (let i = 0; i < 3; i++) {
    let place = prompt("Enter destination " + (i + 1));
    destination.push(place);
}

let budget = parseInt(prompt("Enter your total travel budget"));
let tripType = "";
if (budget < 10000) {
    tripType = "Plan a short domestic trip.";
} else if (budget <= 50000) {
    tripType = "You can plan a long domestic trip.";
} else {
    tripType = "International trip possible!";
}

let days = parseInt(prompt("Enter number of travel days"));
let daySuggestion = "";
if (days < 3) {
    daySuggestion = "Weekend Getaway.";
} else if (days <= 7) {
    daySuggestion = "Perfect Holiday Trip.";
} else {
    daySuggestion = "Extended Vacation.";
}

function hotelSuggestion(budget, days) {
    let perDay = budget / days;
    if (perDay < 2000) {
        return "Budget Hotels.";
    } else if (perDay <= 5000) {
        return "Mid-range Hotels.";
    } else {
        return "Luxury Hotels.";
    }
}

console.log(`Destinations Entered: ${destination}`);
console.log(`Total Budget: ₹${budget}`);
console.log(`Days Planned: ${days}`);
console.log(`Trip Type: ${daySuggestion}`);
console.log(`Hotel Suggestion: ${hotelSuggestion(budget, days)}`);
console.log(`Travel Summary: ${tripType}`);
