let array = [];
const arraycontainer = document.getElementById('arraycontainer');
function generateRandomArray() {
    array = [];
    for (let i = 0; i < 20; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    renderArray();
}
function renderArray() {
    arraycontainer.innerHTML = '';
    array.forEach(value => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value * 3}px`;
        bar.dataset.value = value;
        arraycontainer.appendChild(bar);
    });
}

async function bubblesort() {
    const bars = document.querySelectorAll('.bar');
    let n = array.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            const bar1 = bars[i];
            const bar2 = bars[i + 1];
            bar1.style.backgroundColor = 'red';
            bar2.style.backgroundColor = 'red';
            if (parseInt(bar1.style.height) > parseInt(bar2.style.height)) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                bar1.style.height = `${array[i] * 3}px`;
                bar2.style.height = `${array[i + 1] * 3}px`;
                swapped = true;
            }
            await pause(100);
            bar1.style.backgroundColor = 'green';
            bar2.style.backgroundColor = 'green';
        }
        n--;
    } while (swapped);
    renderArray();
}
function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function startSorting() {
    bubblesort();
}
function resetArray() {
    generateRandomArray();
}