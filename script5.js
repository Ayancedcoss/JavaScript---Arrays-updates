let arr = ["apple", "nokia", "moto", "xiomi"];
let arr1 = ["realmi", "redmi", "samsung", "htc"];
function fun() {
    var min = document.getElementById("d1").value;
    var max = document.getElementById("d2").value;
    var m = parseInt(min);
    var m1 = parseInt(max);
    if (m1 < m) {
        alert(" max price should be greater");
    }
    else {
        if (m >= 1000 && m1 <= 3000) {
            arr.forEach(element => {
                document.getElementById("demo").innerHTML = arr;
            });
        }
        else {
            if (m >= 4000 && m1 <= 10000) {
                arr1.forEach(element => {
                    document.getElementById("demo").innerHTML = arr1;
                });
            } else {
                alert("no result found");
            }
        }

    }
}