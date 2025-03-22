function getPiphagoreTable(x) {
    const result = new Map();
    Array.from({ length: x }, (_, i) => i + 1).forEach((number) => {
        for (let i = 1; i <= x; i++) {
            result.set(number, [...(result.get(number) ?? []), number * i]);
        }
    });

    return Object.fromEntries(result);
}

document.getElementById('pifagor_calculate_button').addEventListener('click', (event) => {
    const pifagoreTableElement = document.getElementById('pifagor-table');

    // clear previous result
    pifagoreTableElement.replaceChildren();

    const enteredNumber = Number(document.getElementById('pifagor_number_input').value);
    const table = getPiphagoreTable(enteredNumber);

    const headerRow = document.createElement('tr');

    const tableKeysArray = Object.keys(table);
    tableKeysArray.forEach((tableKey) => {
        const tableHeaderCellElement = document.createElement('td');
        tableHeaderCellElement.textContent = tableKey;
        headerRow.append(tableHeaderCellElement);
    });
    pifagoreTableElement.append(headerRow);

    tableKeysArray.forEach((tableKey) => {
        const contentRow = document.createElement('tr');
        const tableKeyValues = Object.values(table[tableKey]);

        tableKeyValues.forEach((tableKeyValue) => {
            const tableKeyValueCellElement = document.createElement('td');
            tableKeyValueCellElement.textContent = tableKeyValue;
            contentRow.append(tableKeyValueCellElement);
        });
        pifagoreTableElement.append(contentRow);
    });
})
