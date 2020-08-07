function myClock() {
    var d = new Date();

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    var midday = "AM";

    var t = setTimeout(myClock, 500);

    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var dayofMonth = ["1St", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"];

    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    document.getElementById("myTime").value = h + ":" + m + ":" + s + " " + midday;

    midday = (h >= 12) ? "PM" : "AM";
    h = (h == 0) ? 12 : ((h > 12) ? (h - 12) : h)

    document.getElementById("dayOfWeek").value = weekDays[d.getDay()];

    document.getElementById("dateOfMonth").value = dayofMonth[d.getDate()];

    document.getElementById("month").value = month[d.getMonth()];

    document.getElementById("year").value = d.getUTCFullYear();
}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers less than 10
    return i;
}