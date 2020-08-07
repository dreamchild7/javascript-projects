//First we get all the DOM and assign them a variable



function calculateTip() {
    var bill = document.getElementById("bill").value;
    var rateService = document.getElementById('rateService').value;
    var numberOfPeople = document.getElementById('numberOfPeople').value;

    document.getElementById("display").disabled = true;

    var x = rateService / 100;
    if (numberOfPeople == 0) {
        alert("Please enter the number of people");
    } else if (numberOfPeople <= 1) {
        displayTip = (bill * x);
    } else {
        displayTip = (bill * x) / numberOfPeople;
    }

    document.getElementById('display').value = "Tip is N" + displayTip + "!";


}