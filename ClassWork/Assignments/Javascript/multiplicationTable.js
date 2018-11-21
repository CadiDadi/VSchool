const multiplicationTable = (num) => {
    const tableData = [];
    for(let row = 1; row <= num; row++){
        tableData.push([]);
        for(let col = 1; col <= num; col++){
            tableData[row - 1].push(row * col);
        }
    }
    return tableData
}
console.log(multiplicationTable(12))