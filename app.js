const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNo(num) {
    return Math.round(num * 100) / 100;
}

function cConvert() {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9 / 5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = roundNo(fTemp);
    kelvinInput.value = roundNo(kTemp);

}


function fConvert() {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5 / 9);
    const kTemp = (fTemp + 459.67) * (5 / 9)
    celciusInput.value = roundNo(cTemp);
    kelvinInput.value = roundNo(kTemp);


}

function kConvert() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = ((kTemp - 273.15) * (9 / 5)) + 32;
    celciusInput.value = roundNo(cTemp);
    fahrenheitInput.value = roundNo(fTemp);

}

celciusInput.addEventListener('input', cConvert)
fahrenheitInput.addEventListener('input', fConvert)
kelvinInput.addEventListener('input', kConvert)