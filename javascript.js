const body = document.body;
const weightinput = document.querySelector("#weight");
const heightinput = document.querySelector("#height");
const submit = document.querySelector(".submit");
const result = document.querySelector(".result");

submit.addEventListener("click", () => {
  const weight = parseFloat(weightinput.value);
  const height = parseFloat(heightinput.value);
  if (isNaN(weight) || isNaN(height || weight <= 0 || weight <= 0)) {
    result.textContent = "Enter Valid Height and Weight";
  } else {
    const heightInMeters = height / 100;

    const bmi = weight / (heightInMeters * heightInMeters);
    result.textContent = `BMI : ${bmi.toFixed(2)} Laiba Moti`;
  }
});
