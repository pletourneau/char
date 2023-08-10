

function handleSubmission(event) {
  event.preventDefault();


  const operator = document.querySelector("input[name='mythRace']:checked").value;

 

  document.getElementById("output").innerText = operator;
  
}

window.addEventListener("load", function() {
  const form = document.getElementById("char");
  form.addEventListener("submit", handleSubmission);
});
