function button() {
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;

    // Generate a random love score between 1 and 100
    let love_score = Math.floor(Math.random() * 100) + 1;

    let result = name1 + " and " + name2 + "'s Love Score is: " + love_score + "%";

    if (result > 80) {
        alert ("Your love score is " + result + "%." + " You are a good match!");
    }
    else if (result > 40 && result <= 80) {
        alert ("Your love score is " + result + "%." + " You are both sweet but this is not the right time ");
    }
    else if (result <=30) {
        alert("Your love score is " + result + "%" + "You both have other proirities")
    }
    else {
        alert("Your love score is " + result + "% " + " I think you are good to be friends not lovers.") ;
    }

    // Show the pop-up message
    let popup = document.getElementById("popup");
    popup.style.display = "block";
    popup.innerText = result;

}