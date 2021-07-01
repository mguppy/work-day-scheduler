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
initializeAllRows();
}

//Color code blocks based on time of day
var current_timeHour = moment().format("HH");
current_timeHour = parseInt(current_timeHour);
console.log(current_timeHour)

//if current time div hour is less than current time hour, gray out boxes
//current time is greater than now, make boxes green
//current time is within hour block, make box red
function initializeAllRows() {

var hourStringArr = document.getElementsByClassName("hour");
var buttonArr = document.getElementsByClassName("removeButtonClass");
var userEventClassArr = document.getElementsByClassName("userEventClass");

for (var i = 0; i < hourStringArr.length; i++) {
    var hourHTML = hourStringArr[i].innerText.split(":") [0];
    hourHTML = parseInt(hourHTML);
    console.log(hourHTML);

    if(current_timeHour>hourHTML) {
        document.getElementsByClassName("color-change")[i].style.backgroundColor = "gray";
    }
    else if(current_timeHour === hourHTML) {
        document.getElementsByClassName("color-change")[i].style.backgroundColor = "red";
    }
    else {
        document.getElementsByClassName("color-change")[i].style.backgroundColor = "green";
    }
        //Setup remove event on button click
        buttonArr[i].addEventListener("click", removeClick, false);
        buttonArr[i].myParam = userEventClassArr[i];

        //Get local storage for textboxes based on hour on page load or refresh
        userEventClassArr[i].value = window.localStorage.getItem(hourStringArr[i].innerText.trim());
    }

}

//Clears local storage for the row of the button click and removes textbox value
function removeClick(event) {
    var inputbox = event.currentTarget.myParam;
    var hour = inputbox.parentElement.parentElement.firstElementChild.innerText.trim();
    inputbox.value = " ";
    localStorage.removeItem(hour);
}

//Add event to local storage
function onTextChange(inputbox) {
    var inputValue = inputbox.value;
    var hour = inputbox.parentElement.parentElement.firstElementChild.innerText.trim();
    window.localStorage.setItem(hour,inputValue);
    console.log(hour + " " + inputValue);
}

