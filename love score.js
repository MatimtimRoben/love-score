function button() {
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;

    // Generate a random love score between 1 and 100
    let love_score = Math.floor(Math.random() * 100) + 1;

    let result = name1 + " and " + name2 + "'s Love Score is: " + love_score + "%";

    // if (love_score > 80) {
    //     alert ("Your love score is " + love_score + "%." + " You are a good match!");
    // }
    // else if (love_score > 40 && love_score <= 80) {
    //     alert ("Your love score is " + love_score + "%." + " You are both sweet but this is not the right time ");
    // }
    // else if (love_score <=30) {
    //     alert("Your love score is " + love_score + "%" + "You both have other proirities")
    // }
    // else {
    //     alert("Your love score is " + love_score + "% " + " I think you are good to be friends not lovers.") ;
    // }

    // Show the pop-up message
    let popup = document.getElementById("popup");
    popup.style.display = "block";
    popup.innerText = result;

}