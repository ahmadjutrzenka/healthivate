let btnBMI = document.getElementById("btn");
let result = document.getElementById("result");
let workout_list = document.getElementById("workout-list");
let container2 = document.getElementById("container-2");

btnBMI.addEventListener("click", function calculateBMI() {
    console.log("clicked");
    let heightValue = document.getElementById("height").value / 100;
    let weightValue = document.getElementById("weight").value;

    let BMIValue = weightValue / (heightValue * heightValue);

    if(!heightValue || !weightValue) return;

    if(BMIValue < 18.5) {
        result.innerHTML = `
        <strong style="font-size: 30px; display: block; text-align: center"> ${BMIValue.toFixed(2)} </strong>
        <p style="font-size: 25px;"> Underweight </p>
        `
        workout_list.innerHTML = `
            <li>Push Up - 3 set x 10-15 rep - membangun otot dada dan trisep</li>
            <li>Squat - 3 set x 12 rep - membentuk otot kaki</li>
            <li>Plank - 3 set x 30 detik - memperkuat otot inti</li>
            <li>Lunges - 3 set x 10 per kaki - melatih keseimbangan</li>
            <li>Yoga Ringan - 20 menit - meningkatkan fleksibilitas</li>
        `
        container2.style.display = "";
        
    }
    else if(BMIValue < 25) {
        result.innerHTML = `
        <strong style="font-size: 30px; display: block; text-align: center"> ${BMIValue.toFixed(2)} </strong>
        <p style="font-size: 25px;"> Normal </p>
        `
        workout_list.innerHTML = `
            <li>Jogging - 30-45 menit - menjaga stamina dan kardio</li>
            <li>Push Up & Pull Up - 4 set x 12 rep - kekuatan upper body</li>
            <li>HIIT - 20 menit - bakar lemak dan bangun otot</li>
            <li>Swimming - 30 menit - olahraga seluruh tubuh</li>
            <li>Stretching - 15 menit - recovery dan fleksibilitas</li>
        `
        container2.style.display = "";
    }
    else if(BMIValue < 30) {
        result.innerHTML = `
        <strong style="font-size: 30px; display: block; text-align: center"> ${BMIValue.toFixed(2)} </strong>
        <p style="font-size: 25px;"> Overweight </p>
        `
        workout_list.innerHTML = `
            <li>Jalan Cepat - 30-45 menit - cara aman bakar kalori</li>
            <li>Cycling - 30 menit - cardio ramah persendian</li>
            <li>Bodyweight Squat - 3 set x 12 rep - melatih otot besar kaki</li>
            <li>Swimming - 30 menit - tanpa beban pada sendi</li>
            <li>Stretching - 15 menit - mencegah cedera</li>
        `
        container2.style.display = "";
    }
    else {
        result.innerHTML = `
        <strong style="font-size: 30px; display: block; text-align: center"> ${BMIValue.toFixed(2)} </strong>
        <p style="font-size: 25px;"> Obesitas </p>
        `
        workout_list.innerHTML = `
            <li>Jalan Santai - 20 menit - mulai bertahap</li>
            <li>Chair Exercise - 15 menit - latihan duduk yang aman</li>
            <li>Stretching Ringan - 10 menit - meningkatkan mobilitas</li>
            <li>Water Aerobics - 20 menit - ringan untuk persendian</li>
            <li>Latihan Pernapasan - 10 menit - meningkatkan kapasitas paru</li>
        `
    } 

})
