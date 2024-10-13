// temperature conversion program

const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const results = document.getElementById("results");
const reaction = document.getElementById("reaction");
let temperature;

function convert(){

    if(toFahrenheit.checked){
        temperature = Number(textbox.value);
        temperature = (temperature *(9/5)) + 32 ;
        results.textContent = temperature.toFixed(1) + " °F";
        
        if (temperature > 71 && temperature < 99){
            reaction.textContent = "😀";
        }
        else if(temperature <= 71 && temperature > 50 ){
            reaction.textContent = "🤗";
        }
        else if(temperature < 50 ){
            reaction.textContent = "🥶";
        }
        else if(temperature >= 99 && temperature < 109 ){
            reaction.textContent = "😥";
        }
        else {
            reaction.textContent = "🥵";
        }
    }
    else if(toCelsius.checked){
        temperature = Number(textbox.value);
        temperature = (temperature-32 ) *(5/9);
        results.textContent = temperature.toFixed(1) + " °C";

        if (temperature > 22 && temperature < 37){
            reaction.textContent = "😀";
        }
        else if(temperature <= 22 && temperature > 10 ){
            reaction.textContent = "🤗";
        }
        else if(temperature < 10 ){
            reaction.textContent = "🥶";
        }
        else if(temperature >= 37 && temperature < 43 ){
            reaction.textContent = "😥";
        }
        else {
            reaction.textContent = "🥵";
        }
    }
    else{
        results.textContent = "Select A Unit";
    }

    

}