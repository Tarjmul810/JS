const buttons = document.querySelectorAll('.btn-opt');
const resultDisplay = document.getElementById('results');

if (resultDisplay) {
    buttons.forEach(btn => {
        btn?.addEventListener('click', event => {
            const buttonValue = event.target.textContent;
            if (buttonValue) {
                resultDisplay.textContent += buttonValue;
            }
        });
    });

    document.getElementById('clear')?.addEventListener('click', () => {
        resultDisplay.textContent = '';
    });

    document.getElementById('equal')?.addEventListener('click', () => {
        resultDisplay.textContent.toString();
        try {
            resultDisplay.textContent = eval(resultDisplay.textContent);
        } catch (error) {
            resultDisplay.textContent = 'Error';
        }
    });
}


