const ingridients = document.querySelectorAll('#ingredient');
const servingsAmount = document.querySelector('#servingsAmount');
const servingBtn = document.querySelector('#servingBtn');

servingsAmount.addEventListener('change', () => {
    servingsAmount.setAttribute('data-servings-current-amount', servingsAmount.value)
    updateIngridientsAmount(servingsAmount.value);
});

function updateIngridientsAmount(currentServings) {
    const baseAmountServings = Number(servingsAmount.getAttribute('data-servings-base-amount'));
    for (const element of ingridients) {
        const baseAmountIngridients = Number(element.getAttribute('data-ingridient-base-amount'));
        let gridientsPerServing = baseAmountIngridients / baseAmountServings;
        let currentIngridientAmount = gridientsPerServing * Number(currentServings);
        element.setAttribute('data-ingridient-amount', currentIngridientAmount)
    }
}