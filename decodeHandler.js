// [ DECODE_HANDLER.JS - Grab loomian paste and decode it]

//declarations
let state = "empty";
var dtCode = null;

//add listener to update dynamically
document.addEventListener("DOMContentLoaded", () => {
  
  //consts
  const params = new URLSearchParams(window.location.search);
  dtCode = params.get("dt");

  //check logic
  if (dtCode) {
  
    console.log("dtCode obtained: "+dtCode);
    
    //change state
    state = "invalid";
    setState(state);
  
    //reset title
    document.title = ("DTPaste - "+dtCode);
  } else {
  	
  	setState(state);
  }

  showTeamInputBox();
});

//functions
function setState(appState) {
	const app = document.getElementById("app");
	
	app.classList.remove("state-empty", "state-invalid", "state-valid");
	app.classList.add("state-"+appState);
}

function decodeTeam() {
  
  
  return;
}

function showTeamInputBox() {

	//string to avoid duplicity
	const inputBoxMessageDefault = "Insert Dream Team code here";

	//check if team is valid or not
	if (state == "valid") {
	  
	} else {
	  
	  //check if dream team code is provided, update inputBoxMessage
	  if (state = "invalid") {
	    inputBoxMessageDefault = "Insert valid Dream Team code here";
	  }
	}
}