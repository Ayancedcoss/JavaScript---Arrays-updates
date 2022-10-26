let arr = [
    { campany: 'samsung', model: 'galaxy', memory: 64, price: 15000, quantity: 20 },
    { campany: "nokia", model: "s730", memory: 128, price: 22000, quantity: 15 },
    { campany: "xiomi", model: "note", memory: 32, price: 12000, quantity: 21 },
    { campany: "motorola", model: "g10", memory: 32, price: 15000, quantity: 13, },
    { campany: 'apple', model: "s20", memory: 64, price: 25000, quantity: 18 }
];
let arr1 = [];
function update() {
    var dropValue = document.getElementById("inp1").value;
    var inputValue = document.getElementById("inp").value;
    var obj = { 'drop': dropValue, 'inpval': inputValue }
    for (const i in arr) {
        for (const j in arr[i]) {
            if (arr[i][j] == dropValue) {
                var quantity1 = arr[i]["quantity"];
                arr[i]["quantity"] = inputValue;
                var dat = "<table>";
                arr.forEach(element => {
                    dat += "<tr><td>" + (element.campany) + "</td><td>" + (element.model) + "</td><td>" + (element.memory) + "</td><td>" + (element.price) + "</td><td>" + (element.quantity) + "</td></tr>";
                }
                );
                dat += "</table>"
                document.getElementById("demo").innerHTML = dat;
            }
        }
    }
}
