let btnBMI = document.getElementById("btn");
let BMIOutput = document.getElementById("bmi-result");
let result = document.getElementById("result");
let workout_list = document.getElementById("workout-list");
let container2 = document.getElementById("container-2");

function calculateBMI() {
    console.log("clicked");
    const heightValue = document.getElementById("height").value / 100;
    const weightValue = document.getElementById("weight").value;

    const BMIValue = weightValue / (heightValue * heightValue);
    // BMIOutput.value = BMIValue.toFixed(2);

    if(BMIValue < 18.5) {
        result.innerHTML = `
        <strong style="font-size: 30px; display: block; text-align: center"> ${BMIValue.toFixed(2)} </strong>
        <p style="font-size: 25px;"> Underweight </p>
        `
        workout_list.innerHTML = `
            <li>Perbanyak konsumsi makan-makanan
            <li>Kurangin latihan kardio
            <li>Perbanyak asupan protein
        `
        container2.style.display = "";
        // outputBMI.innerHTML = "Underweight"
        // outputWO1.innerHTML = "- Perbanyak makan buah-buahan"
    }
    else if(BMIValue >= 18.5 && BMIValue <= 24.9) {
        // outputBMI.innerHTML = "Normal"
    }
    else if(BMIValue >= 25 && BMIValue <= 29.9) {
        // outputBMI.innerHTML = "Overweight"
    }
    else {
        // outputBMI.innerHTML = "Obesity"
    } 

    console.log(BMIValue);
}

btnBMI.addEventListener('click', calculateBMI);