const lottoNumbersContainer = document.getElementById('lotto-numbers');
const generateBtn = document.getElementById('generate-btn');
const themeToggleBtn = document.getElementById('theme-toggle');

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
    // Generate only one set
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

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggleBtn.textContent = isDarkMode ? '☀️' : '🌙';
}

generateBtn.addEventListener('click', displayNumbers);
themeToggleBtn.addEventListener('click', toggleTheme);

// Initial generation
displayNumbers();