//User opens page and today's date along with planner (3 columns - time of day (24 hours), color coded blocks based on time, and buttons to add or remove events) is displayed
//Array for grid to build out a row for each hour of the day?
//The time blocks are color coded - if time is in past, block is grayed out, if time is present, it's red, and if time is in future, it's green
//When you click into a timeblock, user can enter an event and then click the save button
//Once user clicks save button, the text for that event along with the hour of the day is saved into local storage
//User can refresh the page and the events are still in local storage

window.onload = function() {
//Display today's date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

//Color code blocks based on time of day
var current_timeHour = moment().format("HH");
console.log(current_timeHour)

var hourString = document.getElementById("hour").innerText;
var hourHTML = hourString.split(' ') [0];
console.log(hourHTML)

//if current time div hour is less than current time hour, gray out boxes
//current time is greater than now, make boxes green
//current time is within hour block, make box red
if(current_timeHour<hourHTML) {
    document.getElementById("hour").style.backgroundColor = "gray";
}
else {
    document.getElementById("hour").style.backgroundColor = "green";
}
}