/*======= Container BMI & Workout Recommendation =======*/
let btnBMI = document.getElementById("btn");
let result = document.getElementById("result");
let workout_list = document.getElementById("workout-list");
let container2 = document.getElementById("container-2");

btnBMI.addEventListener("click", function calculateBMI() {
  console.log("clicked");
  let heightValue = document.getElementById("height").value / 100;
  let weightValue = document.getElementById("weight").value;

  let BMIValue = weightValue / (heightValue * heightValue);

  if (!heightValue || !weightValue) return;

  if (BMIValue < 18.5) {
    result.innerHTML = `
        <strong style="font-size: 30px; display: block; text-align: center"> ${BMIValue.toFixed(2)} </strong>
        <p style="font-size: 25px; font-style: italic"> Underweight </p>
        `;
    workout_list.innerHTML = `
            <li><strong>Push Up</strong> - 3 set x 10-15 rep (Membangun otot dada dan trisep)
            <li><strong>Lunges</strong> - 3 set x 10 per kaki (Melatih keseimbangan)
            <li><strong>Plank</strong> - 3 set x 30 detik (Memperkuat otot core/perut)
        `;
    container2.style.display = "";
    // outputBMI.innerHTML = "Underweight"
    // outputWO1.innerHTML = "- Perbanyak makan buah-buahan"
  } else if (BMIValue >= 18.5 && BMIValue <= 24.9) {
    result.innerHTML = `
        <strong style="font-size: 30px; display: block; text-align: center"> ${BMIValue.toFixed(2)} </strong>
        <p style="font-size: 25px; font-style: italic"> Normal </p>
        `;
    workout_list.innerHTML = `
            <li><strong>Jogging</strong> - 30-45 menit (Menjaga stamina dan kardio)
            <li><strong>Push Up & Pull Up</strong> - 4 set x 12 rep (Melatih kekuatan upper body)
            <li><strong>HIIT (High-Intensity Interval Training)</strong> - 20 menit (Bakar lemak dan bangun otot)
        `;
    container2.style.display = "";
    // outputBMI.innerHTML = "Normal"
  } else if (BMIValue >= 25 && BMIValue <= 29.9) {
    result.innerHTML = `
        <strong style="font-size: 30px; display: block; text-align: center"> ${BMIValue.toFixed(2)} </strong>
        <p style="font-size: 25px; font-style: italic"> Overweight </p>
        `;
    workout_list.innerHTML = `
            <li><strong>Jalan Cepat</strong> - 30-45 menit (Cara teraman untuk bakar kalori)
            <li><strong>Bodyweight Squat</strong> - 3 set x 12 rep (Melatih otot besar kaki)
            <li><strong>Berenang atau Sepeda statis</strong> - 30 menit (Melatih persendian)
        `;
    container2.style.display = "";
    // outputBMI.innerHTML = "Overweight"
  } else {
    result.innerHTML = `
        <strong style="font-size: 30px; display: block; text-align: center"> ${BMIValue.toFixed(2)} </strong>
        <p style="font-size: 25px; font-style: italic"> Obesitas </p>
        `;
    workout_list.innerHTML = `
            <li><strong>Jalan Cepat</strong> - 30-45 menit (Langkah teraman untuk bakar kalori)
            <li><strong>Bodyweight Squat</strong> - 3 set x 12 rep (Melatih otot besar kaki)
            <li><strong>Berenang atau Sepeda statis</strong> - 30 menit (Menjaga dan melatih kekuatan persendian)
        `;
  }
});
