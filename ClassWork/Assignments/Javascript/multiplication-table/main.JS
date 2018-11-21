document.write("<h1 style='color: #008B8B'>Multiplication Table</h1>")
document.write("<table>")
for(var i = 1; i <= 12; i++) {
	document.write("<tr>")
	for(var j = 1; j <= 12; j++) {
		if(j == 1 || i == 1) {
			color_td = "#20B2AA"
		}
		else {
			color_td = "#B0C4DE"
		}
		document.write("<td style='background-color:" + color_td + "'>" + i*j + "</td>")
	}
	document.write("</tr>")
}
document.write("</table>")

// // Alternate loop
// 		const multiplicationTable = (x) => {
// 			const output = [];
// 			for(let row = 1; row <= x; row++){
// 				output.push([]);
// 				for(let col = 1; col <= x; col++){
// 					output[row - 1].push(row * col);
// 				}
// 			}
// 			return output;
// 		}
// 		console.log(multiplicationTable(10));