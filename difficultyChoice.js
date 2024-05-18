

document.addEventListener('DOMContentLoaded', function() {
    // retrieve a list of <button> elements of class "rectangle"
    const buttons = document.querySelectorAll('button.rectangle');
    // for each button clicked, perform the corresponding case of isSelected function
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            isSelected(this.id);
        });
    });
});

// When a button is pressed, retrieve and check the id of that button, change the confirm message and store it to local session
function isSelected(diffType) {
    if(diffType == "Novice"){
        document.getElementById("selection-display").innerHTML = "Difficulty chosen: Novice";
        localStorage.setItem("difficulty", "Novice");
    }
    else if(diffType == "Great"){
        document.getElementById("selection-display").innerHTML = "Difficulty chosen: Great";
        localStorage.setItem("difficulty", "Great");
    }
    else if(diffType == "Ultra") {
        document.getElementById("selection-display").innerHTML = "Difficulty chosen: Ultra";
        localStorage.setItem("difficulty", "Ultra");
    }
    else if(diffType == "Master") {
        document.getElementById("selection-display").innerHTML = "Difficulty chosen: Master";
        localStorage.setItem("difficulty", "Master");
    }
}