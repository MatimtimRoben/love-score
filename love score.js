function button() {
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;

    // Generate a random love score between 1 and 100
    let love_score = Math.floor(Math.random() * 100) + 1;
    document.getElementById("result").textContent = (name1 + " & " + name2 + " your love score is " + love_score + "%");
    // conditions
    if(love_score > 80) {
        document.getElementById("popUp").textContent = ("You are a good match!");
    } else if(love_score > 45 && love_score <= 79) {
        document.getElementById("popUp").textContent = "You are both sweet but this is not the right time.";
    } else if(love_score > 20 && love_score <= 44) {
        document.getElementById("popUp").textContent = "You both have other proirities.";
    } else {
        document.getElementById("popUp").textContent = "I think you are good to be friends not lovers.";
    }
}