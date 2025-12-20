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
    
    //change state
    if (dtCode == "valid") {
      setState("valid");
    } else {
      setState("invalid");
    }
  
    //reset title
    document.title = ("DTPaste - "+dtCode);
  } else {
  	
  	setState("empty");
  }

  //show appropriate box
  showTeamInputBox();

  //listen to the box for input
  const dtInputElement = document.getElementById("dtInput")

  dtInputElement.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      readTeamInputBox();
    }
  });
  dtInputElement.addEventListener("blur", () => readTeamInputBox());
});

//functions
function setState(appState) {
	const app = document.getElementById("app");
  state = appState;
	
	app.classList.remove("state-empty", "state-invalid", "state-valid");
	app.classList.add("state-"+appState);
}

function decodeTeam() {
  
  
  return;
}

function showTeamInputBox() {

	//string to avoid duplicity
	let inputBoxMessageDefault = "Paste Dream Team code here...";

	//check if team is valid or not
	if (state == "valid") {
	  
	} else {
	  
	  //check if dream team code is provided, update inputBoxMessage
	  if (state == "invalid") {
	    inputBoxMessageDefault = "Given Dream Team code is invalid, paste Dream team code here...";
	  }
	}

  //update team input default
  document.getElementById("dtInput").placeholder = inputBoxMessageDefault;
}

function readTeamInputBox() {
  
  //get input
  const input = document.getElementById("dtInput").value;

  //log on console
  console.log(input);
}