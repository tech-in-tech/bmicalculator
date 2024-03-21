
const btn = document.querySelector("#btn");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const weight = parseInt(document.querySelector("#weight").value);
  const height = parseInt(document.querySelector("#height").value);
  const result = document.querySelector("#ans");
    
  if(weight==='' || weight<0 || isNaN(weight)){
    result.innerText = "error";
  }
  if(height==='' || height<20 || height> 300 || isNaN(height)){
    result.innerText = "error";
  }

  else{
    result.innerText = (weight/((height*height)/10000)).toFixed(2)
  }
  console.log(`Weight = ${weight}`);
  console.log(`height = ${height}`);
  console.log(`BMI = ${result.innerText}`);
  // result.innerText = `${weight/height}`
})


