let arr = [
    { campany: 'samsung', model: 'galaxy', memory: 64, price: 15000, quantity: 20 },
    { campany: "nokia", model: "s730", memory: 128, price: 22000, quantity: 15 },
    { campany: "xiomi", model: "note", memory: 32, price: 12000, quantity: 21 },
    { campany: "motorola", model: "g10", memory: 32, price: 15000, quantity: 13, },
    { campany: 'apple', model: "s20", memory: 64, price: 25000, quantity: 18 }
];
let arr1 = [];
var header = { Discrip: "Discription", Qun: "Quantity", pric: "Price" };
arr1.push(header);
console.log(arr1);

var obj = document.querySelector("#addclick");

obj.addEventListener('click', function () {
    var drop_value = document.getElementById("inp1").value;
    var qun_number = document.getElementById("inp").value;
    for (const i in arr) {
        for (const j in arr[i]) {
            if (arr[i][j] == drop_value) {
                var sum = arr[i].price * qun_number;
                var obj1 = { campany: drop_value, quantity: qun_number, price: sum };
            }

        }
    }

    arr1.push(obj1);
    var str = "<table>"
    for (const i in arr1) {
        str += "<tr>";
        for (const j in arr1[i]) {

            str += "<td>" + arr1[i][j] + "</td>";
        }
        str += "</tr>";
    }
    str += "</table>";

    document.getElementById('demo').innerHTML = str;

    console.log(arr1);
});
var total = 0;
var genbill = document.querySelector("#total_amt");
genbill.addEventListener('click', function () {

    for (const i in arr1) {
        for (const j in arr1[i]) {
            if (j == "price") {
                var pri = arr1[i][j];
                total = total + pri;
            }
        }
    }
    console.log(total)
    document.querySelector("#tt").innerHTML = total;
    document.querySelector('#rr').style.display = 'block';
});
