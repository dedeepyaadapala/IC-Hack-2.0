function calculateFootprint() {
    const transportation = parseFloat(document.getElementById('transportation-input').value);
    const diet = parseFloat(document.getElementById('diet-input').value);
    const energy = parseFloat(document.getElementById('energy-input').value);

    // Placeholder calculations, replace these with your actual formulas
    const co2 = transportation * 0.2 + diet * 2 + energy * 0.5;
    const methane = transportation * 0.1 + diet * 1 + energy * 0.3;
    const cfcs = transportation * 0.05 + diet * 0.5 + energy * 0.2;
    const nitrousOxide = transportation * 0.15 + diet * 1.5 + energy * 0.4;

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
    <div class="result-container">
            <h2><span class="result-paragraph">Results</span></h2>
            <p>
                <span class="result-paragraph">CO2: ${co2.toFixed(2)} kg/week</span>
            </p>
            <p>
                <span class="result-paragraph">Methane: ${methane.toFixed(2)} kg/week</span>
            </p>
            <p>
                <span class="result-paragraph">CFCs: ${cfcs.toFixed(2)} kg/week</span>
            </p>
            <p>
                <span class="result-paragraph">Nitrous Oxide: ${nitrousOxide.toFixed(2)} kg/week</span>
            </p>
        </div>
    `;
}
// Handle "Enter" key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculateFootprint();
    }
});





