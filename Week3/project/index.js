// Your code goes in here

const billAmount = document.getElementById("bill-amount");
const tipPercent = document.getElementById("tip-percent");
const billSharing = document.getElementById("bill-sharing");
const calculateTipBtn = document.getElementById("calculate-tip");
const tipAmount = document.getElementById("tip-amount");

// When the calculate button is clicked
calculateTipBtn.addEventListener("click", function(e) {
    e.preventDefault(); // prevent default functionality
    if(billAmount.value === "" || billSharing.value === "") { // if any of the input field is empty
        alert("You need to fill in all the fields!");
    } else {
        // Bill Amount divided by People Sharing and the result is multiplied by percentage of the tip
        const tipCalculated = (billAmount.value / billSharing.value) * (tipPercent.value / 100);

        // Output to the tip amount
        tipAmount.innerText = "$" + tipCalculated.toFixed(2);

        // If more than one person sharing
        tipAmount.innerText += (billSharing.value > 1) ? " each": "";
    }
});