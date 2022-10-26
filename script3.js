let arr = [
    { campany: 'samsung', model: 'galaxy', memory: 64, price: 15000, quantity: 20 },
    { campany: "nokia", model: "s730", memory: 128, price: 22000, quantity: 15 },
    { campany: "xiomi", model: "note", memory: 32, price: 12000, quantity: 21 },
    { campany: "motorola", model: "g10", memory: 32, price: 15000, quantity: 13, },
    { campany: 'apple', model: "s20", memory: 64, price: 25000, quantity: 18 }
];
let arr1 = [];
function add() {

    var dropValue = document.getElementById("inp1").value;
    var inputValue = document.getElementById("inp").value;
    var obj = { 'drop': dropValue, 'inpval': inputValue }
    arr.push(obj);

    for (const i in arr) {
        for (const j in arr[i]) {
            if (arr[i][j] == dropValue) {
                var quantity1 = arr[i]["quantity"];

                var finalQun = quantity1 - inputValue;
                arr[i]["quantity"] = finalQun;
                var str = "<table id='one'>";
                str += "<tr>";
                for (const k in arr) {
                    if (arr[k]["campany"] == dropValue) {
                        for (const l in arr[k]) {
                            str += "<td>" + l + "<br>" + arr[k][l] + "</td>";
                        }
                    }
                    str += "</tr>";
                }
                str += "</table>";

            }
        }
    }
    arr1.push(str);
    console.log(arr1);
    document.getElementById("demo").innerHTML = arr1;
}