var currentDay = $("#currentDay");
var hoursEl = $(".hours");
var buttonSave = $(".saveBtn");


// empty array we'll append our lists to
var scheduleList = [];

// displays current date
currentDay.text(moment().format("dddd, MMMM Do"));


// for each hourRow add a style class depending on time conditions 
function checkTime() {

    hoursEl.each(function() {

        let hourRow = $(this);
        let scheduleHour = hourRow.attr("data-hour");
        let currentHour = moment().hours();
        
        if (scheduleHour < currentHour) {
            hourRow.addClass("past");
        } 
        else if (scheduleHour > currentHour) {
            hourRow.addClass("future");
        }
        else {
            hourRow.addClass("present");
        }

    })

}

// saves time and text to local storage upon savebutton click
function saveSchedule() {

    buttonSave = $(this);
    var time = buttonSave.parent().attr("data-hour");
    var text = buttonSave.siblings(".input").val();
    
    localStorage.setItem(time, text);

}


// renders the schedule item lists
function renderSchedule() {
// for each hoursEl fills the textarea with local storage saved depending on scheduleHour which is  assigned data-hour
    hoursEl.each(function() {

        let hourRow = $(this);
        let scheduleHour = hourRow.attr("data-hour");
        let textA = hourRow.find("textarea");
        
        textA.val(localStorage.getItem([scheduleHour]))
    })

}



renderSchedule();
checkTime();
buttonSave.on("click", saveSchedule);