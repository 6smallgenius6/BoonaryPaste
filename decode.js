// [ DECODE.JS - Grab loomian paste and decode it]

//const
const params = new URLSearchParams(window.location.search);
const dtCode = params.get("dt");

//check logic
if (dtCode) {
  console.log("dtCode obtained: "+dtCode);
} else {
  console.log("No dtCode provided.");
}

//methods
