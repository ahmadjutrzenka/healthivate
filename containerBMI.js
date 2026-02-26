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
        <p class="bg-primary bg-opacity-25 text-primary-emphasis rounded-3 px-3 py-2" style="font-size: 25px; font-style: italic"> Underweight </p>
        `;
        workout_list.innerHTML = `
            <div class="row g-3 mt-3">

                <div class="col-12 col-md-4">
                        <div class="card workout-card h-100 shadow-sm" style="border-top: 4px solid #cc4649">
                            <div class="card-body text-center">
                                <img src="assets/icons/squat.png">
                                <h5>Squat to Knee Drive</h5>
                                <p>3 set x 12 rep</p>
                                <span class="badge bg-danger">HIIT</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4">
                        <div class="card workout-card h-100 shadow-sm" style="border-top: 4px solid #406ef8">
                            <div class="card-body text-center">
                                <img src="assets/icons/pushup.png">
                                <h5 class="card-title">Push Up</h5>
                                <p>4 set x 8-12 rep</p>
                                <span class="badge bg-primary">Strength</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4">
                        <div class="card workout-card h-100 shadow-sm" style="border-top: 4px solid #3da5b4">
                            <div class="card-body text-center">
                                <img src="assets/icons/stretching.png">
                                <h5>Full Body Stretching</h5>
                                <p>5-10 menit</p>
                                <span class="badge bg-info">Flexibility</span>
                            </div>
                        </div>
                    </div>
            </div>
        `;
        container2.style.display = "";
        // outputBMI.innerHTML = "Underweight"
        // outputWO1.innerHTML = "- Perbanyak makan buah-buahan"
    } else if (BMIValue >= 18.5 && BMIValue < 25) {
        result.innerHTML = `
            <strong style="font-size: 30px; display: block; text-align: center" > ${BMIValue.toFixed(2)} </strong>
                <p class="bg-success bg-opacity-25 text-success-emphasis rounded-3 px-3 py-2" style="font-size: 25px; font-style: italic"> Normal </p>
        `;
        workout_list.innerHTML = `
             <div class="row g-3 mt-3">

             <div class="col-12 col-md-4">
                 <div class="card workout-card h-100 shadow-sm" style="border-top: 4px solid #cc4649">
                     <div class="card-body text-center">
                         <img src="assets/icons/jumpSquat.png">
                         <h5>Jump Squat</h5>
                         <p>3 set x 12-15 rep</p>
                         <span class="badge bg-danger">HIIT</span>
                     </div>
                 </div>
             </div>

                <div class="col-12 col-md-4">
                        <div class="card workout-card h-100 shadow-sm" style="border-top: 4px solid #406ef8">
                            <div class="card-body text-center">
                                <img src="assets/icons/pushup.png">
                                <h5 class="card-title">Push Up</h5>
                                <p>4 set x 8-12 rep</p>
                                <span class="badge bg-primary">Strength</span>
                            </div>
                        </div>
                    </div>


                    <div class="col-12 col-md-4">
                        <div class="card workout-card h-100 shadow-sm" style="border-top: 4px solid #3da5b4">
                            <div class="card-body text-center">
                                <img src="assets/icons/staticStretching.png">
                                <h5>Static Stretching</h5>
                                <p>5-8 menit</p>
                                <span class="badge bg-info">Flexibility</span>
                            </div>
                        </div>
                    </div>
            </div>
        `;
        container2.style.display = "";
        // outputBMI.innerHTML = "Normal"
    } else if (BMIValue >= 25 && BMIValue < 30) {
        result.innerHTML = `
            <strong style="font-size: 30px; display: block; text-align: center" > ${BMIValue.toFixed(2)} </strong>
                <p class="bg-warning bg-opacity-25 text-warning-emphasis rounded-3 px-3 py-2" style="font-size: 25px; font-style: italic"> Overweight </p>
        `;
        workout_list.innerHTML = `
            <div class="row g-3 mt-3">

             <div class="col-12 col-md-4">
                 <div class="card workout-card h-100 shadow-sm" style="border-top: 4px solid #cc4649">
                     <div class="card-body text-center">
                         <img src="assets/icons/lowImpact.png">
                         <h5>LIIT</h5>
                         <p>30 detik alternating 20 menit</p>
                         <span class="badge bg-danger">HIIT</span>
                     </div>
                 </div>
             </div>

                <div class="col-12 col-md-4">
                        <div class="card workout-card h-100 shadow-sm" style="border-top: 4px solid #406ef8">
                            <div class="card-body text-center">
                                <img src="assets/icons/wallSit.png">
                                <h5 class="card-title">Wall Sit</h5>
                                <p>3 set x 30-45 detik</p>
                                <span class="badge bg-primary">Strength</span>
                            </div>
                        </div>
                    </div>


                    <div class="col-12 col-md-4">
                        <div class="card workout-card h-100 shadow-sm" style="border-top: 4px solid #3da5b4">
                            <div class="card-body text-center">
                                <img src="assets/icons/stretching.png">
                                <h5>Full Body Stretching</h5>
                                <p>8-10 menit</p>
                                <span class="badge bg-info">Flexibility</span>
                            </div>
                        </div>
                    </div>
            </div>
        `;
        container2.style.display = "";
        // outputBMI.innerHTML = "Overweight"
    } else {
        result.innerHTML = `
            <strong style = "font-size: 30px; display: block; text-align: center" > ${BMIValue.toFixed(2)} </strong>
                <p class="bg-danger bg-opacity-25 text-danger-emphasis rounded-3 px-3 py-2" style="font-size: 25px; font-style: italic"> Obesitas </p>
        `;
        workout_list.innerHTML = `
            <div class="row g-3 mt-3">

             <div class="col-12 col-md-4">
                 <div class="card workout-card h-100 shadow-sm" style="border-top: 4px solid #3c8456">
                     <div class="card-body text-center">
                         <img src="assets/icons/briskWalk.png">
                         <h5>Brisk Walking</h5>
                         <p>1 menit alternating 15-20 menit</p>
                         <span class="badge bg-success">Cardio</span>
                     </div>
                 </div>
             </div>

                <div class="col-12 col-md-4">
                        <div class="card workout-card h-100 shadow-sm" style="border-top: 4px solid #406ef8">
                            <div class="card-body text-center">
                                <img src="assets/icons/chairSquat.png">
                                <h5 class="card-title">Chair Squat</h5>
                                <p>3 set x 8-10 rep</p>
                                <span class="badge bg-primary">Strength</span>
                            </div>
                        </div>
                    </div>


                    <div class="col-12 col-md-4">
                        <div class="card workout-card h-100 shadow-sm" style="border-top: 4px solid #3da5b4">
                            <div class="card-body text-center">
                                <img src="assets/icons/seatedStretching.png">
                                <h5>Seated Stretching</h5>
                                <p>10 menit</p>
                                <span class="badge bg-info">Flexibility</span>
                            </div>
                        </div>
                    </div>
            </div>
        `;
    }
});
