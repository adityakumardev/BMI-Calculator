const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');

const result = document.querySelector('.results');

const calculatebutton = document.querySelector('.calculate');

calculatebutton.addEventListener("click", function (event) {
    event.preventDefault();// to stop page from being reset

    console.log("Height Input Value:", heightInput.value);
    console.log("Weight Input Value:", weightInput.value);

    const heightValue = parseFloat(heightInput.value) / 100;
    const weightValue = parseFloat(weightInput.value);

    console.log("Parsed Height:", height);
    console.log("Parsed Weight:", weight);

    if (heightValue === 0) {
        result.innerHTML = "Height cannot be zero.";
    }

    // Calculate BMI
    const bmi = weightValue / (heightValue * heightValue);

    // Display the BMI result
    result.innerHTML = "Your BMI is: " + bmi.toFixed(2) + " kg/m²";
});

const clearButton = document.querySelector('.reset');

clearButton.addEventListener("click", function(event) {
    
});