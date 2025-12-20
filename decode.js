// [ DECODE.JS - Grab loomian paste and decode it]

//consts
const dtCode;
const dtValid = false;

//add listener to update dynamically
document.addEventListener("DOMContentLoaded", () => {
  
  //consts
  const params = new URLSearchParams(window.location.search);
  dtCode = params.get("dt");

  //check logic
  if (dtCode) {
  
    console.log("dtCode obtained: "+dtCode);
  
    //reset title
    document.title = ("DTPaste - "+dtCode);
  } else {
  
  }
});

//functions
function decodeTeam() {
  
  
  return;
}

function showTeamInputBox() {

	//string to avoid duplicity
	const inputBoxMessageDefault = "No dream team code detected - enter dream team code here";

	//check if team is valid or not
	if (dtValid == true) {
	  
	  //Edit input box message
	  inputBoxMessageDefault = "Enter dream team code here";
	  
	} else {
	  
	  //check if dream team code is provided, update inputBoxMessage
	  if (dtCode) {
	    inputBoxMessageDefault = "Invalid dream team code provided - enter dream team code here";
	  }
	}
}