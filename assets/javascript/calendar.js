// catch all values needed
// Time blocks

var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDate);
var headDateDiv = $("<p>");
headDateDiv.text(currentDate);
headDateDiv.addClass("text-center");



var timeSlots = ["9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm"];

for(var i = 0; i < timeSlots.length; i++){
    var timeSlotDiv = $("<div>").addClass("time-slot-style row");
    $("#time-slots").append(timeSlotDiv);
    // Create row for each div
    var timeRow = $("<div>").addClass("col-md-2");
    timeRow.text(timeSlots[i]);
    timeSlotDiv.append(timeRow);
    // Create textarea and append them to timeslotDiv
    var textAreaInput = $("<textarea>").addClass("col-md-8 ");
    timeSlotDiv.append(textAreaInput);
    // Create buttons and append them to timeslotDiv
    var saveInputArea = $("<button>").addClass("col-md-2 fa fa-save pt-4 btn btn-primary"); 
    timeSlotDiv.append(saveInputArea);
}


