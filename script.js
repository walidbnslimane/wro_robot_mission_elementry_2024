function calculatePoints() {
  let redComplete = parseInt(document.getElementById("redComplete").value) * 11;
  let redPartial = parseInt(document.getElementById("redPartial").value) * 4;
  let yellowComplete = parseInt(document.getElementById("yellowComplete").value) * 11;
  let yellowPartial = parseInt(document.getElementById("yellowPartial").value) * 4;
  let waterGreen = parseInt(document.getElementById("waterGreen").value) * 3;
  let earthBlock = parseInt(document.getElementById("earthBlock").value) * 3;
  let chicken = parseInt(document.getElementById("chicken").value) * 3;
  let fence = parseInt(document.getElementById("fence").value) * 3;

  let totalPoints = redComplete + redPartial + yellowComplete + yellowPartial + waterGreen + earthBlock + chicken + fence;

  document.getElementById("totalPoints").innerHTML = totalPoints + " / 142";
}

function resetForm() {
  document.getElementById("redComplete").value = "0";
  document.getElementById("redPartial").value = "0";
  document.getElementById("yellowComplete").value = "0";
  document.getElementById("yellowPartial").value = "0";
  document.getElementById("waterGreen").value = "0";
  document.getElementById("earthBlock").value = "0";
  document.getElementById("chicken").value = "0";
  document.getElementById("fence").value = "0";
  document.getElementById("totalPoints").innerHTML = "0 / 142";
  updateRedPartialOptions();
}

document.getElementById("redComplete").addEventListener("change", updateRedPartialOptions);

function updateRedPartialOptions() {
  let redComplete = parseInt(document.getElementById("redComplete").value);
  let redPartial = document.getElementById("redPartial");

  if (redComplete === 0) {
    redPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>";
} 
  if (redComplete === 1) {
    redPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option>";
} 
if (redComplete === 2) {
  redPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option>";
} 
  if (redComplete === 3) {
      redPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option>";
  }
  if (redComplete === 4) {
    redPartial.innerHTML = "<option value='0'>0</option>";
} 

}

document.getElementById("yellowComplete").addEventListener("change", updateyellowPartialOptionse);

function updateyellowPartialOptionse() {
  let yellowComplete = parseInt(document.getElementById("yellowComplete").value);
  let yellowPartial  = document.getElementById("yellowPartial");

  if (yellowComplete === 0) {
    yellowPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>";
} 
  if (yellowComplete === 1) {
    yellowPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option>";
} 
  if (yellowComplete === 2) {
  yellowPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option>";
} 
  if (yellowComplete === 3) {
    yellowPartial.innerHTML = "<option value='0'>0</option><option value='1'>1</option>";
  }
  if (yellowComplete === 4) {
    yellowPartial.innerHTML = "<option value='0'>0</option>";
} 

}