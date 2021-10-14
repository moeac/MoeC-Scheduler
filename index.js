var currentDay = $("#currentDay");
var hoursEl = $(".hours");


// displays current date
currentDay.text(moment().format("dddd, MMMM Do"));

// applies colour to hourEl
function checkTime() {
// for each hourRow add a style class depending on time conditions 
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




checkTime();