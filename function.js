let btnBMI = document.getElementById("btn");
// let BMIOutput = document.getElementById("bmi-result");
let result = document.getElementById("result");
let workout_list = document.getElementById("workout-list");
let container2 = document.getElementById("container-2");

btnBMI.addEventListener("click", function calculateBMI() {
    console.log("clicked");
    let heightValue = document.getElementById("height").value / 100;
    let weightValue = document.getElementById("weight").value;

    let BMIValue = weightValue / (heightValue * heightValue);
    // BMIOutput.value = BMIValue.toFixed(2);

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
            <li>Perbanyak konsumsi makan-makanan
            <li>Kurangin latihan kardio
            <li>Perbanyak asupan protein
        `
        container2.style.display = "";
    }
    else if(BMIValue < 30) {
        result.innerHTML = `
        <strong style="font-size: 30px; display: block; text-align: center"> ${BMIValue.toFixed(2)} </strong>
        <p style="font-size: 25px;"> Overweight </p>
        `
        workout_list.innerHTML = `
            <li>Perbanyak konsumsi makan-makanan
            <li>Kurangin latihan kardio
            <li>Perbanyak asupan protein
        `
        container2.style.display = "";
    }
    else {
        result.innerHTML = `
        <strong style="font-size: 30px; display: block; text-align: center"> ${BMIValue.toFixed(2)} </strong>
        <p style="font-size: 25px;"> Obesitas </p>
        `
        workout_list.innerHTML = `
            <li>Perbanyak konsumsi makan-makanan
            <li>Kurangin latihan kardio
            <li>Perbanyak asupan protein
        `
    } 

})

// function calculateBMI() {
//     console.log("clicked");
//     let heightValue = document.getElementById("height").value / 100;
//     let weightValue = document.getElementById("weight").value;

//     const BMIValue = weightValue / (heightValue * heightValue);
//     // BMIOutput.value = BMIValue.toFixed(2);

//     if(BMIValue < 18.5) {
//         result.innerHTML = `
//         <strong style="font-size: 30px; display: block; text-align: center"> ${BMIValue.toFixed(2)} </strong>
//         <p style="font-size: 25px;"> Underweight </p>
//         `
//         workout_list.innerHTML = `
//             <li>Perbanyak konsumsi makan-makanan
//             <li>Kurangin latihan kardio
//             <li>Perbanyak asupan protein
//         `
//         container2.style.display = "";
//         // outputBMI.innerHTML = "Underweight"
//         // outputWO1.innerHTML = "- Perbanyak makan buah-buahan"
//     }
//     else if(BMIValue >= 18.5 && BMIValue <= 24.9) {
//         // outputBMI.innerHTML = "Normal"
//     }
//     else if(BMIValue >= 25 && BMIValue <= 29.9) {
//         // outputBMI.innerHTML = "Overweight"
//     }
//     else {
//         // outputBMI.innerHTML = "Obesity"
//     } 
// }

// btnBMI.addEventListener('click', calculateBMI);