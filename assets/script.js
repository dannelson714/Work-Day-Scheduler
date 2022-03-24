//Creating the daily date
var today = moment();
$("#currentDay").text("Today is " +today.format("dddd, MMMM Do"));

//Retrieving filled in schedule items from local storage
$('#09').val(JSON.parse(localStorage.getItem('btn9')));
$('#10').val(JSON.parse(localStorage.getItem('btn10')));
$('#11').val(JSON.parse(localStorage.getItem('btn11')));
$('#12').val(JSON.parse(localStorage.getItem('btn12')));
$('#13').val(JSON.parse(localStorage.getItem('btn13')));
$('#14').val(JSON.parse(localStorage.getItem('btn14')));
$('#15').val(JSON.parse(localStorage.getItem('btn15')));
$('#16').val(JSON.parse(localStorage.getItem('btn16')));
$('#17').val(JSON.parse(localStorage.getItem('btn17')));

//Establishing the proper color coding for each hour block
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

//Button functionality for each button for each hour
$('#0').on("click", function() {
    toStore = $('#09').val();
    console.log(toStore);
    localStorage.setItem("btn9", JSON.stringify(toStore))
});

$('#1').on("click", function() {
    toStore = $('#10').val();
    console.log(toStore);
    localStorage.setItem("btn10", JSON.stringify(toStore))
});

$('#2').on("click", function() {
    toStore = $('#11').val();
    console.log(toStore);
    localStorage.setItem("btn11", JSON.stringify(toStore))
});

$('#3').on("click", function() {
    toStore = $('#12').val();
    console.log(toStore);
    localStorage.setItem("btn12", JSON.stringify(toStore))
});

$('#4').on("click", function() {
    toStore = $('#13').val();
    console.log(toStore);
    localStorage.setItem("btn13", JSON.stringify(toStore))
});

$('#5').on("click", function() {
    toStore = $('#14').val();
    console.log(toStore);
    localStorage.setItem("btn14", JSON.stringify(toStore))
});

$('#6').on("click", function() {
    toStore = $('#15').val();
    console.log(toStore);
    localStorage.setItem("btn15", JSON.stringify(toStore))
});

$('#7').on("click", function() {
    toStore = $('#16').val();
    console.log(toStore);
    localStorage.setItem("btn16", JSON.stringify(toStore))
});

$('#8').on("click", function() {
    toStore = $('#17').val();
    console.log(toStore);
    localStorage.setItem("btn17", JSON.stringify(toStore))
});