var index, table = document.getElementById('table');
var a = document.getElementById('btn');
a.addEventListener("click", function run() {
    var items = document.querySelectorAll('.myCheck');
    for (let i = 0; i < items.length; i++) {
        if (items[i].checked == true) {
            table.deleteRow(i + 1);

        }
    }
});
