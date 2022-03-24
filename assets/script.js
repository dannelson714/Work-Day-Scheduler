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

$('#09').val(localStorage.getItem('btn9'))


$('#1').on("click", function() {
    toStore = $('#09').val();
    console.log(toStore);
    localStorage.setItem("btn9", JSON.stringify(toStore))
});

// scheduleList = ["","","","","","","",""]

// var saveBtn = $('.saveBtn');
// console.log(saveBtn);

// saveBtn.on('click', function() {
//     var toStore = Event.target;
//     // siblings().attr("id").val();
//     console.log(toStore);
// });