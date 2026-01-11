const lottoNumbersContainer = document.getElementById('lotto-numbers');
const generateBtn = document.getElementById('generate-btn');

function generateLottoSet() {
    const lottoSet = new Set();
    while (lottoSet.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        lottoSet.add(randomNumber);
    }
    return Array.from(lottoSet).sort((a, b) => a - b);
}

function displayNumbers() {
    lottoNumbersContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const lottoSet = generateLottoSet();
        const setElement = document.createElement('div');
        setElement.classList.add('lotto-set');
        for (const number of lottoSet) {
            const numberElement = document.createElement('div');
            numberElement.classList.add('lotto-number');
            numberElement.textContent = number;
            setElement.appendChild(numberElement);
        }
        lottoNumbersContainer.appendChild(setElement);
    }
}

generateBtn.addEventListener('click', displayNumbers);

// Initial generation
displayNumbers();
