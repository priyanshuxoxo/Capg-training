let table = document.createElement("table");
document.body.append(table);
table.style.border = "1px solid black";
table.style.backgroundColor = "red";
for (let i = 0; i < 5; i++) {
  let row = document.createElement("tr");
  for (let j = 0; j < 5; j++) {
    let col = document.createElement("td");
    col.textContent = `Row ${1 + i},col${1 + j}`;
    row.append(col);
    col.style.border = "2px solid black";
    col.style.padding = "10px";
    col.style.textAlign = "center";
    col.style.backgroundColor = "lightblue";
  }
  table.append(row);
}
