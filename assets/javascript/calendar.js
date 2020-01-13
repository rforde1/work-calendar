// Store value from element ID's and Classes
var containerSlotsEl = $("#container-slots");
var saveButtonEl = $(".save-button");
var textArea = $(".todo-text");

// Create our elements for input and save buttons

saveButtonEl.on("click", function(){
    // we want to text put in text area to local storage when we click the save button
   var save = $("this").attr("data-form");
   console.log(this);
   var event = $(this).parent().siblings("input").val()
   localStorage.getItem("save", event);



    
})