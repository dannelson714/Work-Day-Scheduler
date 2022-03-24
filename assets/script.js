var today = moment();
$("#currentDay").text("Today is " +today.format("dddd, MMMM Do"));
var hours = [9,10,11,12,13,14,15,16,17]

timeCode = $(".timeSlot");


function timeColorCode() {
    currentHour = moment().format("H");
    $(timeCode).each(function(index) {
        if ($(this).attr("id") < currentHour) {
            $(this).addClass("past");
        }
        else if ($(this).attr("id") == currentHour) {
            $(this).addClass("present");
        }
        else if ($(this).attr("id") > currentHour) {
            $(this).addClass("future");
        }
        else {
            $(this).addClass("past");
        }
    })
}


timeColorCode();

console.log($("#09").val());//works!