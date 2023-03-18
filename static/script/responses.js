function getBotResponse(input) {
    if (input == "I want help") {
        return "Please dail on 1228";
    } else if (input == "I want to join community") {
        return "A person will be direct to you for assistance ";
    } else if (input == "Size self help groups") {
        return "Size of 5 members";
    } else if (input == "goodbye") {
        return "Thank you for you time";
    } else {
        return "Try asking something else!";
    }
}
