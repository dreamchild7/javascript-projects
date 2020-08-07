/*
John and his family went on a holiday and went to eat in 3 different resturants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200. 

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amount (bill & tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

*/

/*var bills = [124, 48, 268];
var tip = []; //holds the tip array
var billAndTip = []; // holds the total amount both bill and tip

function tipCal(bills) {
    var percentage;
    if (bills < 50) {
        percentage = 0.2;
    } else if (bills < 200) {
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }
    return percentage * bills;
}

for (var i = 0; i < tip.length; i++) {
    tip = tipCal(bills);

}

console.log(tip.push[i]);*/




for (var i = 0; i < tip.length; i++) {
    var tip = [];
    var bills = [124, 48, 264];
    var percentage;

    if (bills < 50) {
        percentage = 0.2;
    } else if (bills >= 50 && bills < 200) {
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }
    var tip = percentage * bills;
    tip.push[i];
}