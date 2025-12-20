// [ DECODE.JS - Grab loomian paste and decode it]

//add listener to update dynamically
document.addEventListener("DOMContentLoaded", () => {
  
  //const
  const params = new URLSearchParams(window.location.search);
  const dtCode = params.get("dt");

  //check logic
  if (dtCode) {
  
    console.log("dtCode obtained: "+dtCode);
  
    //reset title
    document.title = ("DTPaste - "+dtCode);
  } else {
  
  }
});
                          
//methods
