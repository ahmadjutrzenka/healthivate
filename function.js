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
        <p class="bg-primary bg-opacity-25 text-primary-emphasis rounded-3 px-3 py-2" style="font-size: 25px; font-style: italic"> Underweight </p>
        `;
        workout_list.innerHTML = `
            <li class="list-group-item d-flex justify-content-between align-items-center" style="border-left: 3px solid #406ef8">
            <span><strong>Push Up</strong> - 3 set x 10-15 rep</span>
            <span class="badge bg-primary ms-2">Strength</span>
            </li>

            <li class="list-group-item d-flex justify-content-between align-items-center" style="border-left: 3px solid #406ef8">
            <span><strong>Lunges</strong> - 3 set x 10 per kaki</span>
            <span class="badge bg-primary ms-2">Strength</span>
            </li>

            <li class="list-group-item d-flex justify-content-between align-items-center" style="border-left: 3px solid #406ef8">
            <span><strong>Plank</strong> - 3 set x 30 detik</span>
            <span class="badge bg-primary ms-2">Strength</span>
            </li>
        `;
        container2.style.display = "";
        // outputBMI.innerHTML = "Underweight"
        // outputWO1.innerHTML = "- Perbanyak makan buah-buahan"
    } else if (BMIValue >= 18.5 && BMIValue <= 24.9) {
        result.innerHTML = `
        <strong style="font-size: 30px; display: block; text-align: center"> ${BMIValue.toFixed(2)} </strong>
        <p class="bg-success bg-opacity-25 text-success-emphasis rounded-3 px-3 py-2" style="font-size: 25px; font-style: italic"> Normal </p>
        `;
        workout_list.innerHTML = `
            <li class="list-group-item d-flex justify-content-between align-items-center" style="border-left: 3px solid #3c8456">
            <span><strong>Jogging</strong> - 30-45 menit</span>
            <span class="badge bg-success ms-2">Cardio</span>
            </li>

            <li class="list-group-item d-flex justify-content-between align-items-center" style="border-left: 3px solid #406ef8">
            <span><strong>Push Up & Pull Up</strong> - 4 set x 12 rep</span>
            <span class="badge bg-primary ms-2">Strength</span>
            </li>
            
            <li class="list-group-item d-flex justify-content-between align-items-center" style="border-left: 3px solid #cc4649">
            <span><strong>HIIT</strong> - 20 menit</span>
            <span class="badge bg-danger ms-2">HIIT</span>
            </li>
        `;
        container2.style.display = "";
        // outputBMI.innerHTML = "Normal"
    } else if (BMIValue >= 25 && BMIValue <= 29.9) {
        result.innerHTML = `
        <strong style="font-size: 30px; display: block; text-align: center"> ${BMIValue.toFixed(2)} </strong>
        <p class="bg-warning bg-opacity-25 text-warning-emphasis rounded-3 px-3 py-2" style="font-size: 25px; font-style: italic"> Overweight </p>
        `;
        workout_list.innerHTML = `
            <li class="list-group-item d-flex justify-content-between align-items-center" style="border-left: 3px solid #3c8456">
            <span><strong>Jalan Cepat</strong> - 30-45 menit</span>
            <span class="badge bg-success ms-2">Cardio</span>
            </li>

            <li class="list-group-item d-flex justify-content-between align-items-center" style="border-left: 3px solid #406ef8">
            <span><strong>Bodyweight Squat</strong> - 3 set x 12 rep</span>
            <span class="badge bg-primary ms-2">Strength</span>
            </li>

            <li class="list-group-item d-flex justify-content-between align-items-center" style="border-left: 3px solid #3c8456">
            <span><strong>Berenang/Sepeda statis</strong> - 30 menit</span>
            <span class="badge bg-success ms-2">Cardio</span>
            </li>
        `;
        container2.style.display = "";
        // outputBMI.innerHTML = "Overweight"
    } else {
        result.innerHTML = `
        <strong style="font-size: 30px; display: block; text-align: center"> ${BMIValue.toFixed(2)} </strong>
        <p class="bg-danger bg-opacity-25 text-danger-emphasis rounded-3 px-3 py-2" style="font-size: 25px; font-style: italic"> Obesitas </p>
        `;
        workout_list.innerHTML = `
            <li class="list-group-item d-flex justify-content-between align-items-center" style="border-left: 3px solid #3c8456">
            <span><strong>Jalan Cepat</strong> - 30-45 menit</span>
            <span class="badge bg-success ms-2">Cardio</span>
            </li>
            
            <li class="list-group-item d-flex justify-content-between align-items-center" style="border-left: 3px solid #406ef8">
            <span><strong>Bodyweight Squat</strong> - 3 set x 12 rep</span>
            <span class="badge bg-primary ms-2">Strength</span>
            </li>
            
            <li class="list-group-item d-flex justify-content-between align-items-center" style="border-left: 3px solid #3c8456">
            <span><strong>Berenang/Sepeda statis</strong> - 30 menit</span>
            <span class="badge bg-success ms-2">Cardio</span>
            </li>
        `;
    }

    
    
});
