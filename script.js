//$$ Converter

 // Convert currency
let temp;
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const textBox = document.getElementById('textBox');
const result = document.getElementById('result');
const convertButton = document.getElementById('convertButton');

fromCurrency.addEventListener('change', convert);
toCurrency.addEventListener('change', convert);
textBox.addEventListener('input', convert);
convertButton.addEventListener('click', convert);

function convert() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = parseFloat(textBox.value);
    

    if (from === 'toUSDollar' && to === 'toCADollar') {
        temp = amount * 1.25;
        result.textContent = temp.toFixed(2) + " CAD";
    } else if (from === 'toCADollar' && to === 'toUSDollar') {
        temp = amount / 1.25;
        result.textContent = temp.toFixed(2) + " USD";
    } else if (from === 'toMXN' && to === 'toUSDollar') {
        temp = amount / 25;
        result.textContent = temp.toFixed(2) + " USD";
    } else if (from === 'toGBP' && to === 'toUSDollar') {
        temp = amount / 0.75;
        result.textContent = temp.toFixed(2) + " USD";
    } else if (from === 'toEUR' && to === 'toUSDollar') {
        temp = amount / 0.85;
        result.textContent = temp.toFixed(2) + " USD";
    } else if (from === 'toUSDollar' && to === 'toMXN') {
        temp = amount * 25;
        result.textContent = temp.toFixed(2) + " MXN";
    } else if (from === 'toUSDollar' && to === 'toGBP') {
        temp = amount * 0.75;
        result.textContent = temp.toFixed(2) + " GBP";
    } else if (from === 'toUSDollar' && to === 'toEUR') {
        temp = amount * 0.85;
        result.textContent = temp.toFixed(2) + " EUR";
    } else if (from === 'toCADollar' && to === 'toMXN') {
        temp = amount * 25;
        result.textContent = temp.toFixed(2) + " MXN";
    } else if (from === 'toCADollar' && to === 'toGBP') {
        temp = amount * 0.75;
        result.textContent = temp.toFixed(2) + " GBP";
    } else if (from === 'toCADollar' && to === 'toEUR') {
        temp = amount * 0.85;
        result.textContent = temp.toFixed(2) + " EUR";
    } else if (from === 'toMXN' && to === 'toCADollar') {
        temp = amount / 25;
        result.textContent = temp.toFixed(2) + " CAD";
    } else if (from === 'toMXN' && to === 'toGBP') {
        temp = amount / 0.03;
        result.textContent = temp.toFixed(2) + " GBP";
    } else if (from === 'toMXN' && to === 'toEUR') {
        temp = amount / 24.5;
        result.textContent = temp.toFixed(2) + " EUR";
    } else if (from === 'toGBP' && to === 'toCADollar') {
        temp = amount / 0.75;
        result.textContent = temp.toFixed(2) + " CAD";
    } else if (from === 'toGBP' && to === 'toMXN') {
        temp = amount * 0.03;
        result.textContent = temp.toFixed(2) + " MXN";
    } else if (from === 'toGBP' && to === 'toEUR') {
        temp = amount * 1.18;
        result.textContent = temp.toFixed(2) + " EUR";
    } else if (from === 'toEUR' && to === 'toCADollar') {
        temp = amount / 0.85;
        result.textContent = temp.toFixed(2) + " CAD";
    } else if (from === 'toEUR' && to === 'toMXN') {
        temp = amount * 24.5;
        result.textContent = temp.toFixed(2) + " MXN";
    } else if (from === 'toEUR' && to === 'toGBP') {
        temp = amount / 1.18;
        result.textContent = temp.toFixed(2) + " GBP";
    }   else {
        result.textContent = "Please select valid currencies";
    }
}
