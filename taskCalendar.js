// Macabenta, Vhardey John F.
// switch Statement

let day = prompt("Please enter day of the week").toUpperCase(); // asks the user 

switch (day){ // switch statement for our day variable.
  case "MONDAY": // if the value of our day is monday then it will execute the following code below.
    console.log("Your task for Monday is: Finish your assignments.");
    break; // break if the statement/ condition above is true
  
  case "TUESDAY": // if the value of our day is tuesday then it will execute the following code below. 
    console.log("Your task for Tuesday is: Run 10 miles.");
    break; // break if the statement/ condition above is true
    
  case "WEDNESDAY": // if the value of our day is wednesday then it will execute the following code below. 
    console.log("Your task for Wednesday is: Wash your clothes.");
    break; // break if the statement/ condition above is true
  
  case "THURSDAY": // if the value of our day is thursday then it will execute the following code below. 
    console.log("Your task for Thursday is: Go to the gym.");
    break; // break if the statement/ condition above is true
    
  case "FRIDAY": // if the value of our day is friday then it will execute the following code below. 
    console.log("Your task for Friday is: Visit your family.");
    break; // break if the statement/ condition above is true
    
  case "SATURDAY": // if the value of our day is saturday then it will execute the following code below. 
    console.log("Your task for Saturday is: Date yourself.");
    break; // break if the statement/ condition above is true
    
  case "SUNDAY": // if the value of our day is sunday then it will execute the following code below. 
    console.log("Your task for Sunday is: Go to church.");
    break; // break if the statement/ condition above is true
    
  default: // if the value of our day is not present from our cases then this code will execute.
    console.log("You entered an invalid day. Please try again.");
} // exits the switch statement.